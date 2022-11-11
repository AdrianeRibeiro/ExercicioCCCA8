import Invoice from "../src/Invoice"
import Item from "../src/Item"

test("Deve criar uma nota fiscal e calcular os impostos", function () {
  const invoice = new Invoice()
  invoice.addItem(new Item("Beer", "Heineken 600ml", 10))
  invoice.addItem(new Item("Whisky", "Jack Daniels 1L", 100))
  invoice.addItem(new Item("Water", "Crystal 500ml", 5))
  invoice.addItem(new Item("Juice", "Laranja 300ml", 10))

  const taxes = invoice.calculateTaxes()
  expect(taxes).toBe(22)
})

test("Deve criar uma nota fiscal e calcular os total", function () {
  const invoice = new Invoice()
  invoice.addItem(new Item("Beer", "Heineken 600ml", 10))
  invoice.addItem(new Item("Whisky", "Jack Daniels 1L", 100))
  invoice.addItem(new Item("Water", "Crystal 500ml", 5))
  const total = invoice.calculateTotal()
  expect(total).toBe(115)
})