import Header from './components/header';
import Todos from './components/todos';
import './App.css';
import React, {Fragment} from 'react';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  
  )
}

export default App;
