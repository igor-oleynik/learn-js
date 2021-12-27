const ADDITION = 'ADDITION'; // +
const SUBTRACTION = 'SUBTRACTION'; // -
const MULTIPLICATION = 'MULTIPLICATION'; // *
const EXPONENTIATION = 'EXPONENTIATION'; // xª
const DIVISION = 'DIVISION'; // /
const MODULUS = 'MODULUS'; // %
const ROOT = 'ROOT'; // √

let operator = ADDITION;
let expression;
let leftOperand;
let rightOperand;
let computation;
let result;
let resultLeftOperand;

function onLeftOperandChange(value) {
  // console.log('onLeftOperandChange', value)
  leftOperand = Number(value);
};

function onRightOperandChange(value) {
  // console.log('onRightOperandChange', value)
  rightOperand = Number(value);
};

function onOperatorChange(value) {
  // console.log('onOperatorChange', value)
  operator = value;
};

function onSubmit () {
  let resultLeftOperand = expression ?? leftOperand;
  switch (operator) {
    case 'ADDITION':
      computation  = leftOperand + rightOperand;
      expression = `${resultLeftOperand}  + ${rightOperand}`;
      break;

    case 'SUBTRACTION':
      computation  = leftOperand - rightOperand;
      expression = `${resultLeftOperand} - ${rightOperand}`;
      break;

    case 'MULTIPLICATION':
      computation  = leftOperand * rightOperand;
      expression = `${resultLeftOperand} * ${rightOperand}`;
      break;

    case 'EXPONENTIATION':
      computation  = leftOperand ** rightOperand;
      expression = `${resultLeftOperand} xª ${rightOperand}`;
      break;

    case 'DIVISION':
      computation  = leftOperand / rightOperand;
      expression = `${resultLeftOperand} / ${rightOperand}`;
      break;

    case 'MODULUS':
      computation  = leftOperand % rightOperand;
      expression = `${resultLeftOperand} % ${rightOperand}`;
      break;

    case 'ROOT' :
      computation  = leftOperand ** rightOperand;
      expression = `${resultLeftOperand} √ ${rightOperand}`;
      break;

      // console.log('onSubmit')
  }
  setResult(computation);
  setExpression(`${expression} = ${computation}`);
};

function onClear () {
  // console.log('onClear')
  expression = null;
};
