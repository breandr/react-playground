import React from 'react';
import pureRender from 'pure-render-decorator';
import Radium from 'radium';

@pureRender
@Radium
export default class WizardStep extends React.Component {
  static propTypes = {
    isShown: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired
  };

  static defaultProps = {
    isShown: false,
    onNext: Promise.resolve,
    onPrev: Promise.resolve
  };

  constructor(props) {
    super(props);
  }

  render() {
    const style = {};

    if (!this.props.isShown) {
      style.display = 'none';
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
