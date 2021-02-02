console.clear();

import createAuth0Client from "@auth0/auth0-spa-js";
// import { Auth0Client } from '@auth0/auth0-spa-js';

import Worker from "worker-loader!./worker.js";

// const worker = new Worker();

const worker = new SharedWorker((fn=>fn.match(/"(.*?)"/)[1])(""+Worker));

// import MyWorker from './worker';
// let mySharedWorker = new SharedWorker((fn=>fn.match(/"(.*?)"/)[1])(""+MyWorker));
// console.log("🚀 ~ file: start.js ~ line 8 ~ mySharedWorker", mySharedWorker)

// import sharedWorker from 'shared-worker!./worker.js';

// const worker = new sharedWorker();

// import wk from "./worker";
// import("./worker").then(console.log);
import params from "./params";

import {start, showParams} from "./functions";

var blobStart = new Blob([`(${start.toString()})()`], { type: "application/javascript" });
var blobParams = new Blob([`(${showParams.toString()})()`], { type: "application/javascript" });

// start();
// start();
// start();
// showParams();
// console.log(params);

// myBlob.text().then(res => {
//     console.log(">", res);
// });

// console.log("🚀 ~ file: start.js ~ line 5 ~ func", func().start.toString())

// var myBlob = new Blob([func], { type: "application/javascript" });
// console.log("🚀 ~ file: start.js ~ line 20 ~ myBlob", myBlob)
// console.log("🚀 ~ file: start.js ~ line 10 ~ blob", URL.createObjectURL(myBlob))

// myBlob.text().then(res => {
// console.log("🚀 ~ file: start.js ~ line 24 ~ func", func().start.toString())
//     console.log("@@@@@@@@@@@");
//     console.log(res);
//     var fn = new Function(res)();
//     // console.log("🚀 ~ file: start.js ~ line 27 ~ myBlob.text ~ fn", fn)
//     // fn();
// });

// var fn = `
// return function start() {
//     // params.counter_worker++;
//     console.log("%cStarting...", "font-size:24px;font-weight:bold;color:yellow;");
//     // console.log("Params", params);
// }
// `;

// var _blob = new Blob([fn]);

// var blob = new Blob([wk]);
// const worker = new SharedWorker(URL.createObjectURL(blob), { type: "module" });

// const worker = new SharedWorker('data:application/javascript,' + encodeURIComponent(onconnect));

// const worker = new SharedWorker("./worker.js", { type: "module" });
worker.port.start();
worker.port.postMessage("send data to worker");

// worker.port.postMessage({ type: "blob", data: URL.createObjectURL(new Blob([fn])) });
// params.counter_frontend++;
// var blobUrl = URL.createObjectURL(_blob);

// console.log("%c~ counter_frontend:", "font-weight:bold;color:chartreuse;", params.counter_frontend);
// console.log("%c~ counter_worker..:", "font-weight:bold;color:chartreuse;", params.counter_worker);

// worker.port.postMessage({ type: "blob", data: blobUrl });
// worker.port.postMessage({ type: "blob", data: blobStart });
// worker.port.postMessage({ type: "blob", data: blobParams });
// setInterval(() => {
//     worker.port.postMessage({ type: "blob", data: blobStart });
//     worker.port.postMessage({ type: "blob", data: blobParams });

//     console.log("%c~ counter_frontend:", "font-weight:bold;color:chartreuse;", params.counter_frontend);
//     console.log("%c~ counter_worker..:", "font-weight:bold;color:chartreuse;", params.counter_worker);
// }, 3000);

// var _intervalo = setInterval(() => {
//     worker.port.postMessage({ type: "blob", data: blobStart });
// }, 1000);

// setTimeout(() => {
//     clearInterval(_intervalo);
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     worker.port.postMessage({ type: "blob", data: blobParams });
//     console.log("params:", params);
// }, 10000);

worker.port.onmessage = ({ data }) => {
    console.log("%c🚀 ~ received data from worker", "font-size:16px;font-weight:bold;");
    console.log(data);
};

