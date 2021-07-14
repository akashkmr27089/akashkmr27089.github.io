import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
