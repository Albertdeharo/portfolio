import Navbar from '../Navbar/navbar';
import Header from '../Header/header';
import Projects from '../Projects/projects';
import './App.css';
import './AppStyle.scss';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Projects/>
    </div>
  );
}

export default App;
