import Invoice from "../v3/Invoice";
import CurrencyGateway from "./CurrencyGateway";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";

export default class InvoiceServiceImpl implements InvoiceService {
  purchaseRepository: PurchaseRepositoryDatabase;
  currencyGateway: CurrencyGatewayHttp;
  
  constructor () {
    this.purchaseRepository = new PurchaseRepositoryDatabase()
    this.currencyGateway = new CurrencyGatewayHttp()
  }

  async calculateInvoice(cardNumber: string): Promise<number> {
    const date = new Date()
    const month = date.getMonth()
    const year = date.getFullYear()

    const purchases = await this.purchaseRepository.getPurchases(cardNumber, month, year)
    const currencyAmount = await this.currencyGateway.getCurrency()
    
    const invoice = new Invoice(currencyAmount)
    invoice.setPurchases(purchases)
    const total = invoice.getTotal()

    return total
  }
}