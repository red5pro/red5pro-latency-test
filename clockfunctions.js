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

function clockDisplay() {
    document.getElementById("server").innerHTML =
    "<span class=\"hidephone\">" + ServerDate.toDateString() + "</span> " +
    pad(ServerDate.getHours()) + ":" +
    pad(ServerDate.getMinutes()) + ":" +
    pad(ServerDate.getSeconds()) + "." +
    pad100(ServerDate.getMilliseconds()); 
    var client = new Date();
    var offset = Math.abs(ServerDate - client);
    var precision = ServerDate.getPrecision();
    var sdate = new Date(ServerDate + offset); 
    document.getElementById("offset").innerHTML = offset;
    document.getElementById("sdate").innerHTML = sdate.toISOString();
    document.getElementById("precision").innerHTML = precision;
}