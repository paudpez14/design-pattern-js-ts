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

class Observer {
  constructor(fn) {
    this.fn = fn;
  }
  refresh(data) {
    this.fn(data);
  }
}

const subject = new Subject();
const ob1 = new Observer((data) => {
  console.log("Hola soy ob1 " + data);
});
const ob2 = new Observer((data) => {
  div1.innerHTML = data;
});
const ob3 = new Observer((data) => {
  div2.innerHTML = data.split("").reverse().join("");
});
subject.subscribe(ob1);
subject.subscribe(ob2);
subject.subscribe(ob3);

function change() {
  subject.notify(myText.value);
}
