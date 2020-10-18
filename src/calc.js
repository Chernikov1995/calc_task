const validOperation = (operation) => ['+', '-', '*', '/'].includes(operation)

const validValue = (value) => (value >= 0 && value <= 1000000)

const calc = (firstNumber, secondNumber, operation, result) => {
  if (!validOperation(operation)) {
    return Error('This operation is not valid')
  }

  if (!validValue(firstNumber) || (!validValue(secondNumber))) {
    	return Error('Inputed values out of range')
  }

  switch (operation) {
    case '+':
    	return (+firstNumber + +secondNumber === +result)
 
    case '-':
    	return (+firstNumber - +secondNumber === +result)
      
    case '*':
    	return (+firstNumber * +secondNumber === +result)
      
    case '/':
    	return (+firstNumber / +secondNumber === +result)
      
  }
}

module.export = calc
