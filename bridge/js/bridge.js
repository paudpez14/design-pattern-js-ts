class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").reduce((ac, item) => {
      return ac + `<p>${item.trim()}</p>`;
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((ac, item) => {
      return e !== "" ? ac + item.replace("<p>", "") + ". " : ac + "";
    }, "");
  }
}
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("pato"));
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder1.encode("Hola. Soy. Amigo"));
