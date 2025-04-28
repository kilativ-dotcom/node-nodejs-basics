const parseEnv = () => {
    const envVariables = process.env;
    const rssPairs = Object.entries(envVariables)
        .filter(pair => pair[0].startsWith("RSS_"))
        .map(pair => `${pair[0]}=${pair[1]}`)
        .join("; ")
    console.log(rssPairs);
};

parseEnv();
