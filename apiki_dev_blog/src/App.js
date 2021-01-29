import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
// import Internal from './Pages/Internal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route  path="/internal" component= { Internal }/>  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
