import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

/**
 * An in-memory implementation of the ProductRepository.
 */
export class InMemoryProductRepository implements ProductRepository {
  /**
   * The private products.
   */
  private products: Product[] = [];

  /**
   * Saves a product.
   *
   * @param {Product} product The product to save.
   * @returns {Promise<void>}
   */
  async save(product: Product): Promise<void> {
    this.products.push(product);
  }

  /**
   * Returns a product by its id.
   *
   * @param {string} id The id of the product.
   * @returns {Promise<Product | undefined>}
   */
  async findById(id: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }

  /**
   * Returns all products.
   *
   * @returns {Promise<Product[]>}
   */
  async findAll(): Promise<Product[]> {
    return this.products;
  }
}
