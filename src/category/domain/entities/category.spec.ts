import { Category } from "./category";


describe("Category Unit Tests", () =>{
  test('constructor of category',()=>{
  
    const created_at = new Date();
    const category = new Category({
      name: 'Movie', 
      description: 'some description', 
      is_active:true, 
      created_at
    });

    expect(category.props).toStrictEqual({
      name: 'Movie', 
      description: 'some description', 
      is_active:true, 
      created_at
    });

  });
});