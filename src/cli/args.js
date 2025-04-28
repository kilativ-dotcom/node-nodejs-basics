const parseArgs = () => {
    const cliArguments = Object.entries(process.argv).slice(2);
    const keys = cliArguments.filter((value, index) => index % 2 === 0).map(value => value[1].slice(2));
    const values = cliArguments.filter((value, index) => index % 2 === 1).map(value => value[1]);
    const output = keys.map((value, index) => `${value} is ${values[index]}`).join(", ");
    console.log(output);
};

parseArgs();
