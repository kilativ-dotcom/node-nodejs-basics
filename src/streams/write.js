import { createWriteStream } from "fs";
import { join } from "path";

const write = async () => {
    const filename = join(import.meta.dirname, "files", "fileToWrite.txt");
    const output = createWriteStream(filename);

    await process.stdin.pipe(output);
};

await write();
