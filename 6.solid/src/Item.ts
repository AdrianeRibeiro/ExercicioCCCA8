export default class Item {
  constructor(readonly category: string, readonly description: string, readonly price: number) {}

  calculateTax() {
    if(this.category === "Beer") {
      return this.price * 0.1
    }

    if(this.category === "Whisky") {
      return this.price * 0.2
    }

    if(this.category === "Juice") {
      return this.price * 0.1
    }

    return 0
  }
}