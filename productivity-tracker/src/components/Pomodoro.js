import React, { useState, useEffect,} from "react";
function Pomodoro() {
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [displayMessage, setDisplayMessage] = useState(false);
const [active, setActive] = useState(true)
const [minutesBreak, setMinutesBreak] = useState(0)
const [secondsBreak, setSecondsBreak] = useState(0)
function handleButton() {
    setActive(!active);
}
function handleOptionChange(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "Easy") {
        setMinutes(10);
        setSeconds(0);
        setMinutesBreak(2)
        setSecondsBreak(0);
    } else if (selectedOption === "Normal") {
        setMinutes(20)
        setSeconds(0)
        setMinutesBreak(5)
        setSecondsBreak(0)
    }else if (selectedOption === "Hard") {
        setMinutes(60)
        setSeconds(0)
        setMinutesBreak(10)
        setSecondsBreak(0)
    }else if (selectedOption === "Example") {
        setMinutes(0)
        setSeconds(5)
        setMinutesBreak(0)
        setSecondsBreak(10)
    }
}
let interval= null;
useEffect(() => {

if(!active) {
    const interval = setInterval(() => {
        setMinutes(minutes)
        setSeconds(seconds)
        if (seconds === 0)
            if (minutes !== 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
                } else {
                setDisplayMessage(!displayMessage);
                setMinutes(minuteBreak)
                setSeconds(secondsBreak);
                } else {
                setSeconds(seconds - 1);
                }
                clearInterval(interval)
            },1000)
        }
},[seconds,minutes, active, minutesBreak, secondsBreak]);


const timerMinutes = minutes <  10 ?`0${minutes}`:minutes;
const timerSeconds = seconds < 10 ?`0${seconds}`:seconds;


const [isWorkTimer, setIsWorkTimer] = useState(true);
const [isBreakTimer, setIsBreakTimer]= useState(false);

function handleWorkTimer() {
    setIsWorkTimer(true);
    setIsBreakTimer(false);
}
function handleBreakTimer() {
    setIsWorkTimer(false);
    setIsBreakTimer(true);
}
return  (
        
<div className="pomodoro">
    <div className="headerOptions">
            <button onClick={handleWorkTimer}>Work Timer</button>
            <button onClick={handleBreakTimer}>Break Timer</button>
            <button>Settings</button>
    </div>
    <div className="message">
            <div>{displayMessage ? "Break Time! New Session Starts in:" : null}</div>
    </div>
    {isWorkTimer ? <div className="timer">
        {timerMinutes} : {timerSeconds}
    </div> : null}
    {isBreakTimer ? <div className="timer">
        {minutesBreak} : {secondsBreak}
    </div> : null}
    <div id = "timerButtons">
        <button className="Start" onClick={handleButton}>{active ? "Start" : "Stop"}</button>
        <button className="Completed">Completed</button>
    </div> 
    {/*break ternary operator*/}
    <label className="selectOptions">Select options</label>
        <select onChange={handleOptionChange} defaultValue="Normal">
            <option value="Example">Example Mode 5sec:10sec</option>
            <option value="Easy">Easy Mode</option>
            <option value="Normal">Normal Mode</option>
            <option value= "Hard">Hard Mode</option>
        </select>
</div>
    );
}

export default Pomodoro;