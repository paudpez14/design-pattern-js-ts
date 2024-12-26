class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

class ProductDecoretor {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    this.productComponent.getDetail();
  }
}

class ComercialInfoProductDecorator extends ProductDecoretor {
  constructor(productComponent, tradeName, brand) {
    super(productComponent);
    this.tradeName = tradeName;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradeName} ${this.brand} ` + super.getDetail();
  }
}

class StoreProductDecoretor extends ProductDecoretor {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }
  getDetail() {
    return super.getDetail() + ` ${this.price} `;
  }
}

