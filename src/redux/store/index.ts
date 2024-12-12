import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  devTools: false,
});

sagaMiddleware.run(sagas);

export default store;
