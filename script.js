console.log("1. Exception: Undeclared Variable");
try {
    console.log(myVar); 
} catch (error) {
    console.log("Exception caught: " + error.message);
}
console.log("--------------------------------------------------");

console.log("2. Throw 'Divide by Zero' Error");
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divide by Zero Error");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.log("Exception caught: " + error.message);
    }
}
divide(10, 0);
console.log("--------------------------------------------------");

console.log("3. Throw 'Out of Bound Error'");
try {
    let arr = [1, 2, 3];
    let index = 5;
    if (index >= arr.length) {
        throw new Error("Out of Bound Error");
    }
    console.log(arr[index]);
} catch (error) {
    console.log("Exception caught: " + error.message);
}
console.log("--------------------------------------------------");

console.log("4. Using finally block");
try {
    let num = 10;
    let den = 0;
    if (den === 0) {
        throw new Error("Cannot divide by zero");
    }
    console.log(num / den);
} catch (error) {
    console.log("Caught exception: " + error.message);
} finally {
    console.log("This block always runs (finally block).");
}
console.log("--------------------------------------------------");
