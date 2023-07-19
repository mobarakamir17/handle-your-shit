import React, { useState, useEffect,} from "react";

function Pomodoro() {
const [minutes, setMinutes] = useState(25);
const [seconds, setSeconds] = useState(0);
const [displayMessage, setDisplayMessage] = useState(false);
const [active, setActive] = useState(true)
const [working, setWorking] = useState(true);
const [breakTimer, setBreakTimer] = useState(false)
const [minutesBreak, setMinutesBreak] = useState(5)
const [secondsBreak, setSecondsBreak] = useState(0)
const [selectedOption, setSelectedOption] = useState("Normal")
function handleButton() {
    setActive(!active);
    setWorking(true)
    setBreakTimer(false);
}

function handleReset() {
    setWorking(true);
    setBreakTimer(false);
    setDisplayMessage(false);
    setActive(true);
    if (selectedOption === "Easy") {
        setDisplayMessage(false)
        setMinutes(10);
        setSeconds(0)
        setMinutesBreak(0)
        setSecondsBreak(5)
    } else if (selectedOption === "Normal") {
        setDisplayMessage(false)
        setMinutes(25)
        setSeconds(0)
        setMinutesBreak(5)
        setSecondsBreak(0)
    }else if (selectedOption === "Hard") {
        setDisplayMessage(false)
        setMinutes(60)
        setSeconds(0)
        setMinutesBreak(10)
        setSecondsBreak(0)
    }
}
function handleOptionChange(event) {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    if (selectedOption === "Easy") {
        setDisplayMessage(false)
        setMinutes(10);
        setSeconds(0)
        setMinutesBreak(5)
        setSecondsBreak(0)
    } else if (selectedOption === "Normal") {
        setDisplayMessage(false)
        setMinutes(25)
        setSeconds(0)
        setMinutesBreak(5)
        setSecondsBreak(0)
    }else if (selectedOption === "Hard") {
        setDisplayMessage(false)
        setMinutes(60)
        setSeconds(0)
        setMinutesBreak(10)
        setSecondsBreak(0)
    }
    setWorking(true);
    setBreakTimer(false);
    setDisplayMessage(false);
    setActive(true);
}
useEffect(() => {
let interval = null;
if(active) {
    clearInterval(interval);
} else {
    interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
                if (working) {
                setWorking(false); //break
                 if (setBreakTimer(true))
                setMinutes(minutesBreak);
                setSeconds(secondsBreak);
                setDisplayMessage(true)
                } else {
                setWorking(true); //work
                if (setBreakTimer(false))  {
                setMinutes(minutes)
                setSeconds(seconds);
                setDisplayMessage(false)}
                }
            } else if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
                } else {
                setSeconds(seconds - 1)
                }
            },1000)
        }
    return () => clearInterval(interval)
},[minutes, seconds, active]);



const timerMinutes = minutes <  10 ?`0${minutes}`:minutes;
const timerSeconds = seconds < 10 ?`0${seconds}`:seconds;


return  (
        
<div className="pomodoro">
    <div className="headerOptions">
            <div onClick={handleReset} className="Reset" >Reset<svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height= {20} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
            </div>
        {/* <div className="Settings">Settings<svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={20} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                    </svg></div> */}
        </div>
    <div className="message">
            <div>{displayMessage ? "Break Time!" : "Work Time!"}</div>
    </div>
   <div className="timer">{timerMinutes} : {timerSeconds}</div>
    <div id = "timerButtons">
        <div className="Start" onClick={handleButton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width={100}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
</svg>
</div>
    </div> 
    {/*break ternary operator*/}
    <p className="WB">WorkTime:BreakTime</p>
    <label className="selectOptions">Select Mode</label>
        <select onChange={handleOptionChange} defaultValue="Normal">
            <option value="Easy">Easy Mode 10m:5m</option>
            <option value="Normal">Normal Mode 25m:5m</option>
            <option value= "Hard">Hard Mode 60m:10m</option>
        </select>
</div>
    );
}

export default Pomodoro;