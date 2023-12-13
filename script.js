const valueA = +prompt('Введите пожалуйста первое число', 2);
const valueB = +prompt('Введите пожалуйста первое число', 4);

const additionAB = valueA + valueB;
const substractionAB = valueA - valueB;
const multiplicationAB = valueA * valueB;
const divisionAB = valueA / valueB;

alert(`${valueA} + ${valueB} = ${additionAB},
${valueA} - ${valueB} = ${substractionAB},
${valueA} * ${valueB} = ${multiplicationAB},
${valueA} / ${valueB} = ${divisionAB}`
);