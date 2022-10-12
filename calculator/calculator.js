const calculator = (a,b) => {
   add(a,b),
   subtract(a,b),
   multiply(a,b)
}

const add = (a,b) => {
    return a+b
}

const subtract = (a,b) => {
    return a-b
}

const multiply = (a,b) => {
    return a*b
}

const divide = (a,b) => {
    return a/b
}

module.exports = {add, divide, multiply, calculator,subtract};