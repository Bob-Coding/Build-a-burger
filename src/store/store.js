import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import burgerBuilderReducer from "./reducers/burgerBuilder";
import orderReducer from "./reducers/order";
import authReducer from "./reducers/auth";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

export default store;
