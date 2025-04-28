import { createHash } from "crypto";
import { createReadStream } from "fs";
import { join } from "path";

const calculateHash = async () => {
    const hash = createHash("sha256");
    hash.setEncoding("hex");
    const filename = join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");
    const input = createReadStream(filename);

    hash.on("finish", () => {
        console.log(hash.read());
    })
    input.pipe(hash);
};

await calculateHash();
