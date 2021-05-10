import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas/rootSaga'
import reducer from './reducers/rootreducer';

// console.log("process.env.NODE_ENV--", process.env.NODE_ENV);
// let store;
// if(process.env.NODE_ENV !== 'production') {
//     store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// } else {
//     store = createStore(reducer, compose(applyMiddleware(thunk)));
// }

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(reducer, compose(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga);

export default store;