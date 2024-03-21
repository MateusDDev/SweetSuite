import SequelizeProduct from '../database/models/SequelizeProduct';
import { INewEntity } from '../interfaces/NewEntity';
import { IProduct } from '../interfaces/products/IProduct';
import { IProductModel } from '../interfaces/products/IProductModel';

export default class ProductModel implements IProductModel {
  private model = SequelizeProduct;

  async findAll(): Promise<IProduct[]> {
    const products = await this.model.findAll();
    return products;
  }

  async findById(id: number): Promise<IProduct | null> {
    const product = await this.model.findByPk(id);
    return product;
  }

  async update(id: number, newProduct: Partial<INewEntity<IProduct>>): Promise<IProduct | null> {
    const [affectedRows] = await this.model.update(newProduct, {
      where: { id },
    });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }

  async create(newProduct: INewEntity<IProduct>): Promise<IProduct> {
    const product = await this.model.create(newProduct);
    return product;
  }

  async remove(id: number): Promise<true | null> {
    const affectedRows = await this.model.destroy({ where: { id } });

    if (affectedRows === 0) return null;

    return true;
  }

  async findAllByName(productName: string): Promise<IProduct[] | null> {
    const products = await this.model.findAll({ where: { name: productName } });

    if (!products) return null;

    return products;
  }
}
