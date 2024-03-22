import { Op } from 'sequelize';
import SequelizeProduct from '../database/models/SequelizeProduct';
import { NewEntity } from '../interfaces/NewEntity';
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

  async update(id: number, newProduct: Partial<NewEntity<IProduct>>): Promise<IProduct | null> {
    const [affectedRows] = await this.model.update(newProduct, {
      where: { id },
    });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }

  async create(newProduct: NewEntity<IProduct>): Promise<IProduct> {
    const product = await this.model.create(newProduct);
    return product;
  }

  async remove(id: number): Promise<number | null> {
    const affectedRows = await this.model.destroy({ where: { id } });

    if (affectedRows === 0) return null;

    return affectedRows;
  }

  async findAllByName(productName: string): Promise<IProduct[] | null> {
    const products = await this.model.findAll({ where: {
      name: { [Op.like]: `%${productName}%` },
    } });

    if (!products || products.length === 0) return null;

    return products;
  }
}
