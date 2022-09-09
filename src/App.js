import logo from './logo.svg';
import './App.css';

import './Components/Header/Header.css';
import Header from './Components/Header/Header';

import './Components/SideBar/SideBar.css';
import SideBar from './Components/SideBar/SideBar';

import './Components/NewTaskForm/NewTaskForm.css';
import NewTaskForm from './Components/NewTaskForm/NewTaskForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <NewTaskForm />
    </div>
  );
}

export default App;
