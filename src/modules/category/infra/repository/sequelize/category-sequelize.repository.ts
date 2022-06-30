import { SearchParams } from "#core/repository/base.repository";
import { Category } from "#modules/category/entities";
import { UniqueID } from '#core/value-objects/ID.vo'
import { CategorySequelizeModel } from "../../models";
import CategoryRepository from "../i-category.repository";
import { NotFoundException } from "#core/exceptions";

export namespace CategorySequelizeRepository {

  export class Repository implements CategoryRepository.ICategoryRepository {
    searchableFields: string[] = ['name', 'description'];
  
    constructor(private categoryModel: typeof CategorySequelizeModel) {}
  
    async create(data: Category): Promise<void> {
      const payload = Object.assign({
        ...data.toJSON(), 
        is_active: data.is_active,
        created_at: data.created_at,
        updated_at: data.updatedAt
      })
      await this.categoryModel.create(payload)
    }
   async update(data: Category): Promise<void> {
      await this.get(data.id)
      await this.categoryModel.update(data.toJSON(), {where: {id: data.id}, })
    }
   async  delete(id: string): Promise<void> {
      await this.get(id)
      await this.categoryModel.destroy({where:{id}})
    }
    async findById(id: string): Promise<Category> {
     const response = await this.get(id)
     return this.toCategory(response)
    }
    async findAll(): Promise<Category[]> {
     const response = await this.categoryModel.findAll()
     const output = response.map(category => this.toCategory(category))
     return output
    }
    protected async applyFilter(data: Category[], filter: string): Promise<Category[]> {
      if (!filter) return data;
     return data.filter(item => item.props.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
     }
     async search(props: SearchParams): Promise<CategoryRepository.SearchResult> {
      throw new Error("Method not implemented.");
    }
    private async get(id: string) {
     return this.categoryModel.findByPk(id, {
      rejectOnEmpty: new NotFoundException('Entity not found')
     })
    }

    private toCategory(categoryModel: CategorySequelizeModel) {
      const payload = Object.assign({...categoryModel.toJSON(), isActive: categoryModel.is_active})
      const uniqueId = new UniqueID(payload.id)
      return Category.create(payload, uniqueId).getResult()
    }
  }

}

export default CategorySequelizeRepository