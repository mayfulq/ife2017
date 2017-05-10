(function () {

    var $ = function (id) {
        return document.getElementById(id);
    };

    var angle = 0; //角度值
    var key = 1; //方向(1上 2右 3下 4左)
    var box = $('l-box');

    function go() {
        if (key == 1 && box.offsetTop > 45) {
            box.style.top = box.offsetTop - 45 + 'px';
        } else if (key == 2 && box.offsetLeft < 405) {
            box.style.left = box.offsetLeft + 45 + 'px';
        } else if (key == 3 && box.offsetTop < 405) {
            box.style.top = box.offsetTop + 45 + 'px';
        } else if (key == 4 && box.offsetLeft > 45) {
            box.style.left = box.offsetLeft - 45 + 'px';
        }

    }

    function turnLeft() {
        box.style.transform = "rotate(" + (angle - 90) + "deg)";
        angle = -90 + angle;
        key == 1 ? key = 4 : key = (key - 1) % 4;
    }

    function turnRight() {
        box.style.transform = "rotate(" + (angle + 90) + "deg)";
        angle = 90 + angle;
        key == 3 ? key = 4 : key = (key + 1) % 4;
    }

    function turnBack() {
        box.style.transform = "rotate(" + (angle + 180) + "deg)";
        angle = 180 + angle;
        key == 2 ? key = 4 : key = (key + 2) % 4;
    }

    function movTop() {
        box.style.transform = "rotate(0deg)";
        angle = 0;
        key = 1;
        setTimeout(function () {
            if (box.offsetTop > 45) {
                box.style.top = box.offsetTop - 45 + 'px';
            }
        }, 1000);
    }

    function movBot() {
        box.style.transform = "rotate(180deg)";
        angle = 180;
        key = 3;
        setTimeout(function () {
            if (box.offsetTop < 405) {
                box.style.top = box.offsetTop + 45 + 'px';
            }
        }, 1000);
    }

    function movLeft() {
        box.style.transform = "rotate(-90deg)";
        angle = -90;
        key = 4;
        setTimeout(function () {
            if (box.offsetLeft > 45) {
                box.style.left = box.offsetLeft - 45 + 'px';
            }
        }, 1000);
    }

    function movRight() {
        box.style.transform = "rotate(90deg)";
        angle = 90;
        key = 2;
        setTimeout(function () {
            if (box.offsetLeft < 405) {
                box.style.left = box.offsetLeft + 45 + 'px';
            }
        }, 1000);
    }

    function traTop() {
        if (box.offsetTop > 45) {
            box.style.top = box.offsetTop - 45 + 'px';
        }
    }

    function traLef() {
        if (box.offsetLeft > 45) {
            box.style.left = box.offsetLeft - 45 + 'px';
        }
    }

    function traRig() {
        if (box.offsetLeft < 405) {
            box.style.left = box.offsetLeft + 45 + 'px';
        }
    }

    function traBot() {
        if (box.offsetTop < 405) {
            box.style.top = box.offsetTop + 45 + 'px';
        }
    }

    function move() {
        var value = $('dirc').value.toLowerCase();
        if (value == 'go') {
            $('dirc').value = '';
            go();
        } else if (value == 'tun lef') {
            $('dirc').value = '';
            turnLeft();
        } else if (value == 'tun rig') {
            $('dirc').value = '';
            turnRight();
        } else if (value == 'tun bac') {
            $('dirc').value = '';
            turnBack();
        } else if (value == 'tra top') {
            $('dirc').value = '';
            traTop();
        } else if (value == 'tra lef') {
            $('dirc').value = '';
            traLef();
        } else if (value == 'tra rig') {
            $('dirc').value = '';
            traRig();
        } else if (value == 'tra bot') {
            $('dirc').value = '';
            traBot();
        } else if (value == 'mov lef') {
            $('dirc').value = '';
            movLeft();
        } else if (value == 'mov rig') {
            $('dirc').value = '';
            movRight();
        } else if (value == 'mov bot') {
            $('dirc').value = '';
            movBot();
        } else if (value == 'mov top') {
            $('dirc').value = '';
            movTop();
        }
    }

    $('btn-1').addEventListener('click', move);


})()