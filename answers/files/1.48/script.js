function onLeftOperandChange(value) {
  if (onLeftOperandChange === 'string') {
    return;
  }
  console.log('onLeftOperandChange', value)
}

function onRightOperandChange(value) {
  if (onRightOperandChange === 'string') {
    return;
  }
  console.log('onRightOperandChange', value)
}

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
}

function onSubmit () {
  return setResult;
  console.log('onSubmit')
}

function onClear () {
  console.log('onClear')
}
