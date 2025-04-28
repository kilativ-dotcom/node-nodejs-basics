import { Transform } from "stream";
import { pipeline } from "stream/promises";

class ReverseTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        const reversedString = chunk.toString().split("").reverse().join("");
        this.push(reversedString);
        callback();
    }
}

const transform = async () => {
    await pipeline(process.stdin, new ReverseTransform, process.stdout);
};

await transform();
