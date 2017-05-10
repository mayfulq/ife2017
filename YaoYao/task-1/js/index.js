(function () {
    var Input = document.getElementById('test');
    var Tips = document.getElementById('tips');
    var Btn = document.getElementById('btn');

    function test() {
        var data = Input.value;
        // 名称若为空，给出提示错误信息，结束程序
        if (data == "") {
            Tips.style.color = '#f00';
            Input.style.borderColor = '#f00';
            Tips.innerHTML = "姓名不能为空";

        }
        // 名称不为空，根据长度验证，给出提示信息
        else {
            var arr = data.split('');
            var num = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].charCodeAt() < 128) { //字符编码<128，为英文字符
                    num++; //长度+1
                } else {
                    num += 2; //否则长度+2
                }
            }
            //长度在4~16之间
            if (4 <= num && num <= 16) {
                Tips.style.color = '#008000';
                Input.style.borderColor = '#008000';
                Tips.innerHTML = "名称格式正确";
            }
            //长度不在4~16之间
            else {
                Tips.style.color = '#f00';
                Input.style.borderColor = '#f00';
                Tips.innerHTML = "名称格式不正确,长度需为4~6个字符";
            }
        }
    }

    Btn.addEventListener('click', test);

})()