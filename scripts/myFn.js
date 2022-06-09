const a = 10;
let b = a;
console.log(b)
b = 30;

console.log(a)
console.log(b)


function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.dir