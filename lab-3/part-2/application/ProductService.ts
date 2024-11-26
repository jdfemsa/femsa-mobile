import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

/**
 * The product service.
 */
export class ProductService {
  /**
   * The constructor.
   * @param productRepository
   */
  constructor(private readonly productRepository: ProductRepository) {}

  /**
   * Creates a product.
   * @param product
   */
  async createProduct(product: Product): Promise<void> {
    await this.productRepository.save(product);
  }

  /**
   * Returns a product by its id.
   * @param id
   */
  async getProductById(id: string): Promise<Product | undefined> {
    return await this.productRepository.findById(id);
  }

  /**
   * Returns all products.
   */
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
