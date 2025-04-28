import { Worker } from "worker_threads";
import { cpus } from "os";
import { join } from "path";

const performCalculations = async () => {
    const numberOfCores = cpus().length;
    let finishedWorkers = 0;
    const workers = [];
    for (let i = 0; i < numberOfCores; i++) {
        const worker = new Worker(join(import.meta.dirname, "worker.js"), {workerData: 10 + i});
        workers[i] = {status: "started"};
        worker.on("message", (message) => {
            workers[i].status = "resolved";
            workers[i].data = message;
        });
        worker.on("error", () => {
            workers[i].status = "error";
            workers[i].data = null;
        });
        worker.on("exit", () => {
            finishedWorkers++;
            if (finishedWorkers === numberOfCores) {
                console.log(workers);
            }
        });
    }

};

await performCalculations();
