(function () {

    var mask_module = (function () {
        var $ = function (id) {
            return document.getElementById(id);
        };
        var container = $('container');
        var btn = $('btn');
        var mask = $('mask');

        function show(e) {
            e.style.display = 'block';
        }

        function hidden(e) {
            e.style.display = 'none';
        }

        btn.onclick = function () {
            show(mask);
            show(container);
            hidden(btn);
        };

        mask.onclick = function () {
            show(btn);
            hidden(mask);
            hidden(container);
        };

        var params = {
            left: 0,
            top: 0,
            currentX: 0,
            currentY: 0,
            flag: false
        };
        //获取相关CSS属性
        var getCss = function (target, attr) {
            return window.getComputedStyle(target)[attr];
        };

        //拖拽的实现
        var startDrag = function (target) {
            params.left = getCss(target, "left");
            params.top = getCss(target, "top");


            target.onmousedown = function (event) {
                params.flag = true;
                var e = event || window.event;
                var target = e.target || e.srcElement;
                target.style.cursor = 'move';
                params.currentX = e.clientX;
                params.currentY = e.clientY;
            };

            target.onmouseup = function () {
                params.flag = false;
                params.left = getCss(target, "left");
                params.top = getCss(target, "top");

            };

            target.onmousemove = function (event) {
                var e = event ? event : window.event;
                if (params.flag) {
                    var nowX = e.clientX,
                        nowY = e.clientY;
                    var disX = nowX - params.currentX,
                        disY = nowY - params.currentY;
                    var a = (params.left).indexOf('%') || (params.top).indexOf('%');
                    var L = 0;
                    var T = 0;
                    var aBodyWidth = document.body.offsetWidth;
                    var aBodyHeight = document.body.offsetHeight;
                    if (a != -1) {
                        L = parseFloat(params.left) / 100 * aBodyWidth;
                        T = parseFloat(params.top) / 100 * aBodyHeight;
                    } else {
                        L = parseInt(params.left);
                        T = parseInt(params.top);
                    }
                    var aLeft = L + disX;
                    var aTop = T + disY;
                    var aRight = parseInt(getCss(target, "right"));
                    var aBottom = parseInt(getCss(target, "bottom"));

                    // 不超出窗口左右
                    if (aLeft > 326 && aBodyWidth - aLeft >= 326) {
                        target.style.left = aLeft + 'px';
                    } else if (aLeft <= 326) {
                        target.style.left = '326px';
                    } else if (aBodyWidth - aLeft < 326) {
                        target.style.left = aBodyWidth - 326 + 'px';
                    }
                    //  不超出窗口上下
                    if (aTop > 161 && aBodyHeight - aTop >= 161) {
                        target.style.top = aTop + 'px';
                    } else if (aTop <= 161) {
                        target.style.top = '161px';
                    } else if (aBodyHeight - aTop < 161) {
                        target.style.top = aBodyHeight - 161 + 'px';
                    }

                }
            }
        };

        startDrag(container);
    })()


})()