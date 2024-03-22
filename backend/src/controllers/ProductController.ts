import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ProductController {
  constructor(
    private productService = new ProductService(),
  ) { }

  async findAllProducts(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.productService.findAll();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findProductById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const { status, data } = await this.productService.findById(id);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async updateProduct(req: Request, res: Response): Promise<Response> {
    const newProduct = req.body;
    const id = Number(req.params.id);

    const { status, data } = await this.productService.update(id, newProduct);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async createProduct(req: Request, res: Response): Promise<Response> {
    const newProduct = req.body;

    const { status, data } = await this.productService.create(newProduct);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async removeProduct(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    const { status, data } = await this.productService.remove(id);
    if (status !== 'NO_CONTENT') return res.status(mapStatusHTTP(status)).json(data);

    return res.status(mapStatusHTTP(status)).end();
  }

  async findAllProductsByName(req: Request, res: Response): Promise<Response> {
    const name = String(req.query.name);

    const { status, data } = await this.productService.findAllByName(name);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
