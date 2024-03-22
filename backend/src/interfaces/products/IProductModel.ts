import { NewEntity } from '../NewEntity';
import { IProduct } from './IProduct';

export interface IProductModel {
  findAll(): Promise<IProduct[]>;
  findById(id: number): Promise<IProduct | null>;
  update(id: number, newProduct: Partial<NewEntity<IProduct>>): Promise<IProduct | null>;
  create(newProduct: NewEntity<IProduct>): Promise<IProduct>;
  remove(id: number): Promise<true | null>;
  findAllByName(productName: string): Promise<IProduct[] | null>;
}
