class Subject {
  constructor() {
    this.observer = [];
  }

  subscribe(observer) {
    this.observer.push(observer);
  }

  unsubscribe(observer) {
    this.observer = this.observer.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observer.forEach((observer) => observer.refresh(data));
  }
}

class ItemSubject extends Subject {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }
  refresh(data) {
    this.element.innerHTML = data.reduce((accumalate, item) => {
      return accumalate + `<p>${item}</p>`;
    }, "");
  }
}

const items = new ItemSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
items.subscribe(div1Observer);
items.subscribe(div2Observer);

function add() {
  const name = txtName.value;
  items.add(name);
}
