class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }
  getContent() {
    return `<form method="post" action ="${this.action}">
        ${this.controls.reduce((acc, item) => {
          return (
            acc +
            `<div>
          ${this.getLabel(item)}
          ${this.getInput(item)}
          </div>`
          );
        }, "")}
    <button type="submit">Enviar</button>
    </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input type="${control.type}" name="${control.name} id="${control.name}"/>`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.action = "";
    this.controls = [];
  }
  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: "text",
    });
    return this;
  }
  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: "checkbox",
    });
    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}
class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText("firstName", "Nombre")
      .setText("lastName", "Apellido");
  }
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", "Apellido")
  .setCheckbox("extranjero", "¿Eres extrajero?")
  .build();

form1.innerHTML = formPeople.getContent();

const director = new FormDirector(formBuilder);
director.createPeopleForm();
form3.innerHTML = formBuilder.build().getContent();
