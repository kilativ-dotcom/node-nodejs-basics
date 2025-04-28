import * as fs from "fs";
import { join } from "path";

const read = async () => {
    const filename = join(import.meta.dirname, "files", "fileToRead.txt");
    await fs.readFile(filename, "utf8", async (error, content) => {
        if (error) {
            throw new Error("FS operation failed");
        }
        console.log(content);
    });
};

await read();
