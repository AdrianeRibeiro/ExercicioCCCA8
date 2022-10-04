import CurrencyGatewayHttp from "../../src/v2/CurrencyGatewayHttp"
import PurchaseRepositoryDatabase from "../../src/v3/PurchaseRepositoryDatabase"
import InvoiceServiceImpl from "../../src/v3/InvoiceServiceImpl"
import PurchaseRepository from "../../src/v3/PurchaseRepository"
import Purchase from "../../src/v3/Purchase"

test("Deve testar o cálculo da fatura usando fake", async function () {
  const purchaseRepository: PurchaseRepository = {
    async getPurchases(): Promise<Purchase[]> {
      return [
        new Purchase("5410940896564101", 100, "USD")
      ]
    }
  }
  const currencyGateway: CurrencyGatewayHttp  = {
    async getCurrency(): Promise<number> {
      return 3
    }
  }

  const invoiceService = new InvoiceServiceImpl(purchaseRepository, currencyGateway)
  const total = await invoiceService.calculateInvoice("5410940896564101", 9, 2022)
  expect(total).toBe(300)
})



