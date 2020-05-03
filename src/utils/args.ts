const portField: string = 'port';

export const getArgsMap = (): Map<string, any> => {
    const rawArgs = process.argv.slice(2);
    //EXAMPLE: param argument param=argument --another-param argument --another-param=argument
    const keyValuePairs = /-{0,2}([\w\d-]+)(=|\s+?)([\w\d]+)/g;
    const argsMap = new Map<string, any>();

    console.group('\n-- args taken: --');

    let result;
    while(result = keyValuePairs.exec(rawArgs.join(' '))) {
        const [match, key, separator, value] = result;
        console.log(key, value);
        argsMap.set(key, value);
    }

    console.groupEnd();
    console.log('-- args end --\n');

    return argsMap;
};

export const getPort = (): number => {
    return getArgsMap().get(portField) || 8000;
};