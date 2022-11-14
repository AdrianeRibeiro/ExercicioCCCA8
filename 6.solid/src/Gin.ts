import Item from "./Item";

export default class Gin extends Item {
  constructor(readonly description: string, readonly price: number) {
    super("Gin", description, price)
  }

  calculateTax(): number {
    return this.price * 0.2
  }
}