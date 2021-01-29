import wk from "./worker";

console.clear();

// var blob = new Blob([wk]);
// console.log("🚀 ~ file: start.js ~ line 51 ~ blob", blob)

var fn = `
return function start() {
    console.log("%cStarting...", "font-size:24px;font-weight:bold;color:yellow;");
};
`;

// const worker = new SharedWorker(URL.createObjectURL(blob), { type: "module" });
const worker = new SharedWorker('data:application/javascript,' + encodeURIComponent(wk));

console.log('data:application/javascript,' + encodeURIComponent(wk));

// const worker = new SharedWorker("./worker.js", { type: "module" });
worker.port.start();
worker.port.postMessage("send data to worker");

// worker.port.postMessage({ type: "blob", data: URL.createObjectURL(new Blob([fn])) });
worker.port.postMessage({ type: "blob", data: fn });

worker.port.onmessage = ({ data }) => {
    console.log("%c🚀 ~ received data from worker", "font-size:16px;font-weight:bold;");
    console.log(data);
};

