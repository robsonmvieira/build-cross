import { Sequelize } from "sequelize-typescript";
import { CategorySequelizeModel } from '../../../../../src/modules/category/infra/models'
describe('Category Sequelize Model Unit Tests', () => { 
  let sequelize: Sequelize

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
  })

  afterAll(async () => await sequelize.close())
  it('should create ', async () => {
    const attributeMap = CategorySequelizeModel.getAttributes()
    const keys = Object.keys(attributeMap)
    // console.log(attributeMap.id)
    expect(keys).toStrictEqual([
      'id',
      'name',
      'is_active',
      'description',
      'created_at',
      'updated_at'
    ])

    const idKey = attributeMap.id
    expect(idKey.primaryKey).toBe(true)
    const model = await CategorySequelizeModel.create({
      id: '42b0fac3-1d84-4542-831e-21d1ea0e41f4',
      name: 'valid name',
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      description: 'Some description'
    })
   const response = model.toJSON()
    expect(response.id).toBe(model.id)
  });
});