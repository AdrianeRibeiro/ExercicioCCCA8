import { validate } from "../../src/v1/validate"

test("Deve validar o cpf válido que tem dígito maior que 0", function() {
  const isValid = validate("259.556.978-37")
  expect(isValid).toBeTruthy()
})

test("Deve validar o cpf com dígito zero no primeiro dígito", function() {
  const isValid = validate("198.454.187-08")
  expect(isValid).toBeTruthy()
})

test("Deve validar o cpf com dígito zero no segundo dígito", function() {
  const isValid = validate("198.454.187-08")
  expect(isValid).toBeTruthy()
})

test("Deve tentar validar o cpf com mais de 14 caracteres", function() {
  const isValid = validate("085.454.437.600")
  expect(isValid).toBeFalsy()
})

test("Deve tentar validar o cpf undefined", function() {
  const isValid = validate(undefined)
  expect(isValid).toBeFalsy()
})

test("Deve tentar validar o cpf null", function() {
  const isValid = validate(null)
  expect(isValid).toBeFalsy()
})

test("Deve tentar validar o cpf com dígitos iguais", function() {
  const isValid = validate("111.111.111-11")
  expect(isValid).toBeFalsy()
})

test("Deve tentar validar o cpf com letras", function() {
  const isValid = validate('Aaaa')
  expect(isValid).toBeFalsy()
})