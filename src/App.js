import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-10">
            Hi There this is Just A test
          </div>
          <div className="col-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
