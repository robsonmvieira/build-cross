import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, GetCategoryUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
import { GetCategoryDTO } from '../../../../../src/modules/category/dtos';
import { NotFoundException } from '../../../../../src/core/exceptions';
describe('Get Category UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let useCase: GetCategoryUseCase
  let createUseCase: CreateCategoryUseCase.UseCase
  let mapper: CategoryMapper

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    useCase = new GetCategoryUseCase(repo, mapper)
    createUseCase = new CreateCategoryUseCase.UseCase(repo, mapper)

  })
  
  it('should returns a category ', async () => {
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
    expect(output.name).toBe('test')
    expect(mapperSpyOn).toHaveBeenCalledTimes(2)

  });


  it('should throw error if category not found ', async () => {
    jest.spyOn(repo, 'findById')
    const inputCreateDTO = {
      name: 'test',
      isActive: true,
    }
    
    await createUseCase.execute(inputCreateDTO)
    const inputFindById: GetCategoryDTO = {
      id: 'invalid-id'
    }
    await expect(() => useCase.execute(inputFindById)).rejects.toThrow(
        new NotFoundException('Entity not found'))

  });
});