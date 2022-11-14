export default abstract class Item {
  constructor(readonly category: string, readonly description: string, readonly price: number) {
    if(price <= 0) throw new Error("Invalid price")
  }

  // delega a implementação - open closed
  abstract calculateTax(): number
}