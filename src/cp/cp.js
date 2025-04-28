import { join } from "path";
import { fork } from "child_process";

const spawnChildProcess = async (args) => {
    const childProcess = fork(join(import.meta.dirname, "files", "script.js"), args, {stdio: ["pipe", "pipe", "pipe", "ipc"]});
    childProcess.stdout.pipe(process.stdout);
    process.stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["belarus", {capital: "minsk", bestCity: "gomel"}]);
