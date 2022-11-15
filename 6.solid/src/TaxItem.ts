import Item from "./Item";

export default abstract class TaxItem extends Item {
  // delega a implementação - open closed
  calculateTax(): number {
    return this.price * this.getTax()
  }

  abstract getTax(): number
}