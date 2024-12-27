interface ListImplementor {
  elements: number[];
  add(number: number): void;
  getElements(): number[];
}

class OrderedList implements ListImplementor {
  elements: number[] = [];
  add(number: number): void {
    this.elements.push(number);
    this.elements.sort((a, b) => a - b);
  }
  getElements(): number[] {
    return this.elements;
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = [];
  add(number: number): void {
    if (!this.elements.includes(number)) {
      this.elements.push(number);
    }
  }
  getElements(): number[] {
    return this.elements;
  }
}

interface DataAbstraction {
  implementor: ListImplementor;
  add(number: number): void;
  get(): number[];
  operation(fn: (number: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor;
  constructor(implementor: ListImplementor) {
    this.implementor = implementor;
  }
  add(number: number): void {
    this.implementor.add(number);
  }
  get(): number[] {
    return this.implementor.getElements();
  }
  operation(fn: (number: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
