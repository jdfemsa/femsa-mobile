import { Product } from "./Product";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(id: string): Promise<Product | undefined>;
  findAll(): Promise<Product[]>;
}
