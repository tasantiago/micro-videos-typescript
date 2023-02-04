export default class invalidUuidError extends Error {
  constructor(message?: string){
    super(message || 'Invalid UUID');
    this.name = 'invalidUuidError';
  }
}