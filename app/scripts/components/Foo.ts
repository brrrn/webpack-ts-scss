import loader from '../utils/loader';

interface ModuleParams {
  context: HTMLElement,
  params: Params
}

interface Params {
  [key: string] : string
}

export default class Foo {

  private context: HTMLElement;
  private text: string;
  private button: HTMLElement = document.createElement('button');

  constructor({context, params}: ModuleParams) {

    this.context = context;
    this.text = params.text;
    this.init();
  }

  init() {
    this.button.innerText = this.text;
    this.context.appendChild(this.button);

    this.addElement();
    this.bindEvents();
  }

  addElement() {
    const newElement = document.createElement('div');
    newElement.setAttribute('data-component', 'Bar');
    this.context.appendChild(newElement);
  }

  private bindEvents() {

    this.button.addEventListener('click', () => {
      loader(this.context);
    });
  }
}
