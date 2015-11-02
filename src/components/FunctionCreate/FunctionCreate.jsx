import React from 'react';
import pureRender from 'pure-render-decorator';
import Form from '../Form/Form.jsx';
import Button from '../Button/Button.jsx';
import ImmutablePropTypes from 'react-immutable-proptypes';

@pureRender
export default class FunctionCreate extends React.Component {
  static propTypes = {
    functions: ImmutablePropTypes.list
  };
  static defaultProps = {};
  state = {};

  constructor(props) {
    super(props);
  }

  isNameUnique() {
    const name = this.refs.name.getValue();

    return !this.props.functions.find(func => func.get('name') === name);
  }

  validate() {
    const validation = {};
    if (!this.isNameUnique()) {
      validation.FUNCTION_NAME_CONFLICT = true;
    }

    return validation;
  }

  isValid() {
    return this.isNameUnique();
  }

  render() {
    return (
      <Form>
        <Form.Input ref="name" type="text" label="Name" placeholder="Enter a name for your function" />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
