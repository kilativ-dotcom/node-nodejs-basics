import * as fs from "fs";
import { join } from "path";

const copy = async () => {
    const source = join(import.meta.dirname, "files");
    const destination = join(import.meta.dirname, "files_copy");
    fs.cp(source, destination, {errorOnExist: true, force: false, recursive: true}, async (error) => {
        if (error) {
            throw new Error("FS operation failed");
        }
    });
};

await copy();
