import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './components/counter/counter';
import { People } from './components/people/people';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Counter />
      <People />
    </div>
  );
}

export default App;
