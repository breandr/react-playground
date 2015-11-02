import React from 'react';
import pureRender from 'pure-render-decorator';
import Radium from 'radium';

@pureRender
@Radium
export default class FormInput extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    inputId: React.PropTypes.string
  };
  static defaultProps = {};
  static inputStyle = {
    width: '100%',
    padding: 8
  };
  static labelStyle = {
    display: 'inline-block',
    width: '100%'
  };
  state = {};

  constructor(props) {
    super(props);
  }

  getValue() {
    return this.refs.input.value;
  }

  _renderText() {
    return <input ref="input" {...this.props} id={this.props.inputId} type="text" style={[FormInput.inputStyle, this.props.style]} />;
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.inputId} style={FormInput.labelStyle}>{this.props.label}</label>
        {this._renderText()}
      </div>
    );
  }
}
