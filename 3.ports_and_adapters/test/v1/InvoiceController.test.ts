import axios from "axios"

test.skip("Deve testar a API de Invoice", async function () {
  const response = await axios.get('http://localhost:3001/cards/5410940896564101/invoices')
  const invoice = response.data
  expect(invoice.total).toBe(690)
})