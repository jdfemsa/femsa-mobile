import { Product } from "../model/Product";

/**
 * ViewModel for managing a product catalog.
 */
export class ProductCatalogViewModel {
  private _productList: Product[] = [];
  private _listeners: Function[] = [];

  /**
   * Gets the list of products.
   * @returns {Product[]} The current list of products.
   */
  get productList() {
    return this._productList;
  }

  /**
   * Sets a new list of products and notifies listeners.
   * @param {Product[]} newList - The new list of products.
   */
  set productList(newList: Product[]) {
    this._productList = newList;
    this._notifyListeners();
  }

  /**
   * Adds a listener function that will be called when the product list changes.
   * @param {Function} listener - The listener function to add.
   */
  addListener(listener: Function) {
    this._listeners.push(listener);
  }

  /**
   * Removes a listener function.
   * @param {Function} listener - The listener function to remove.
   */
  removeListener(listener: Function) {
    this._listeners = this._listeners.filter((l) => l !== listener);
  }

  /**
   * Notifies all registered listeners of a change in the product list.
   * @private
   */
  private _notifyListeners() {
    this._listeners.forEach((listener) => listener(this._productList));
  }

  /**
   * Adds a product to the product list and notifies listeners.
   * @param {Product} product - The product to add.
   */
  addProduct(product: Product) {
    this._productList.push(product);
    this._notifyListeners();
  }

  /**
   * Updates the quantity of a product and notifies listeners.
   * @param {number} productId - The ID of the product to update.
   * @param {number} newQuantity - The new quantity of the product.
   */
  updateQuantity(productId: number, newQuantity: number) {
    const product = this._productList.find((p) => p.id === productId);

    if (product) {
      product.updateQuantity(newQuantity);
      this._notifyListeners();
    }
  }
}
