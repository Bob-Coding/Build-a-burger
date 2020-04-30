import { createStore, applyMiddleware, compose } from "redux";
import burgerBuilderReducer from "./reducers/burgerBuilder";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(burgerBuilderReducer, enhancer);

export default store;
