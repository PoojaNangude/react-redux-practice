import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeContainer/>
      </div>
    </Provider>

  );
}

export default App;
