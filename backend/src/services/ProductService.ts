import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IProduct } from '../interfaces/products/IProduct';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  constructor(
    private productModel = new ProductModel(),
  ) { }

  async findAll(): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.findAll();

    return {
      status: 'SUCCESSFUL',
      data: products,
    };
  }
}
