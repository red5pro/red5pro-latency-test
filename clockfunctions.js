function pad(num) {
    if (num < 10) {
        return "0" + num;
    }
    return "" + num;
}
function pad100(num) {
    if (num < 100) {
        return "0" + num;
    }
    return "" + num;
}

function clockDisplayOffset() {
    var client = new Date();
    var offset = Math.abs(ServerDate - client);
    document.getElementById("offset").innerHTML = offset;
}

function clockDisplayServer() {
    document.getElementById("server").innerHTML =
    "<span class=\"hidephone\">" + ServerDate.toDateString() + "</span> " +
    pad(ServerDate.getHours()) + ":" +
    pad(ServerDate.getMinutes()) + ":" +
    pad(ServerDate.getSeconds()) + "." +
    pad100(ServerDate.getMilliseconds()); 
    clockDisplayOffset();
}