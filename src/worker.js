let counter = 0;
onconnect = (e) => {
  counter++;
  console.log("%c[WORKER] init worker", "font-size:20px;color:#58a6ff;");
  var port = e.ports[0];

  self.counter = 0;

  port.onmessage = ({ data }) => {
      if (Object(data).hasOwnProperty("type")) {
        if (data.type == "blob") {
          // console.log("tem blob");
          // console.log(data);
          // console.log(data.data);
          self.counter++;
          console.log("%c%s", "font-size:14px;", self.counter);
          // data.data.text().then(res => {
          //   console.log("%c---", "font-weight:bold;color:orangered;");
          //   console.log(self);
          //   console.log("🚀 ~ res", res);
          //   var fn = new Function(res)();
          //   fn();
          //   console.log("%c---", "font-weight:bold;color:orangered;");
          // });
        }
      }
      console.log("%cReceived data into worker", "font-size:16px;color:#58a6ff;");
      console.log(data);
      port.postMessage({ status: "seu contador é = "+counter });
  };

  port.postMessage({ status: "OK" });
}

// export default `
// let counter = 0;
// onconnect = (e) => {
//   counter++;
//   console.log("%c[WORKER] init worker", "font-size:20px;color:#58a6ff;");
//   var port = e.ports[0];

//   self.counter = 0;

//   port.onmessage = ({ data }) => {
//       if (Object(data).hasOwnProperty("type")) {
//         if (data.type == "blob") {
//           // console.log("tem blob");
//           // console.log(data);
//           // console.log(data.data);
//           self.counter++;
//           console.log("self");
//           console.log("%c%s", "font-size:14px;", self.counter);
//           data.data.text().then(res => {
//             console.log("%c---", "font-weight:bold;color:orangered;");
//             console.log(self);
//             console.log("🚀 ~ res", res);
//             var fn = new Function(res)();
//             fn();
//             console.log("%c---", "font-weight:bold;color:orangered;");
//           });
//         }
//       }
//       // console.log("%cReceived data into worker", "font-size:16px;color:#58a6ff;");
//       // console.log(data);
//       port.postMessage({ status: "seu contador é = "+counter });
//   };

//   port.postMessage({ status: "OK" });
// }
// `;
