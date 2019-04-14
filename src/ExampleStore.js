import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ExampleReducer';
import { forbiddenWordsMiddlerware } from './ExampleComponent';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddlerware, thunk)));



export default store;

/*

store.getState for accessing the current state of the application
store.dispatch for dispatching an action
store.subscribe for listening on state changes
*/