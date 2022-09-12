import logo from './logo.svg';
import './App.css';

import './Components/Header/Header.css';
import Header from './Components/Header/Header';

import './Components/SideBar/SideBar.css';
import SideBar from './Components/SideBar/SideBar';

import './Components/NewTaskForm/NewTaskForm.css';
import NewTaskForm from './Components/NewTaskForm/NewTaskForm';

import './Components/Login/Login.css';
import Login from './Components/Login/Login';

import './Components/SignUp/SignUp.css';
import SignUp from './Components/SignUp/SignUp';

function App() {

  return (
    <div className="App">
      <Header />
      <Login />
      <SignUp />
      <SideBar />
      <NewTaskForm />
    </div>
  );
}

export default App;
