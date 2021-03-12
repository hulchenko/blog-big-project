import { Component } from '../core/component';

export class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this));
  }
}

function tabClickHandler(event) {
  if (event.target.classList.contains('tab')) {
    console.log(event.target);
  }
}
