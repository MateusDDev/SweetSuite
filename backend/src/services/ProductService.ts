import { MessageType, ServiceResponse } from '../interfaces/ServiceResponse';
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

  async remove(id: number): Promise<ServiceResponse<MessageType>> {
    const affectedRows = await this.productModel.remove(id);

    if (!affectedRows) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

    return { status: 'NO_CONTENT', data: { message: '' } };
  }

  async findAllByName(productName: string): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.findAllByName(productName);

    if (!products) {
      return { status: 'NOT_FOUND', data: { message: 'No products found with the provided name' } };
    }

    return { status: 'SUCCESSFUL', data: products };
  }
}
