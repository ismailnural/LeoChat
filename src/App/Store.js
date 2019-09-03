import { createStore, applyMiddleware, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import { Api } from './Api';
import Reducers from './Reducers';

const configureStore = () => {
  return createStore(
    Reducers,
    compose(
      applyMiddleware(Api),
      devToolsEnhancer()
    )
  );
}

export default configureStore;