$(document).ready(function () {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        var notify = new Notification("hi");
    }
    
    
})