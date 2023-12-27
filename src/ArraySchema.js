export default class ArraySchema {
  constructor(validator = [(item) => Array.isArray(item)]) {
    this.validators = [...validator];
  }

  isValid(item) {
    return this.validators.every((validator) => validator(item) === true);
  }

  allIntegers() {
    return new ArraySchema([...this.validators, (item) => item.every((num) => Number
      .isInteger(num))]);
  }

  custom(val) {
    return new ArraySchema([...this.validators, (item) => item.every((row) => val(row))]);
  }
}
