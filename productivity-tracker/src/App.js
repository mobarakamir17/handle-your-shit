import Pomodoro from './components/Pomodoro';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
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
        {/* </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
