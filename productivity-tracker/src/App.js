import React, {useState, useEffect} from 'react';
import Pomodoro from './components/Pomodoro';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Calendar from './components/Calendar';
import CompletedTasks from './components/CompletedTasks';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
const [usersList ,setUsersList] =useState([])

  useEffect(() => {
    fetch("http//:localhost:8003/users")
    .then(res => res.json())
    .then((tasks) => setUsersList(tasks))
  },[]);
  console.log(usersList)
  return (
    <div className="App">
      <Header />
      {/* <Switch> */}
        {/* <Route path="/completed-items"> */}
          {/* Completed Items Component */}
        {/* </Route> */}
        {/* <Route path="/calendar"> */}
          {/* <Calendar /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
          {/* existing components */}
          <Pomodoro />
          <ToDoList />
         <CompletedTasks tasks = {usersList}/>
        {/* </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
