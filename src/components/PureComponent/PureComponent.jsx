import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class PureComponent extends React.Component {
  shouldComponentUpdate() {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }
}
