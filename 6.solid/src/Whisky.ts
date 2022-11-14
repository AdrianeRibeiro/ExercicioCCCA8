import Item from "./Item";

export default class Beer extends Item {
  constructor(readonly description: string, readonly price: number) {
    super("Whisky", description, price)
  }

  calculateTax(): number {
    return this.price * 0.2
  }
}