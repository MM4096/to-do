
// Set a Cookie
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

$(document).ready(function () {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        var notify = new Notification("hi");
    }
    
    
})
function getNextCookieValue() {

    for (var i = 0; getCookie(i) != undefined; i++) {
        
    }
    i++;
    return i; 
}
function newTime() {
    var date = $("#date").val();
    console.log(date);
    var time = $("#time").val();
    console.log(time);
    var name = $("#name").val();
    console.log(name);
    var newCookie = parseInt(getNextCookieValue());
    console.log("done!");
    setCookie(newCookie, date + "/" + time + "/" + name + "/", 365);
}