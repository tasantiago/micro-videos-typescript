import invalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import { validate as uuidValidate } from "uuid";

function spyValidateMethod(){
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate');
}

describe('UniqueEntityId Unit Tests', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = spyValidateMethod();
    expect(() => new UniqueEntityId('fake id')).toThrow(new invalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod();
    const uuid = '7eecef9c-750b-42bc-ac90-ffa7b8619e82';
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod();
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});