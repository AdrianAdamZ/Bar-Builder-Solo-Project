import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BarContainer from '../containers/BarContainer';
import UserInput from '../containers/UserInput';
import Navbar from './navbar';

export default function Main() {

  const [barContents, setBarContents] = useState([]);
  const [ingName, setIngName] = useState([]);


  return (

    <div className="app">
      <Navbar />
      <UserInput {...{ setBarContents, setIngName }} />
      <BarContainer {...{ barContents, ingName }} />
    </div>

  );

}