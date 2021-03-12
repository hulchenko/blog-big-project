export class Component {
  constructor(id) {
    //$el = some DOM component
    this.$el = document.getElementById(id);
    this.init();
  }
  //general classes below:
  init() {}

  hide() {
    this.$el.classList.add('hide');
  }

  show() {
    this.$el.classList.remove('hide');
  }
}
