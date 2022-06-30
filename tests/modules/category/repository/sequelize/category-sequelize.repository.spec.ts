import { Sequelize } from "sequelize-typescript";
import { NotFoundException } from "#core/exceptions";
import { Category } from "#modules/category/entities";
import { CategorySequelizeModel } from '#modules/category/infra/models'
import { CategorySequelizeRepository  } from '#modules/category/infra/repository/sequelize'
describe('Category Sequelize Repository Integration Test', () => { 
  let sequelize: Sequelize
  let repository: CategorySequelizeRepository.Repository

  beforeAll(async () => {
    sequelize = new Sequelize({
      logging: false,
      dialect: "sqlite",
      host: ":memory:",
      models: [CategorySequelizeModel]
    });
  })
  beforeEach(async() => {
    await sequelize.sync({force: true});
    repository = new CategorySequelizeRepository.Repository(CategorySequelizeModel)
  })

  afterAll(async () => await sequelize.close())
  it('should create a new register ', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    await repository.create(entity)
    expect(2+2).toBe(4)
    const output = await CategorySequelizeModel.findByPk(entity.id)
    expect(output?.id).toBe(entity.id)
  });

  it('should throw NotFoundException if category not found', async () => {
    const r = await CategorySequelizeModel.findByPk('invalid id')
    console.log('valor de R => ', r)
    await expect(() => CategorySequelizeModel.findByPk('invalid id')
      ).rejects.toThrow(new NotFoundException('Entity not found'))
  });

  it('should get a category by id', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    await repository.create(entity)
    const output = await CategorySequelizeModel.findByPk(entity.id)
    expect(output?.id).toBe(entity.id)
  });

  it('should list Categories', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    await repository.create(entity)
    const output = await repository.findAll()
    expect(output.length).toBe(1)
    expect(output[0].name).toBe('valid name')
  });

  it('should be able delete category when passed correct id', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    await repository.create(entity)
    await repository.delete(entity.id)
    const output = await repository.findAll()
    expect(output).toHaveLength(0)
  });

  
  it('should throw error when passed incorrect id is passed to delete method', async () => {
    await expect(
      () => repository.delete('invalid id')).rejects.toThrow(
        new NotFoundException('Entity not found'))
  });

  it('should throw error when passed incorrect id is passed to update method', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    try {
      fail()
    } catch (error) {
      
      await expect(
        () => repository.update(entity)).rejects.toThrow(
          new NotFoundException('Entity not found'))
    }
  });

  it('should be able update method', async () => {
    const entity = Category.create({
      name: 'valid name',
      isActive: true,
      description: 'Some description'
    }).getResult()
    await repository.create(entity)
    entity.updateName('Updated Name');
    await repository.update(entity)
    const output = await repository.findById(entity.id)
    expect(output.name).toBe('Updated Name');
  });
});