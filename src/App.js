import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
      </div>
    </Provider>

  );
}

export default App;
