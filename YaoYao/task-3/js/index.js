// 思路一
(function () {
    var area = [{
            text: '北京',
            value: 'bj'
        },
        {
            text: '上海',
            value: 'sh'
        },
        {
            text: '广州',
            value: 'gz'
        },
        {
            text: '深圳',
            value: 'sz'
        }
    ];
    var school = {
        bj: [{
                text: '北京大学',
                value: '1'
            },
            {
                text: '清华大学',
                value: '2'
            },
            {
                text: '人民大学',
                value: '3'
            },
        ],
        sh: [{
                text: '复旦大学',
                value: '1'
            },
            {
                text: '上海大学',
                value: '2'
            },
            {
                text: '2333大学',
                value: '3'
            }
        ],
        gz: [{
                text: '中山大学',
                value: '1'
            },
            {
                text: '广东大学',
                value: '2'
            },
            {
                text: '2333大学',
                value: '3'
            }
        ],
        sz: [{
                text: '深圳大学',
                value: '1'
            },
            {
                text: '上海大学',
                value: '2'
            },
            {
                text: '2333大学',
                value: '3'
            }
        ]
    };

    // ID选择器
    var $ = function (id) {
        return document.getElementById(id);
    };
    // 单选框选择
    function tab(e) {
        var target = e.target || e.srcElement;
        var flag = target.value;
        if (flag == '1') {
            $('demo-1').style.display = 'block';
            $('demo-2').style.display = 'none';
        } else if (flag == '2') {
            $('demo-1').style.display = 'none';
            $('demo-2').style.display = 'block';

        }
    }
    // radio单选框监听
    $('tab').addEventListener('click', tab);

    /**
     * 生成选择内容
     * @param {*} a area或school选择框
     * @param {*} b data
     */
    function select(a, b) {
        a.innerHTML = '';
        for (var i = 0; i < b.length; i++) {
            var data = b[i];
            var option = document.createElement('option');
            option.innerHTML = data.text;
            option.setAttribute('value', data.value);
            a.appendChild(option);
        }
    }
    // area初始化
    select($('area'), area);
    // school初始化
    select($('school'), school.bj);
    // 监听select的change事件
    $('area').addEventListener('change', function () {
        var value = $('area').value;
         b = school[value];
        select($('school'), b);
    });
})()

// 思路二
// (function () {
//     var data = [
//         ['北京大学', '清华大学','233大学'],
//         ['复旦大学', '交通大学','666大学'],
//         ['深圳大学', '广州大学', '神马大学']
//     ]

//     var $ = function (id) {
//         return document.getElementById(id);
//     };
//     // 单选框选择
//     function tab(e) {
//         var target = e.target || e.srcElement;
//         var flag = target.value;
//         if (flag == '1') {
//             $('demo-1').style.display = 'block';
//             $('demo-2').style.display = 'none';
//         } else if (flag == '2') {
//             $('demo-1').style.display = 'none';
//             $('demo-2').style.display = 'block';

//         }
//     }
//     // radio单选框监听
//     $('tab').addEventListener('click', tab);
//     // 生成学校选项
//     function produce(d, i) {
//         var school = $('school');
//         var option = document.createElement('option');
//         option.innerHTML = d[i];
//         option.setAttribute('value', i + 1);
//         school.appendChild(option);
//     }
//     // 地区学校联动
//     function select() {
//         var flag = $('area').value;
//         var school = $('school');
//         school.innerHTML = '';
//         if (flag == '1') {
//             var d = data[0];
//             for (var i = 0; i < d.length; i++) {
//                 produce(d, i);
//             }
//         } else if (flag == '2') {
//             var d = data[1];
//             for (var i = 0; i < d.length; i++) {
//                 produce(d, i);
//             }
//         } else if (flag == '3') {
//             var d = data[2];
//             for (var i = 0; i < d.length; i++) {
//                 produce(d, i);
//             }
//         }
//     }
//     // 初始化
//     select();
//     // area下拉框监听
//     $('area').addEventListener('click', select);
// })()