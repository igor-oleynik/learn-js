let operator;
let expression;
let leftOperand;
let rightOperand;
let computation;
let result;

function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value)
  leftOperand = value;
}

function onRightOperandChange(value) {
  console.log('onRightOperandChange', value)
  rightOperand = value;
}

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
}

const ADDITION = 'ADDITION'; // +
const SUBTRACTION = 'SUBTRACTION'; // -
const MULTIPLICATION = 'MULTIPLICATION'; // *
const EXPONENTIATION = 'EXPONENTIATION'; // xª
const DIVISION = 'DIVISION'; // /
const MODULUS = 'MODULUS'; // %
const ROOT = 'ROOT'; // √

function onSubmit () {
  let writeLeftOperand = ;
  switch (operator) {
    case 'ADDITION':
      computation  = leftOperand + rightOperand;
      expression =

    case 'SUBTRACTION':
    case 'MULTIPLICATION':
    case 'EXPONENTIATION':
    case 'DIVISION':
    case 'MODULUS':
    case 'ROOT' :

      console.log('onSubmit')
  }
  setResult('')
}

function onClear () {
  console.log('onClear')
  expression = null;
}
