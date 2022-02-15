
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './utils/rootReducer';


export default function configureStore(preloadedState, history) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  return createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(...enhancers),
  )
}