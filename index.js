import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import BooksApp from './reducers/BooksApp';

import Books from './components/containers/Books';

// top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React and Redux Project</h1>
        <p className='title'>Hello coy</p>
        <Books store = {store} />
      </div>
    )
  }
}

//initialize store
let store = createStore(BooksApp)
console.log(store.getState());

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('app')

);


