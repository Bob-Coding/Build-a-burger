import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import burgerBuilderReducer from "./reducers/burgerBuilder";
import orderReducer from "./reducers/order";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

export default store;
