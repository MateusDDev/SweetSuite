import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IProduct } from '../interfaces/products/IProduct';
import ProductModel from '../models/ProductModel';
import { NewEntity } from '../interfaces/NewEntity';

export default class ProductService {
  constructor(
    private productModel = new ProductModel(),
  ) { }

  async findAll(): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.findAll();
    return { status: 'SUCCESSFUL', data: products };
  }

  async findById(id: number): Promise<ServiceResponse<IProduct>> {
    const product = await this.productModel.findById(id);

    if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

    return { status: 'SUCCESSFUL', data: product };
  }

  async update(id: number, newProduct: Partial<NewEntity<IProduct>>):
  Promise<ServiceResponse<IProduct>> {
    const updatedProduct = await this.productModel.update(id, { ...newProduct });

    if (!updatedProduct) {
      return { status: 'BAD_REQUEST', data: { message: 'There is nothing to change' } };
    }

    return { status: 'SUCCESSFUL', data: updatedProduct };
  }

  async create(newProduct: NewEntity<IProduct>): Promise<ServiceResponse<IProduct>> {
    const product = await this.productModel.create(newProduct);

    return { status: 'CREATED', data: product };
  }
}
