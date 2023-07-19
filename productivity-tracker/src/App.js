import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks';
import Calendar from './components/Calendar';

function Container() {
  return (
    <div className="container">
      <Pomodoro />
      <ToDoList />
      <Calendar />
    </div>
  );
}

function App() {
  // Initialize usersList and completedItems states
  const [usersList, setUsersList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  // Fetch data from the API and update states
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

  // Define the function to add a new task
  const addNewTask = (text) => {
    setUsersList([...usersList, { text, checked: false }]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Link to="/completed-items" className="linkStyle">
          Completed Items
        </Link>

        <Routes>
          <Route path="/" element={<Container />} />
          <Route
            path="/"
            element={<ToDoList tasks={usersList} onAddToDo={addNewTask} />}
          />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/completed-items"
            element={<CompletedTasks tasks={completedItems} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
