class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }
  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
    write(documentContext, text) {
        console.log("documento aprovado")
      }
}
const doc = new DocumentContext();
