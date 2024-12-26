class ClientComponent {
  constructor(url) {
    this.url = url;
  }
  async getData() {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
  }
}

class ClientDecoretor {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }

  async getData() {
    return await this.clientComponent.getData();
  }
}

class UpperCaseClientDecorator extends ClientDecoretor {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = e.title.toUpperCase();
      return e;
    });
    return newData;
  }
}

class HtmlClientDecoretor extends ClientDecoretor {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = `<h1>${e.title}</h1>`;
      e.thumbnailUrl = `<img src='${e.thumbnailUrl}'>`;
      return e;
    });
    return newData;
  }
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  const client = new ClientComponent(url);
  await client.getData();

  const upperClient = new UpperCaseClientDecorator(client);
  await upperClient.getData();

  const htmlClient = new HtmlClientDecoretor(upperClient);
  const data3 = await htmlClient.getData();
  divContent1.innerHTML = data3.reduce((accumalate, item) => {
    return accumalate + item.title + item.thumbnailUrl;
  }, "");

  const htmlClient2 = new HtmlClientDecoretor(client);
  const data4 = await htmlClient2.getData();
  divContent2.innerHTML = data4.reduce((accumalate, item) => {
    return accumalate + item.title + item.thumbnailUrl;
  }, "");
})();
