import params from "./params";

export const start = () => {
  console.log("%cStarting...", "font-size:24px;font-weight:bold;color:yellow;");
  console.log("--- PARAMS ---");
  console.log(params);
  params.counter_frontend++;
  params.counter_worker++;
}

export const showParams = () => {
  console.log("%cStop...", "font-size:24px;font-weight:bold;color:orangered;");
  console.log(params);
  console.log("frontend:", params.counter_frontend);
  console.log("worker..:", params.counter_worker);
}
