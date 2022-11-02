function calcOffset() {
    var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    xmlhttp.open("GET", "httpa://watchparty.red5.net/", false);
    xmlhttp.send();

    var dateStr = xmlhttp.getResponseHeader("Date");
    var serverTimeMillisGMT = Date.parse(new Date(Date.parse(dateStr)).toUTCString());
    var localMillisUTC = Date.parse(new Date().toUTCString());

    offset = serverTimeMillisGMT -  localMillisUTC;
    return offset;
}

function getServerTime() {
    var date = new Date();

    date.setTime(date.getTime() + offset);

    return date;
}

function clockDisplay() {
    var client = new Date();
    var offset = Math.abs(ServerDate - client);
    var precision = ServerDate.getPrecision();
    var server = new Date(ServerDate); 
    // server = server + offset;
    var calcoffset = calcOffset();
    document.getElementById("server").innerHTML = server.toISOString();
    document.getElementById("offset").innerHTML = offset;
    document.getElementById("calcOffset").innerHTML = calcoffset;
    document.getElementById("precision").innerHTML = precision;
}