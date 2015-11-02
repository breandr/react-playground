import React from 'react';
import pureRender from 'pure-render-decorator';
import {connect} from 'react-redux';
import * as actionCreators from '../../action-creators';

@pureRender
export class FunctionDetailsPage extends React.Component {
  render() {
    return (<div>
      <p>{this.props.func.get('id')}</p>
    </div>);
  }
}

function mapStateToProps(state, props) {
  return {
    func: state.get('functions').find((func) => func.get('id') === props.params.functionId)
  };
}

export const FunctionDetailsPageContainer = connect(
  mapStateToProps,
  actionCreators
)(FunctionDetailsPage);
