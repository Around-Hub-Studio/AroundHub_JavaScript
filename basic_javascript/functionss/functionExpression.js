
let sum = function(left, right) { 
    return left + right
};

let result = sum(1, 3);

console.log(result);

console.log("-------------------------------------------------------------------------");

let factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) }; // 5 * fac(4) = 5 * 4 * fac(3) = ... = 5 * 4 * 3 * 2 * 1

console.log(factorial(5));

console.log("-------------------------------------------------------------------------");

let multiple = (a, b) => {
    return a * b;
};

console.log(multiple(3, 4));