import * as fs from "fs";
import { join } from "path";

const remove = async () => {
    const filename = join(import.meta.dirname, "files", "fileToRemove.txt");
    await fs.access(filename, async (accessError) => {
        if (accessError) {
            throw new Error("FS operation failed");
        }
        await fs.unlink(filename, (unlinkError) => {
            if (unlinkError) {
                throw new Error("FS operation failed");
            }
        });
    });
};

await remove();
