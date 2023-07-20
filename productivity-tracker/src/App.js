import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks';
import Calendar from './components/Calendar'; 
import ShitList from './components/ShitList';
import About from './components/About';

function Container({tasks, onAddToDo, onSetCompletedItems, completedItems}) {
  return (
    <div className="container">
      <Pomodoro />
      <ToDoList onSetCompletedItems= {onSetCompletedItems} completedItems= {completedItems} tasks={tasks} onAddToDo={onAddToDo} />
    </div>
  );
}
function App() {
  const [usersList, setUsersList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);


  const addNewTask = (text) => {
    setUsersList([...usersList, { text, checked: false }]);
    fetch("http://localhost:8003/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: text, checked:false}),
  })
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="navigation">
          <Link to="/" className="linkStyle homeLink">
            Home
          </Link>
          <span className="navSeparator"> </span>
          <Link to="/completed-items" className="linkStyle">
            Completed Items
          </Link>
          <span className="navSeparator"> </span>
          <Link to="/shit-list" className="linkStyle">
            Shit List
          </Link>
          <span className='About'></span>
          <Link to="/about" className="linkStyle">
            About
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Container completedItems={completedItems} tasks={usersList} onAddToDo={addNewTask} onSetCompletedItems={setCompletedItems} />} />
          <Route
            path="/completed-items"
            element={<CompletedTasks tasks={completedItems} />}
          />
          <Route
            path="/calendar"
            element={<Calendar selectedDate={selectedDate} completedItems={completedItems} />}
          />
          <Route
            path="/shit-list"
            element={<ShitList tasks={usersList} selectedDate={selectedDate} />}
          />
          <Route path='/About'
          element={<About/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
