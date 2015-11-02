import React from 'react';
import pureRender from 'pure-render-decorator';
import WizardStep from './WizardStep.jsx';
import Button from '../Button/Button';

@pureRender
export default class Wizard extends React.Component {
  static Step = WizardStep;

  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  state = {showingIndex: 0};

  constructor(props) {
    super(props);
  }

  next = () => {
    const activeStep = this.props.children[this.state.showingIndex];

    activeStep.props.onNext().then(() => this.goToIndex(this.state.showingIndex + 1));
  }

  prev = () => {
    this.goToIndex(this.state.showingIndex - 1);
  }

  goToIndex(index) {
    this.setState({showingIndex: index});
  }

  renderWizardStep = (wizardStep, index) => {
    return React.cloneElement(wizardStep, {isShown: index === this.state.showingIndex});
  }

  getButtonStyles = () => {
    const prev = {};
    const next = {};

    if (this.state.showingIndex === 0) {
      prev.display = 'none';
    }

    if (this.state.showingIndex === React.Children.count(this.props.children) - 1) {
      next.display = 'none';
    }

    return {prev, next};
  }

  render() {
    const buttonStyles = this.getButtonStyles();

    return (
      <div>
        <header>
        </header>
        <div>
          {React.Children.map(this.props.children, this.renderWizardStep)}
        </div>
        <footer>
          <Button style={buttonStyles.prev} onClick={this.prev}>Previous</Button>
          <Button style={buttonStyles.next} onClick={this.next}>Next</Button>
        </footer>
      </div>
    );
  }
}
