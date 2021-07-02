import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
