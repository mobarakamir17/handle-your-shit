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
function handleButton() {
    setActive(!active);
    setWorking(true)
    setBreakTimer(false);
}
function handleOptionChange(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "Easy") {
        setDisplayMessage(false)
        setMinutes(10);
        setSeconds(0)
        setMinutesBreak(2)
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
                setWorking(false);
                 if (setBreakTimer(true))
                setMinutes(minutesBreak);
                setSeconds(secondsBreak);
                setDisplayMessage(true)
                } else {
                setWorking(true);
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


const [isWorkTimer, setIsWorkTimer] = useState(true);
const [isBreakTimer, setIsBreakTimer]= useState(false);

function handleWorkTimer() {
    setIsWorkTimer(true);
    setIsBreakTimer(false);
}
function handleReset() {
    setWorking(true);
    setBreakTimer(false);
    setDisplayMessage(false);
    setActive(true);

    setMinutes(25);
    setSeconds(0);

}
return  (
        
<div className="pomodoro">
    <div className="headerOptions">
            <button onClick={handleWorkTimer}>Work Timer</button>
            <button onClick={handleReset}>Reset</button>
            <button>Settings</button>
    </div>
    <div className="message">
            <div>{displayMessage ? "Break Time!" : "Work Time!"}</div>
    </div>
    {isWorkTimer ? <div className="timer">
        {timerMinutes} : {timerSeconds}
    </div> : null}
    <div id = "timerButtons">
        <button className="Start" onClick={handleButton}>{active ? "Start" : "Stop"}</button>
        <button className="Completed">Completed</button>
    </div> 
    {/*break ternary operator*/}
    <label className="selectOptions">Select options</label>
        <select onChange={handleOptionChange} defaultValue="Normal">
            <option value="Easy">Easy Mode</option>
            <option value="Normal">Normal Mode</option>
            <option value= "Hard">Hard Mode</option>
        </select>
</div>
    );
}

export default Pomodoro;