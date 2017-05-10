(function () {

    var $ = function (id) {
        return document.getElementById(id);
    };
    
    // 获取焦点时，出现规则提示
    function tip(e) {
        var target = e.target || e.srcElement;
        var p_content = target.parentNode.lastElementChild;
        p_content.style.color = '#999';
        target.style.borderColor = '#999';
        if (target.name == 'n-test') {
            $('n-tips').innerHTML = '必填，长度为4~6个字符';
        } else if (target.name == 'p-test') {
            $('p-tips').innerHTML = '请输入密码，长度需不小于6，必须为字母、数字或_的组合';
        } else if (target.name == 'pp-test') {
            $('pp-tips').innerHTML = '请再次输入相同密码';
        } else if (target.name == 'e-test') {
            $('e-tips').innerHTML = '请输入邮箱';
        } else if (target.name == 't-test') {
            $('t-tips').innerHTML = '请输入手机号,如12345678910';
        }
    }
   
    $('form').addEventListener('focusin', tip);//获得焦点事件
    $('form').addEventListener('focusout', test);//失去焦点事件
    
    function test(e) {
        var target = e.target || e.srcElement;
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        // 名称若为空，给出提示错误信息，结束程序
        if (data == "" && target.name != 'btn') {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
        }
        // 名称不为空，根据当前项验证，给出提示信息
        else {
            if (target.name == 'n-test') {
                nTest();
            } else if (target.name == 'p-test') {
                pTest();
            } else if (target.name == 'pp-test') {
                ppTest();
            } else if (target.name == 'e-test') {
                eTest();
            } else if (target.name == 't-test') {
                tTest();
            }
        }
    }

    // 名称验证
    function nTest() {
        var target = $('n-test');
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        var arr = data.split('');
        var num = 0;
        var key;
        if (data == "") {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
            key = 0;
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].charCodeAt() < 128) { //字符编码<128，为英文字符
                    num++; //长度+1
                } else {
                    num += 2; //否则长度+2
                }
            }
            //长度在4~16之间
            if (4 <= num && num <= 16) {
                target.style.borderColor = '#008000';
                p_content.style.color = '#008000';
                p_content.innerHTML = "名称格式正确";
                key = 1;
            }
            //长度不在4~16之间
            else {
                target.style.borderColor = '#f00';
                p_content.style.color = '#f00';
                p_content.innerHTML = "名称格式不正确,长度需为4~6个字符";
                key = 0;
            }
        }
        return key;
    }

    // 密码验证
    function pTest() {
        var target = $('p-test');
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        var en = data.match(/[a-zA-Z]/g);
        var num = data.match(/\d/g);
        var simb = data.match(/_/g);
        var eg = data.match(/^[\w]{6,}$/g);
        var key;
        if (data == "") {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
            key = 0;
        } else {
            if (!!eg) {
                if ((!!en && !!num) || (!!en && !!simb) || (!!simb && !!num)) {
                    target.style.borderColor = '#008000';
                    p_content.style.color = '#008000';
                    p_content.innerHTML = "密码可用";
                    key = 1;
                } else {
                    target.style.borderColor = '#f00';
                    p_content.style.color = '#f00';
                    p_content.innerHTML = "密码格式不正确，必须为字母、数字或_的组合";
                    key = 0;
                }
            } else {
                target.style.borderColor = '#f00';
                p_content.style.color = '#f00';
                p_content.innerHTML = "密码格式不正确，长度需不小于6，必须为字母、数字或_的组合";
                key = 0;
            }
        }
        return key;
    }

    // 密码二次验证
    function ppTest() {
        var target = $('pp-test');
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        var p_value = document.getElementById('p-test').value;
        var key;
        if (data == "") {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
            key = 0;
        } else {
            if (p_value == data) {
                target.style.borderColor = '#008000';
                p_content.style.color = '#008000';
                p_content.innerHTML = "密码输入一致";
                key = 1;
            } else {
                target.style.borderColor = '#f00';
                p_content.style.color = '#f00';
                p_content.innerHTML = "两次密码不相同，请重新输入";
                key = 0;
            }
        }
        return key;
    }

    // 邮箱验证
    function eTest() {
        var target = $('e-test');
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        var flag = data.match(/^[\w]+@[a-zA-Z0-9]+\.([a-zA-Z0-9]){2,3}$/g);
        var key;
        if (data == "") {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
            key = 0;
        } else {
            if (!!flag) {
                target.style.borderColor = '#008000';
                p_content.style.color = '#008000';
                p_content.innerHTML = "邮箱格式正确";
                key = 1;
            } else {
                target.style.borderColor = '#f00';
                p_content.style.color = '#f00';
                p_content.innerHTML = "邮箱格式不正确";
                key = 0;
            }
        }
        return key;
    }


    // 手机验证
    function tTest() {
        var target = $('t-test');
        var data = target.value;
        var p_content = target.parentNode.lastElementChild;
        var flag = data.match(/^1[0-9]{10}$/g);
        var key;
        if (data == "") {
            target.style.borderColor = '#f00';
            p_content.style.color = '#f00';
            p_content.innerHTML = "必填，不能为空";
            key = 0;
        } else {
            if (!!flag) {
                target.style.borderColor = '#008000';
                p_content.style.color = '#008000';
                p_content.innerHTML = "手机号格式正确";
                key = 1;
            } else {
                target.style.borderColor = '#f00';
                p_content.style.color = '#f00';
                p_content.innerHTML = "手机号格式不正确";
                key = 0;
            }
        }
        return key;
    }
    // 全局校验
    function subTest() {
        var n = nTest();
        var p = pTest();
        var pp = ppTest();
        var e = eTest();
        var t = tTest();
        if (n && p && pp && e && t) {
            alert('校验通过，全部输入正确!');
        } else {
            alert('校验未通过，输入有误!');
        }
    }

    // 验证按钮
    $('btn').addEventListener('click', subTest);

})()