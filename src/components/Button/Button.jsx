import React from 'react';
import pureRender from 'pure-render-decorator';
import Radium from 'radium';
import color from 'color';

@pureRender
@Radium
export default class Button extends React.Component {
  static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'secondary', 'warning']).isRequired,
    children: React.PropTypes.node.isRequired
  };

  static defaultProps = {
    kind: 'secondary'
  };

  static styles = {
    base: {
      color: '#FFF'
    },
    primary: {
      background: '#0074D9',
      ':hover': {
        background: color('#0074d9').darken(0.1).hexString()
      },
      ':active': {
        background: color('#0074d9').darken(0.2).hexString()
      }
    },
    secondary: {
      background: '#FFF',
      color: '#333',
      border: '1px solid #DDD',
      ':hover': {
        background: color('#FFF').darken(0.1).hexString()
      },
      ':active': {
        background: color('#FFF').darken(0.2).hexString()
      }
    },
    warning: {
      background: '#FF4136',
      ':hover': {
        background: color('#FF4136').darken(0.1).hexString()
      },
      ':active': {
        background: color('#FF4136').darken(0.2).hexString()
      }
    }
  };

  render() {
    return (
      <button {...this.props} style={[Button.styles.base, Button.styles[this.props.kind], this.props.style]}>{this.props.children}</button>
    );
  }
}
