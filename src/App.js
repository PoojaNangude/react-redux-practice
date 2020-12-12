import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import NewCakeContainer from './Components/NewCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <NewCakeContainer/>
      </div>
    </Provider>

  );
}

export default App;
