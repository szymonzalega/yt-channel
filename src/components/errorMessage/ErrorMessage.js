import Component from "../Component.js";

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { msg } = this.props;

    return `<div class="error-message">
        <span class="error-message__text">${msg}</span>
    </div>`;
  }
}
