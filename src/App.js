import logo from './logo.svg';
import './App.css';
import './Components/Header/Header.css';
import Header from './Components/Header/Header';
import './Components/SideBar/SideBar.css';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
