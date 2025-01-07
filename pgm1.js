console.log("Hoisting and Scope Example:");
function test() {
    console.log(varVar); 
    var varVar = "Hoisted var";
    let letVar = "Block-scoped let";
    const constVar = "Block-scoped const";

    console.log(varVar); 
    console.log(letVar); 
    console.log(constVar); 
}
test();

console.log("\nReassignment Example:");
var a = "Initial var";
let b = "Initial let";
const c = "Initial const";

console.log(a, b, c);
a = "Updated var"; 
b = "Updated let"; 
console.log(a, b);
