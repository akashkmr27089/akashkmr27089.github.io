import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-10">
              Aakash Kumar
            </div>
            <div className="col-2">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </header>
      </div >
    </>
  );
}

export default App;
