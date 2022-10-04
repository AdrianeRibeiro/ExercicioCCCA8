import Invoice from "../../src/v3/Invoice"
import Purchase from "../../src/v3/Purchase"

test('Deve testar a fatura', function() {
  const purchases = [
    new Purchase('5410940896564101', 100, "USD"),
    new Purchase('5410940896564101', 30, "BRL"),
    new Purchase('5410940896564101', 10, "BRL")
  ]

  const invoice = new Invoice(3)
  invoice.setPurchases(purchases)
  const total = invoice.getTotal()
  expect(total).toBe(340)
})