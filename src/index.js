function logArguments(fn) {
    return function (...args) {
        console.log("Arguments:", args);
        return fn.apply(this, args);
    };
}

function exampleFunction(a, b, c) {
    console.log("Inside the function:", a, b, c);
}

const decoratedFunction = logArguments(exampleFunction);

decoratedFunction(1, 2, 3);
