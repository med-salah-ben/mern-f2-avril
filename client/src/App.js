import React from 'react'
import { Button } from 'semantic-ui-react';
import {Routes , Route, Link} from "react-router-dom"
import './App.css';
import { toggleFalse } from './JS/actions/edit';
import Home from './screen/Home';
import Add from './screen/Add';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const editFalse = ()=>{
    dispatch(toggleFalse())
  }

  return (
    <div>
       <Link to="/"><Button>Home</Button></Link>
       <Link to="/add"><Button onClick={editFalse}>Add</Button></Link>
       <Button>About</Button>
       <Button>Contact US</Button>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/add" element={<Add />}/>
      <Route path='/edit' element={<Add />}/>
    </Routes>
    </div>
  );
}

export default App;
