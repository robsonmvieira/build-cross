import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { DeleteCategoryUseCase, CreateCategoryUseCase } from '../../../../../src/modules/category/application/use-cases/'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'

describe('Delete Category UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let useCase: DeleteCategoryUseCase.UseCase
  let createCategoryUseCase: CreateCategoryUseCase.UseCase
  let mapper: CategoryMapper

  
  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    useCase = new DeleteCategoryUseCase.UseCase(repo)
    mapper = new CategoryMapper()
    createCategoryUseCase = new CreateCategoryUseCase.UseCase(repo, mapper)
  })

  it('should be able to delete a category ', async () => {
    const input = {
      name: 'test',
      isActive: true,
    }
    const output = await createCategoryUseCase.execute(input)
    await useCase.execute({id: output.id })
    expect(repo.data.length).toBe(0)
  });
})