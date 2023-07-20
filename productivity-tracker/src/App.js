import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks';
import Calendar from './components/Calendar'; 
import ShitList from './components/ShitList';
import About from './components/About';

// Container Component
function Container({ tasks, onAddToDo, onSetCompletedItems }) {
  return (
    <div className="container">
      <Pomodoro />
      <ToDoList onSetCompletedItems={onSetCompletedItems} completedItems={[]} tasks={tasks} onAddToDo={onAddToDo} />
    </div>
  );
}

// Main App Component
function App() {
  // State hooks
  const [usersList, setUsersList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch data using useEffect hook
  useEffect(() => {
    fetch("http://localhost:8003/users")
      .then((res) => res.json())
      .then((tasks) => setUsersList(tasks))
      .catch((error) => console.log(error));
    
    fetch("http://localhost:8003/completed-items")
      .then((res) => res.json())
      .then((items) => setCompletedItems(items))
      .catch((error) => console.log(error));
  }, []);

  // Function to add a new task
  const addNewTask = (text) => {
    setUsersList([...usersList, { text, checked: false }]);
  };

  // Render the component
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />

        {/* Navigation */}
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

        {/* Routes */}
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Container tasks={usersList} onAddToDo={addNewTask} onSetCompletedItems={setCompletedItems} />} />
          
          {/* Additional Routes */}
          <Route
            path="/"
            element={<ToDoList tasks={usersList} onAddToDo={addNewTask} completedItems={completedItems} onSetCompletedItems={setCompletedItems} />}
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
