import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks'; // Make sure the import uses the correct path
import Calendar from './components/Calendar'; 
import ShitList from './components/ShitList';
import About from './components/About';

function Container({tasks, onAddToDo, onSetCompletedItems}) {
  return (
    <div className="container">
      <Pomodoro />
      <ToDoList onSetCompletedItems= {onSetCompletedItems} completedItems= {[]} tasks={tasks} onAddToDo={onAddToDo} />
    </div>
  );
}
function App() {
  const [usersList, setUsersList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Fetch data from the API and update states
    fetch("http://localhost:8003/users")
      .then((res) => res.json())
      .then((tasks) => setUsersList(tasks))
      .catch((error) => console.log(error));
    
    // fetch("http://localhost:8003/completed-items")
    //   .then((res) => res.json())
    //   .then((items) => setCompletedItems(items))
    //   .catch((error) => console.log(error));
  }, []);

  const addNewTask = (text) => {
    console.log(text)
    setUsersList([...usersList, { text, checked: false }]);
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
          <Route path="/" element={<Container tasks={usersList} onAddToDo={addNewTask}/>} />
          <Route
            path="/"
            element={<ToDoList tasks={usersList} onAddToDo={addNewTask} completedItems={completedItems} onSetCompletedItems={setCompletedItems}/>}
          />
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
