import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { join } from "path";

const decompress = async () => {
    const fileToDecompress = join(import.meta.dirname, "files", "archive.gz");
    const output = join(import.meta.dirname, "files", "fileToCompress.txt");
    const readStream = createReadStream(fileToDecompress);
    const writeStream = createWriteStream(output);

    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
