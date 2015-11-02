import React from 'react';
import pureRender from 'pure-render-decorator';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actionCreators from '../../action-creators';
import ImmutablePropTypes from 'react-immutable-proptypes';

@pureRender
export class FunctionsTable extends React.Component {
  static propTypes = {
    functions: ImmutablePropTypes.list
  };

  getFunctions() {
    return this.props.functions || [];
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {this
          .getFunctions()
          .map(func => <tr key={func.get('id')}>
              <td>
                <Link to={`/functions/${func.get('id')}`}>{func.get('name')}</Link>
              </td>
            </tr>)}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    functions: state.get('functions')
  };
}

export const FunctionsTableContainer = connect(mapStateToProps, actionCreators)(FunctionsTable);
