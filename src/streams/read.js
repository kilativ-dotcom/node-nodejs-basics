import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
    const filename = join(import.meta.dirname, "files", "fileToRead.txt");
    const input = createReadStream(filename);

    await input.pipe(process.stdout);
    // without resume program finishes too quick and I couldn't find a way to wait for pipeline to finish
    process.stdin.resume();
};

await read();
