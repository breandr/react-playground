import React from 'react';
import pureRender from 'pure-render-decorator';
import {connect} from 'react-redux';
import * as actionCreators from '../../action-creators';
import Wizard from '../Wizard/Wizard';
import FunctionCreate from '../FunctionCreate/FunctionCreate.jsx';
import ImmutablePropTypes from 'react-immutable-proptypes';
import StarRating from '../StarRating/StarRating';

@pureRender
export class FunctionCreatePage extends React.Component {
  static propTypes = {
    functions: ImmutablePropTypes.list
  };
  static defaultProps = {};
  state = {};

  constructor(props) {
    super(props);
  }

  validateFunctionCreate() {
    if (this.refs.functionCreate.isValid()) {
      return Promise.resolve('valid');
    }

    return Promise.reject('invalid');
  }

  render() {
    return (
      <Wizard>
        <Wizard.Step title="Configuration" onNext={this.validateFunctionCreate.bind(this)}>
          <StarRating numStars="5" />
          <FunctionCreate ref="functionCreate" functions={this.props.functions} />
        </Wizard.Step>
        <Wizard.Step title="Confirm">
          Confirm!
        </Wizard.Step>
      </Wizard>
    );
  }
}

function mapStateToProps(state) {
  return {
    functions: state.get('functions')
  };
}

export const FunctionCreatePageContainer = connect(
  mapStateToProps,
  actionCreators
)(FunctionCreatePage);
