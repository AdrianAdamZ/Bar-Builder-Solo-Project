import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BarContainer from '../containers/BarContainer';
import UserInput from '../containers/UserInput';
import Navbar from './navbar';
import CreateUser from './create-user';
import DatePicker from 'react-datepicker';


export default function App() {

  const [barContents, setBarContents] = useState([]);
  const [ingName, setIngName] = useState([]);
  const [startDate, setStartDate] = useState(new Date());


  return (

    <div className="app">


      {/* <div className='dobDiv'>
        <h1>Enter your DOB</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <img className='ofTop' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllOlAF9hIZA30gPFkJa2kMG6gcyqsnkHyCw&usqp=CAU'/>
      <img className='of' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy2fjogoe8zD2PY0jUfaIIPSq23C0VrnODw&usqp=CAU'/> */}



      <Navbar />
      <UserInput {...{ setBarContents, setIngName }} />
      <BarContainer {...{ barContents, ingName }} />


    </div>

  );

}
