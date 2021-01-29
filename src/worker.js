export default `
let counter = 0;
onconnect = (e) => {
  counter++;
  console.log("%c[WORKER] init worker", "font-size:20px;color:#58a6ff;");
  var port = e.ports[0];

  port.onmessage = ({ data }) => {
      if (Object(data).hasOwnProperty("type")) {
        if (data.type == "blob") {
          console.log("tem blob");
          console.log(data);
          console.log(data.data);
          var fn = new Function(data.data)();
          fn();
          // fetch(data.data)
          //   .then((res) => res.text())
          //   .then((blob) => {
          //     console.log("%cmy blob", "font-size:100px");
          //     console.log(blob);
          //     var fn = new Function(blob)();
          //     fn();
          //   }).catch(err => {
          //     console.log("%cErr=", "font-size:100px", err);
          //   });
        }
      }
      console.log("%cReceived data into worker", "font-size:16px;color:#58a6ff;");
      console.log(data);
      port.postMessage({ status: "seu contador é = "+counter });
  };

  port.postMessage({ status: "OK" });
}
`;
