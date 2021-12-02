function receivesAFunction(spy) {  
    spy();
}

function spy(){
    return "Hello";
}

const stuff = function(){
    return "Bye"
}

function returnsANamedFunction() {
    return stuff;
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Hi";
    }
}

