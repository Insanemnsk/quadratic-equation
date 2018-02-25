module.exports = function solveEquation(equation) {
let a, b, c, x, y;
let array = equation.replace(/ /g,'').replace(/\*x\^2/g,',').replace(/\*x/g,',').split(',');
a = +array[0];
b = +array[1];
c = +array[2];
x = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
y = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
let solutions = [];
solutions.push(Math.round(x));
solutions.push(Math.round(y));
solutions.sort( 
  (a,b) => a - b
)
return solutions;
}
