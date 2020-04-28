import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import reducer from '../reducers/index';

const persistConfig = {
	key: 'root',
	storage
};

// const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = compose;
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeEnhancers(applyMiddleware(saga))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// saga.run(root);