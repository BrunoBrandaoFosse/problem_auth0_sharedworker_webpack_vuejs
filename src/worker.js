/**
 * 
 */
onconnect = (e) => {
  console.log("%c[WORKER] init worker", "font-size:20px;color:#58a6ff;");
  var port = e.ports[0];

  port.onmessage = ({ data }) => {
      console.log("%cReceived data into worker", "font-size:16px;color:#58a6ff;");
      console.log(data);
      port.postMessage({ status: "OK" });
  };

  port.postMessage({ status: "OK" });
}
