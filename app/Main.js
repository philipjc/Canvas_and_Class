
class Main {

  constructor() {

  }

  make(text, element, id) {
    var element = document.createElement(element);
    element.id = id;
    element.innerHTML = text;
    return element;
  }
}

export default Main;
