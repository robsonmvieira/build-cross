import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, UpdateCategoryUseCase, GetCategoryUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
describe('Update Category UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let createUseCase: CreateCategoryUseCase.UseCase
  let useCase: UpdateCategoryUseCase.UseCase
  let mapper: CategoryMapper
  let findCategoryUseCase: GetCategoryUseCase

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    useCase = new UpdateCategoryUseCase.UseCase(repo, mapper)
    createUseCase = new CreateCategoryUseCase.UseCase(repo, mapper)
    findCategoryUseCase = new GetCategoryUseCase(repo, mapper)

  })
  
  it('should update a category ', async () => {
  
    let input = {
      name: 'test',
      isActive: true,
    }

    const output = await createUseCase.execute(input)
    const categoryUpdateDto = {
      name: 'new name',
      id: output.id,
      isActive: false,
      description: 'new description'
    }
    // output.name = 'Novo Nome'
    // output.is_active = false
    await useCase.execute(categoryUpdateDto)
    const response = await findCategoryUseCase.execute({id: output.id})
    console.log(response)
    expect(response.description).toBe('new description')
    // console.log(output)
    // expect(repo.data.length).toBe(1)
    // expect(repo.create).toHaveBeenCalledTimes(1)
    // expect(mapperSpyOn).toHaveBeenCalledTimes(1)

  });
});