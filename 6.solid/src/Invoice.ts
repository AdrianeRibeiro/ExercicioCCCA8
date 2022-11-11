import Item from "./Item"

export default class Invoice {
  items: Item[]

  constructor() {
    this.items = []
  }

  addItem (item: Item) {
    this.items.push(item)
  }

  calculateTaxes() {
    let taxes = 0
    for(const item of this.items) {
      taxes += item.calculateTax()
    }
    return taxes
  }

  calculateTotal() {
    return this.items.reduce((total, item) => {
      total += item.price
      return total
    }, 0)
  }
}