import CurrencyGateway from "./CurrencyGateway";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";

export default class InvoiceServiceImpl implements InvoiceService {

  constructor (readonly purchaseRepository: PurchaseRepositoryDatabase, readonly currencyGateway: CurrencyGatewayHttp) {}

  async calculateInvoice(cardNumber: string, month: number, year: number): Promise<number> {
    const date = new Date()

    const purchases = await this.purchaseRepository.getPurchases(cardNumber, month, year)
    const currencyAmount = await this.currencyGateway.getCurrency()
    //application
    let total = 0
    for(const purchase of purchases) {
      if(purchase.currency === "USD") {
        total += purchase.amount * currencyAmount
      } else {
        total += purchase.amount
      }
    }

    return total
  }
}