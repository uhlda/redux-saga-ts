import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Counter from './Counter';
import reducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer);

// tslint:disable-next-line:no-any
const action = (type: any) => store.dispatch({type});

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
    />,
    document.getElementById('root') as HTMLElement
  );
}

registerServiceWorker();
render();
store.subscribe(render);