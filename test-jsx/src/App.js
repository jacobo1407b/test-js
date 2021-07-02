import logo from './logo.svg';
import Hola from './Hola';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hola hola="hola con react y jest"/>
      </header>
    </div>
  );
}

export default App;
