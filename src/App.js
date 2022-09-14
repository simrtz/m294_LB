import logo from './logo.svg';
import './App.css';

import './Components/Header/Header.css';
import Header from './Components/Header/Header';

import './Components/SideBar/SideBar.css';
import SideBar from './Components/SideBar/SideBar';

import './Components/NewTaskForm/NewTaskForm.css';
import NewTaskForm from './Components/NewTaskForm/NewTaskForm';

import './Components/LoginForm/LoginForm.css';
import LoginForm from './Components/LoginForm/LoginForm';

import './Components/SignUpForm/SignUpForm.css';
import SignUpForm from './Components/SignUpForm/SignUpForm';

import './Components/Tasks/Tasks.css';
import Task from './Components/Tasks/Tasks';

import './Components/Tasks/EditPopUp/EditPopUp.css';
import EditPopUp from './Components/Tasks/EditPopUp/EditPopUp';

function App() {

  return (
    <div className="App">
      <Header />
      <LoginForm />
      <SignUpForm />
      <div id="WorkSpace">
        <Task />
        <SideBar />
        <NewTaskForm />
        <EditPopUp />
      </div>
    </div>
  );
}

export default App;
