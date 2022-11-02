function clockDisplay() {
    var client = new Date();
    var offset = Math.abs(ServerDate - client);
    var precision = ServerDate.getPrecision();
    var server = new Date(ServerDate); 
    // server = server + offset;
    var calcoffset = calcOffset();
    document.getElementById("server").innerHTML = server.toISOString();
    document.getElementById("offset").innerHTML = offset;
    document.getElementById("precision").innerHTML = precision;
}