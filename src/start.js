import Worker from "worker-loader!./worker.js";

import createAuth0Client from "@auth0/auth0-spa-js";

// import {start} from "./functions";
// var blobStart = new Blob([`(${start.toString()})()`], { type: "application/javascript" });

// var blob = new Blob([wk]);
// const worker = new SharedWorker(URL.createObjectURL(blob), { type: "module" });
// const worker = new SharedWorker('data:application/javascript,' + encodeURIComponent(onconnect));

const worker = new SharedWorker((fn=>fn.match(/"(.*?)"/)[1])(""+Worker));
worker.port.start();
worker.port.postMessage("send data to worker");

worker.port.onmessage = ({ data }) => {
    console.log("%c🚀 ~ received data from worker", "font-size:16px;font-weight:bold;");
    console.log(data);
};

