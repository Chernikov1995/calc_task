/* eslint-disable */
const calc = require('./calc')



describe('Calc:', () => {
  describe('Base tests', () => {
    test('Must be define', () => {
      expect(calc).toBeDefined()
    })
    test('Return boolean', () => {
      const firstNumber = 1
      const secondNumber = 2
      const operation = '+'
      const result = 3
      console.log(typeof calc)
      expect(typeof calc(firstNumber, secondNumber, operation, result)).toBe('boolean')
    })
    test('Number(1), Number(2), String(+), Number(3) -> true', () => {
      const firstNumber = 1
      const secondNumber = 2
      const operation = '+'
      const result = 3

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('String(1), Number(2), String(+), Number(3) -> true', () => {
      const firstNumber = '1'
      const secondNumber = 2
      const operation = '+'
      const result = 3

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('Number(1), String(2), String(+), Number(3) -> true', () => {
      const firstNumber = 1
      const secondNumber = '2'
      const operation = '+'
      const result = 3

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('Number(1), Number(2), String(+), String(3) -> true', () => {
      const firstNumber = 1
      const secondNumber = 2
      const operation = '+'
      const result = '3'

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('String(1), String(2), String(+), String(3) -> true', () => {
      const firstNumber = '1'
      const secondNumber = '2'
      const operation = '+'
      const result = '3'

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('Not support operation', () => {
      const firstNumber = 1
      const secondNumber = 2
      const operation = '='
      const result = 3

      expect(calc(firstNumber, secondNumber, operation, result).message).toBe('This operation is not valid')
    })
    test('from 0 to 1000000', () => {
      const firstNumber = 0
      const secondNumber = 1000000
      const operation = '+'
      const result = 1000000

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
    test('out of range', () => {
      const firstNumber = -20
      const secondNumber = 10000001
      const operation = '+'
      const result = 1

      expect(calc(firstNumber, secondNumber, operation, result).message).toBe('Inputed values out of range')
    })
    test('out of range 2', () => {
      const firstNumber = 1000000
      const secondNumber = 1000000
      const operation = '*'
      const result = 1000000000000

      expect(calc(firstNumber, secondNumber, operation, result)).toBe(true)
    })
  })

 })