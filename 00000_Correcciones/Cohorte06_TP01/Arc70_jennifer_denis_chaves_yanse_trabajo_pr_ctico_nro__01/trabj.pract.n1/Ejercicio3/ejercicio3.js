let luz = parseFloat(prompt("gasto de luz:"));
let internet = parseFloat(prompt("gasto de internet:"));
let agua = parseFloat(prompt("gasto de agua:"));

let luzfuturo = luz * 1.125;
let internetfuturo = internet * 1.07;
let aguafutura = agua * 1.03;

console.log("gastos futuros:");
console.log("luz:", luzfuturo);
console.log("internet:", internetfuturo);
console.log("agua:", aguafuturo);