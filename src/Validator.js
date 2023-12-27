import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}
