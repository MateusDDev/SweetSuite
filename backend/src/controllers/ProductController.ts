import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ProductController {
  constructor(
    private productService = new ProductService(),
  ) { }

  async findAllProducts(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.productService.findAll();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
