console.log("%c[START]", "font-size:20px;color:#58a6ff;");

// importing only in order to test.
import createAuth0Client from "@auth0/auth0-spa-js";

const worker = new SharedWorker("./worker.js", { type: "module" });
worker.port.start();
worker.port.postMessage("send data to worker");

worker.port.onmessage = ({ data }) => {
    console.log("%c🚀 ~ received data from worker", "font-size:16px;font-weight:bold;");
    console.log(data);
};
