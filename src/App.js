import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Counter from './testfunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The world!
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
