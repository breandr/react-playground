import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action-creators';
import getFunctionId from './function-id';
import App from './components/App/App';
import {FunctionCreatePageContainer} from './components/FunctionCreatePage/FunctionCreatePage';
import {FunctionsListPageContainer} from './components/FunctionsListPage/FunctionsListPage';
import {FunctionDetailsPageContainer} from './components/FunctionDetailsPage/FunctionDetailsPage';

const store = createStore(reducer);
store.dispatch(setState({
  functions: [
    {
      id: getFunctionId(),
      name: 'hello-world'
    }
  ]
}));

const routes = [{
  path: '/',
  component: App,
  indexRoute: {
    component: FunctionsListPageContainer
  },
  childRoutes: [{
    path: 'create',
    component: FunctionCreatePageContainer
  }, {
    path: 'functions',
    indexRoute: {
      component: FunctionsListPageContainer
    },
    childRoutes: [{
      path: ':functionId',
      component: FunctionDetailsPageContainer
    }]
  }]
}];

ReactDOM.render(<Provider store={store}>
    <Router routes={routes} />
  </Provider>, document.getElementById('app'));
