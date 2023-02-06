import {v4 as uuidV4, validate as uuidValidate} from "uuid";
import invalidUuidError from "../errors/invalid-uuid.error";

export default class UniqueEntityId{
  constructor(public readonly id?: string){
    this.id = id || uuidV4();
    this.validate();
  }

  private validate(){
    const isValid = uuidValidate(this.id);
    if(!isValid){
      throw new invalidUuidError;
    }
  }
}