// http://jsperf.com/left-zero-pad/14
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
  
  // Display two real time clocks, the server's and the client's, and show the
  // difference between them in milliseconds.
  function updateHomeClock() {
    var client = new Date();
    var hours = ServerDate.getHours();
    period = "<span> am</span>";
    if (hours >= 12) {
      hours -= 12;
      period = "<span> pm</span>";
    }
    if (hours == 0) {
      hours = 12;
    }
    document.getElementById("servertime").innerHTML =
      hours + ":" +
      pad(ServerDate.getMinutes()) + ":" +
      pad(ServerDate.getSeconds()) + period;
  }
  
  function updateSyncNote() {
    var client = new Date();
    var offset = Math.abs(ServerDate - client);
    var syncNoteElem = document.getElementById("syncnote");
    console.log("Updating syncnote at "+client.toString()+", offset is "+offset);
    // Under a second of offset is considered good enough
    if (offset < 1000) {
      syncNoteElem.innerHTML = "Congratulations, your clock is accurate!";
      syncNoteElem.className = "green";
    }
    // 1-60 seconds of offset is not horrible but could use improvement
    else if (offset <= 60*1000) {
      syncNoteElem.innerHTML = "Your clock is reasonably accurate, but you may still see problems in timing-critical applications.";
      syncNoteElem.className = "yellow";
    }
    // Over a minute of offset indicates a non-synced clock or configuration issue
    else {
      syncNoteElem.innerHTML = "Your clock does <em>not</em> appear to be synchronized.  You may see problems in timing-sensitive applications.";
      syncNoteElem.className = "red";
    }
  }
  
  function updateClocks()
  {
      var client = new Date();
  
      document.getElementById("server").innerHTML =
          "<span class=\"hidephone\">" + ServerDate.toDateString() + "</span> " +
          pad(ServerDate.getHours()) + ":" +
          pad(ServerDate.getMinutes()) + ":" +
          pad(ServerDate.getSeconds()) + "." +
          // pad(ServerDate.getMilliseconds() / 10 | 0); // fast rounding, c.f. http://jsperf.com/math-floor-vs-math-round-vs-parseint/33
          pad100(ServerDate.getMilliseconds() / 1 ); // fast rounding, c.f. http://jsperf.com/math-floor-vs-math-round-vs-parseint/33
      /*
      document.getElementById("client").innerHTML =
          "<span class=\"hidephone\">" + client.toDateString() + "</span> " +
          pad(client.getHours()) + ":" +
          pad(client.getMinutes()) + ":" +
          pad(client.getSeconds()) + "." +
          pad(client.getMilliseconds() / 10 | 0); // fast rounding, c.f. http://jsperf.com/math-floor-vs-math-round-vs-parseint/33
      */
  }
  function updateMetaData(firstRun) {
      var client = new Date();
      var waitText = "";
      if (firstRun == true) {
        waitText = " (refining &hellip; please wait)";
      }
      var offset = ServerDate - client;
      console.log("Updating metadata at "+client.toString()+", offset is "+offset);
      /*
      document.getElementById("timezone").innerHTML = client.toTimeString().replace(/^[\d:]+ /,'').replace(/\(([A-Z]{3})\)/,'(<a href="https://duckduckgo.com/?q=$1%20time%20zone">$1</a>)');
      if (offset < 10000) {
      document.getElementById("offset").innerHTML = offset + " ms" + waitText;
      }
      else {
      document.getElementById("offset").innerHTML = (offset/1000) + " s" + waitText;
      }
      document.getElementById("delay").innerHTML = ServerDate.getPrecision() + " ms";
      */
  }
  function resetAmortization() {
    ServerDate.amortizationThreshold = 2000;
    ServerDate.amortizationRate = 50;
    console.log("Set clock amortization threshold/rate to " + ServerDate.amortizationThreshold + "/" + ServerDate.amortizationRate);
  }
  