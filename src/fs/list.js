import * as fs from "fs";
import { join } from "path";

const list = async () => {
    const directory = join(import.meta.dirname, "files");
    await fs.readdir(directory, {recursive: true}, async (error, files) => {
        if (error) {
            throw new Error("FS operation failed");
        }
        console.log(files);
    })
};

await list();
