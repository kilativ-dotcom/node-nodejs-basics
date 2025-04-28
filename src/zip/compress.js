import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { join } from "path";

const compress = async () => {
    const fileToCompress = join(import.meta.dirname, "files", "fileToCompress.txt");
    const output = join(import.meta.dirname, "files", "archive.gz");
    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(output);

    await pipeline(readStream, createGzip(), writeStream);
};

await compress();
