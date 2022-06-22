import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
describe('Create Category UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let useCase: CreateCategoryUseCase.UseCase
  let mapper: CategoryMapper

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    useCase = new CreateCategoryUseCase.UseCase(repo, mapper)

  })
  
  it('should create a category ', async () => {
    jest.spyOn(repo, 'create')
    const mapperSpyOn = jest.spyOn(mapper, 'fromOrmToOutput')
    const input = {
      name: 'test',
      isActive: true,
    }

    const output = await useCase.execute(input)
    // console.log(output)
    expect(repo.data.length).toBe(1)
    expect(repo.create).toHaveBeenCalledTimes(1)
    expect(mapperSpyOn).toHaveBeenCalledTimes(1)

  });
});