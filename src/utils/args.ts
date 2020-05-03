const portField: string = 'port';
const dbHostField: string = 'dbhost';
const dbPortField: string = 'dbport';

export const getArgsMap = (): Map<string, any> => {
    const rawArgs = process.argv.slice(2);
    //EXAMPLE: param argument param=argument --another-param argument --another-param=argument
    const keyValuePairs = /-{0,2}([\w\d-]+)(=|\s+?)(\S+)/g;
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

const argsMap:Map<string, any> = getArgsMap();

export const getPort = (): number => {
    return argsMap.get(portField) || 8000;
};

export const getDbHost = ():string => {
    return argsMap.get(dbHostField) || 'localhost';
};

export const getDbPort = ():number => {
    return argsMap.get(dbPortField) || 5432;
};