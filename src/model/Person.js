class Person {
  constructor(first, last) {
      this.first = first;
      this.last = last;
  }

  get firstName() {
      return this.first.titleize();
  }

  get lastName() {
      return this.last.titleize();
  }

  get fullName() {
      return this.firstName + ' ' + this.lastName;
  }
}
export {Person}
