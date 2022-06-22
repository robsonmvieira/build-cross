import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, ListCategoriesUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
import { GetCategoryDTO, ListCategoriesInputProps } from '../../../../../src/modules/category/dtos';
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
    // jest.spyOn(repo, 'findById')
    const mapperSpyOn = jest.spyOn(mapper, 'fromOrmToOutput')
    const inputCreateDTO = {
      name: 'test',
      isActive: true,
    }

    const arrange = [
      {name: 'Ferros', isActive: false, description: 'categoria de ferros'},
      {name: 'Hidraulica', isActive: true, description: 'Canos e vedações'},
      {name: 'Ferramentas', isActive: false, description: 'Martelos, chaves'},
      {name: 'Piso', isActive: true, description: 'Porcelanatos'},
      {name: 'Eletrica', isActive: true, description: 'Parte Eletrica'},
    ]
    for (const category of arrange) {
      await createUseCase.execute(category)
    
    }
    let inputFindById: ListCategoriesInputProps = {
      page: 1,
      per_page: 5,
      sort: 'name',
      sort_dir: 'asc',
      filter: null
    }

    
    let output = await useCase.execute(inputFindById)
    expect(mapperSpyOn).toHaveBeenCalled()
    expect(output.items.length).toBe(5)
   
    inputFindById = {...inputFindById, filter: 'ferramentas'}
    output = await useCase.execute(inputFindById)
    expect(output.items.length).toBe(1)
  });
 
});