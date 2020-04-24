function time() {
    var today = new Date();
    var d = today.getDate();
    var M = today.getMonth()+1;
    var Y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
       Y + "-" + M + '-' + d + " " + h + ":" + m + ":" + s;
    var t = setTimeout(time, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

time();