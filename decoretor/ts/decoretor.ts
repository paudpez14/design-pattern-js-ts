interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  getDetail(): string {
    return `${this.name}`;
  }
}

abstract class ProductDecoretor implements Component {
  protected component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  getDetail(): string {
    return this.component.getDetail();
  }
}

class ComercialInfoProductDecoretor extends ProductDecoretor {
  private readonly tradeName: string;
  private readonly brand: string;
  constructor(component: Component, tradeName: string, brand: string) {
    super(component);
    this.tradeName = tradeName;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.tradeName} ${this.brand} ${super.getDetail()}`;
  }
}

class StoreProductDecoretor extends ProductDecoretor {
  private readonly price: number;
  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }
  getDetail(): string {
    return `${super.getDetail()} ${this.price}}`;
  }
}

class HtmlProductDecoretor extends ProductDecoretor {
  getDetail(): string {
    return `<h1>Informacion del Producto</h1>
        <p>${super.getDetail()}</p>`;
  }
}

const productComponent = new ProductComponent("cerveza");

const comercialInfoProduct = new ComercialInfoProductDecoretor(
  productComponent,
  "London Porter",
  "Fulller"
);

const storeProductDecoretor = new StoreProductDecoretor(
  comercialInfoProduct,
  50
);

const htmlProductDecoretor = new HtmlProductDecoretor(storeProductDecoretor);
