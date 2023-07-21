import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';
import ToDoList from './components/ToDoList';
import CompletedTasks from './components/CompletedTasks';
import Calendar from './components/Calendar';
import ShitList from './components/ShitList';
import About from './components/About';

// Component for the main container
function Container({ tasks, onAddToDo, onSetCompletedItems, completedItems, handleCheckboxChange }) {
  return (
    <div className="container">
      <Pomodoro />
      <ToDoList
        handleCheckboxChange={handleCheckboxChange}
        onSetCompletedItems={onSetCompletedItems}
        completedItems={completedItems}
        tasks={tasks}
        onAddToDo={onAddToDo}
      />
    </div>
  );
}

function App() {
  const [usersList, setUsersList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to add a new task
  const addNewTask = (text) => {
    fetch("http://localhost:8003/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text, checked: false }),
    })
      .then(resp => resp.json())
      .then(data => {
        setUsersList([...usersList, { text, checked: false, id: data.id }]);
      });
  }

  // Function to handle checkbox change for completed tasks
  function handleCheckboxChange(index) {
    const updatedToDoList = [...usersList];
    const completedItem = updatedToDoList.splice(index, 1)[0];
    completedItem.checked = true;
    setCompletedItems([...completedItems, completedItem])
    completedItem.completedAt = new Date();
    setUsersList(updatedToDoList);
    const id = completedItem.id;
    fetch(`http://localhost:8003/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedItem),
    });
  }

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
          <Route path="/" element={
            <Container
              handleCheckboxChange={handleCheckboxChange}
              completedItems={completedItems}
              tasks={usersList}
              onAddToDo={addNewTask}
              onSetCompletedItems={setCompletedItems}
            />}
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
          <Route
            path='/About'
            element={<About />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
