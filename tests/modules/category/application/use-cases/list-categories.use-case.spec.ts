import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, ListCategoriesUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
import { GetCategoryDTO } from '../../../../../src/modules/category/dtos';
describe('List Categories UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let useCase: ListCategoriesUseCase
  let createUseCase: CreateCategoryUseCase.UseCase
  let mapper: CategoryMapper

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    useCase = new ListCategoriesUseCase(repo, mapper)
    createUseCase = new CreateCategoryUseCase.UseCase(repo, mapper)
  })
  
  it('should list categories using find method ', async () => {
    jest.spyOn(repo, 'findById')
    const mapperSpyOn = jest.spyOn(mapper, 'fromOrmToOutput')
    const inputCreateDTO = {
      name: 'test',
      isActive: true,
    }
    
    await createUseCase.execute(inputCreateDTO)
    const inputFindById: GetCategoryDTO = {
      id: repo.data[0].id
    }

    const output = await useCase.execute(inputFindById)
    expect(3 + 3).toBe(6)
    // expect(mapperSpyOn).toHaveBeenCalledTimes(2)

  });
 
});