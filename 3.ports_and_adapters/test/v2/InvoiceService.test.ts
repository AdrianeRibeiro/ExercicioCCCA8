import InvoiceServiceImpl from "../../src/v2/InvoiceServiceImpl"
import sinon from "sinon"
import CurrencyGatewayHttp from "../../src/v2/CurrencyGatewayHttp"
import PurchaseRepositoryDatabase from "../../src/v2/PurchaseRepositoryDatabase"
import Purchase from "../../src/v2/Purchase"
import axios from "axios"

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
  sinon.stub(Date.prototype, "getMonth").returns(9)
  sinon.stub(Date.prototype, "getFullYear").returns(2022)
  sinon.stub(CurrencyGatewayHttp.prototype, "getCurrency").resolves(3)

  const invoiceService = new InvoiceServiceImpl()
  const total = await invoiceService.calculateInvoice("5410940896564101")
  expect(total).toBe(690)

  sinon.restore()
})

test("Deve testar o cálculo da fatura usando spy", async function () {
  sinon.stub(Date.prototype, "getMonth").returns(7)
  sinon.stub(Date.prototype, "getFullYear").returns(2022)

  const spy = sinon.spy(PurchaseRepositoryDatabase.prototype, "getPurchases")
  const invoiceService = new InvoiceServiceImpl()
  const total = await invoiceService.calculateInvoice("5410940896564101")
  expect(total).toBe(100)
  expect(spy.calledWith("5410940896564101", 7, 2022)).toBeTruthy()

  sinon.restore()
})

test("Deve testar o cálculo da fatura usando mock", async function () {
  const axiosMock = sinon.mock(axios)
  axiosMock.expects("get")
           .withArgs("http://localhost:3000/currencies")
           .resolves({ data: { amount: 3 }})

  const invoiceService = new InvoiceServiceImpl()
  const total = await invoiceService.calculateInvoice("5410940896564101")
  expect(total).toBe(690)
  axiosMock.verify

  sinon.restore()
})
