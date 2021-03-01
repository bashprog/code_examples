import React from 'react';
import ReactDOM from 'react-dom';

import './main.sass'

//components
import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
  return(
      <>
        <TestComponent/>
      </>
  )
};

ReactDOM.render(<App />, document.querySelector('#app'));