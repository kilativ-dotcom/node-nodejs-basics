import { open, write, close } from "fs";
import { join } from "path"

const create = async () => {
    const filename =  join(import.meta.dirname, "files", "fresh.txt");
    await open(filename, "wx", async (openError, fd) => {
        if (!openError) {
            await write(fd, "I am fresh and young", async () => {
                await close(fd, (closeError) => {
                    if (closeError) console.error("Error closing file:", closeError);
                });
            })
        } else {
            throw new Error("FS operation failed");
        }
    });
};

await create();
