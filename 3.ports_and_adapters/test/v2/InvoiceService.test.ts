import InvoiceServiceImpl from "../../src/v2/InvoiceServiceImpl"
import sinon from "sinon"
import CurrencyGatewayHttp from "../../src/v2/CurrencyGatewayHttp"
import PurchaseRepositoryDatabase from "../../src/v2/PurchaseRepositoryDatabase"
import Purchase from "../../src/v2/Purchase"

test("Deve testar o cálculo da fatura usando stub", async function () {
  const purchaseRepositoryDatabaseStub = sinon.stub(PurchaseRepositoryDatabase.prototype, "getPurchases").resolves([
    new Purchase("5410940896564101", 100, "USD")
  ])
  const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, "getCurrency").resolves(3)

  const invoiceService = new InvoiceServiceImpl()
  const total = await invoiceService.calculateInvoice("5410940896564101")
  expect(total).toBe(300)

  purchaseRepositoryDatabaseStub.restore()
  currencyGatewayHttpStub.restore()
})

test("Deve testar o cálculo da fatura usando stub", async function () {
  const getMonthStub = sinon.stub(Date.prototype, "getMonth").returns(8)
  const getFullYearStub = sinon.stub(Date.prototype, "getFullYear").returns(2022)
  const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, "getCurrency").resolves(3)

  const invoiceService = new InvoiceServiceImpl()
  const total = await invoiceService.calculateInvoice("5410940896564101")
  expect(total).toBe(690)

  currencyGatewayHttpStub.restore()
  getMonthStub.restore()
  getFullYearStub.restore()
})