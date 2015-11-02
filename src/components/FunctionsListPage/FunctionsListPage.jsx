import React from 'react';
import pureRender from 'pure-render-decorator';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {FunctionsTable} from '../FunctionsTable/FunctionsTable';
import * as actionCreators from '../../action-creators';

@pureRender
export class FunctionsListPage extends React.Component {
  render() {
    return (<div>
      <p>Functions</p>
      <Link to="/create">Create Function</Link>
      <FunctionsTable functions={this.props.functions}/>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    functions: state.get('functions')
  };
}

export const FunctionsListPageContainer = connect(
  mapStateToProps,
  actionCreators
)(FunctionsListPage);
