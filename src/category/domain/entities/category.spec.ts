import { Category, CategoryProperties } from "./category";
import {omit} from "lodash";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

describe("Category Unit Tests", () =>{
  test('constructor of category',()=>{
  
    let category = new Category({
      name: 'Movie', 
    });
    let props = omit(category.props, 'created_at')
    expect(props).toStrictEqual({
      name: 'Movie', 
      description: null, 
      is_active:true, 
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({ name: 'Movie', is_active: true});

    expect(category.props).toMatchObject({
      name:'Movie',
      is_active: true
    });

    let created_at = new Date();    
    category = new Category({ name: 'Movie', description:'some description', is_active:false, created_at});

    expect(category.props).toStrictEqual({
      name: 'Movie', 
      description: 'some description', 
      is_active:false,
      created_at 
    });

    category = new Category({ name: 'Movie', description:'other description'});

    expect(category.props).toMatchObject({
      name:'Movie',
      description: 'other description'
    });

    category = new Category({ name: 'Movie', is_active: true});

    expect(category.props).toMatchObject({
      name:'Movie',
      is_active: true
    });

    category = new Category({ name: 'Movie', is_active: true});

    expect(category.props).toMatchObject({
      name:'Movie',
      is_active: true
    });

    created_at = new Date();
    category = new Category({ name: 'Movie', created_at});

    expect(category.props).toMatchObject({
      name:'Movie',
      created_at
    });

  });

  test('id field', () => {

    type CategoryDate = { props: CategoryProperties, id?: UniqueEntityId };
    const data : CategoryDate[] = [
      {props: { name: 'Movie'}},
      {props: { name: 'Movie'}, id: null},
      {props: { name: 'Movie'}, id: undefined},
      {props: { name: 'Movie'}, id: new UniqueEntityId()},
    ];

    data.forEach(i =>{
      const category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });

  test('getter of name prop', () => {
    const category = new Category({ name: 'Movie' });
    expect(category.name).toBe('Movie');
  });

  test('getter and setter of description prop', () => {
    let category = new Category({ name: 'Movie'});
    expect(category.description).toBe(null);

    category = new Category({ name: 'Movie', description: 'some description' });
    expect(category.description).toBe('some description');
  
    category = new Category({ name: 'Movie' });
    category['description'] = 'other description';
    expect(category.description).toBe('other description');


    category['description'] = undefined;
    expect(category.description).toBeNull;

    category['description'] = null;
    expect(category.description).toBeNull;
  });

  test('getters and setters of is_active', () => {
    let category = new Category({ name: 'Movie'});
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: 'Movie', is_active: true });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: 'Movie', is_active: false });
    expect(category.is_active).toBeFalsy();
  });

  test('getters and setters of created_at', () => {
    let category = new Category({ name: 'Movie'});
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({ name: 'Movie', created_at });
    expect(category.created_at).toBe(created_at);
  });

});