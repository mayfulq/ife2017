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
        }
    }

    $('btn').addEventListener('click', move);

})()