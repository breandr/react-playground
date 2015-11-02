import React from 'react';
import uuid from 'uuid';
import pureRender from 'pure-render-decorator';
import FormInput from './FormInput.jsx';

@pureRender
export default class Form extends React.Component {
  static Input = FormInput;
  static propTypes = {
    children: React.PropTypes.node
  };
  static defaultProps = {};
  state = {};
  formId = this._getShortId();

  constructor(props) {
    super(props);
  }

  _getShortId() {
    return uuid.v4().split('-')[0];
  }

  _getInputId() {
    return `${this.formId}-${this._getShortId()}`;
  }

  render() {
    return (
      <form>
        {React.Children.map(this.props.children, (child) => React.cloneElement(child, {inputId: this._getInputId()}))}
      </form>
    );
  }
}
