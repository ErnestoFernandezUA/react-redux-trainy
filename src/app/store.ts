// npm i redux @types/redux
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer, 
});

export type RootState = ReturnType<typeof store.getState>;

const store = createStore(reducer, composeWithDevTools());

export default store;
