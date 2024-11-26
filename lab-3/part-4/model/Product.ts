export class Product {
  private static idCounter = 0;
  readonly id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number = 1) {
    this.id = Product.generateId();
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  private static generateId(): number {
    return this.idCounter++;
  }

  updateQuantity(newQuantity: number): void {
    if (newQuantity < 0) {
      throw new Error("Quantity cannot be negative");
    }
    this.quantity = newQuantity;
  }
}
