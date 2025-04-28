import * as fs from "fs";
import { join } from "path";

const rename = async () => {
    const source = join(import.meta.dirname, "files", "wrongFilename.txt");
    const target = join(import.meta.dirname, "files", "properFilename.md");
    await fs.access(source, async (sourceAccessError) => {
        if (sourceAccessError) {
            throw new Error("FS operation failed");
        }
        await (fs.access(target, async (targetAccessError) => {
            if (!targetAccessError) {
                throw new Error("FS operation failed");
            }
            await fs.rename(source, target, (renameError) => {
                if (renameError) {
                    throw new Error("FS operation failed");
                }
            });
        }))
    })
};

await rename();
