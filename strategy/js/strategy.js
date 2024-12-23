/**
 * El patron Strategy es esencial cuando se metodos con un objetivo en comun pero con diferentes implementaciones
 * Es recomendable cuando un objeto cambia su comportameniento en tiempo de ejecucion
 */

class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

// const regularSale = new RegularSaleStrategy(0.16);
// const discountSale = new DiscountSaleStrategy(0.16, 10);
// const sale = new SaleContext(regularSale);

// console.log(sale.calculate(20));

// sale.setStrategy(discountSale);

// console.log(sale.calculate(20));

const data = [
  {
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Cerveza de trigo con un 7.3% de alcohol",
    img: "https://www.cervezasyria.com/imagenes/erdinger-pikantus.jpg",
  },
  {
    name: "Guinness Draught",
    country: "Irlanda",
    info: "Cerveza negra con un 4.2% de alcohol",
    img: "https://www.cervezasyria.com/imagenes/guinness-draught.jpg",
  },
  {
    name: "Leffe Blonde",
    country: "Bélgica",
    info: "Cerveza rubia con un 6.6% de alcohol",
    img: "https://www.cervezasyria.com/imagenes/leffe-blon.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    const listItems = data.map((beer) => `<li>${beer.name}</li>`).join("");
    element.innerHTML = `<ul>${listItems}</ul>`;
  }
}

class DelaitListStrategy {
  show(data, element) {
    const listItems = data
      .map(
        (beer) => `<li>
      <div>
      <h2>${beer.name}</h2>
      <p>${beer.info}</p>
      </div>
      <hr>
      </li>`
      )
      .join("");
    element.innerHTML = `<ul>${listItems}</ul>`;
  }
}

const strategies = [new ListStrategy(), new DelaitListStrategy()];
const info = new InfoContext(new ListStrategy(), data, content);

slcOptions.addEventListener("change", (event) => {
  const option = event.target.value;
  info.setStrategy(strategies[option]);
  info.show();
});
