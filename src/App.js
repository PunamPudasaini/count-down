import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const endDate = "25 June 2023 12:00 PM";

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [second, setSeconds] = useState("");


  const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;
    setDays(Math.floor(diff / 3600 / 24));
    setHours(Math.floor(diff / 3600) % 24)
    setMinutes(Math.floor(diff / 60) % 60)
    setSeconds(Math.floor(diff) % 60)

  }

  useEffect(() => {
    clock()

  }, [])

  setInterval(() => {
    clock()
  }, 1000)

  return (
    <div className="main">
      <div className='overlay'>
        <div className='title'>We are coming soon</div>
        <div className='title'>{endDate}</div >
        <div className='col'>
          <div><input type="text" readOnly value={days}></input><br /><label>Days</label></div>
          <div><input type="text" readOnly value={hours}></input><br /><label>Hours</label></div>
          <div><input type="text" readOnly value={minutes}></input><br /><label>Minutes</label></div>
          <div><input type="text" readOnly value={second}></input><br /><label>Seconds</label></div>
        </div>
      </div>
    </div>
  );
}

export default App;
