import './App.css';
import './sections/navMenu.css'
import { NavMenu } from './sections/NavMenu'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="App-filler">
        <p className="coming-soon-text">oSTEM NOLA: Coming soon!</p>
        <img src="./fleur.jpeg" className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;