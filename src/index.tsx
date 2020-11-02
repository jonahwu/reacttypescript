import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './components/reducers'
import createSagaMiddleware from 'redux-saga'
import {watchCountUp} from './sagas/saga'
//one might add more here
//import {watchCountDown, watchCountUp} from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchCountUp);
// one might add more here
//sagaMiddleware.run(watchCountDown);


ReactDOM.render(
  <React.StrictMode>

  <Provider store={store}>
    <App />
	</Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
