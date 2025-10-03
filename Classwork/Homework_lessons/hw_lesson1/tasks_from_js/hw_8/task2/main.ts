type FunctionCloneObject = { functionClone: Function, key: string };

function cloner<T>(obj: T): T {
    if (obj) {
        const functions: Array<FunctionCloneObject> = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj: T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj

    }

    throw new Error('!!!!!');

}

const clone = cloner({id: 123, name: 'asdsad', greeting() {console.log('hello')}, foo() {console.log('bar')}});
clone.foo();
