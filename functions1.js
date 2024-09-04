function greet(callback) {
    callback("this is a call back function")
}

greet(print)

function print(par) {
    console.log(par);
}
