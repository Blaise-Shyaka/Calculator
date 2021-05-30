import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';
import Navigation from './Navigation';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quotes" component={Quote} />
      </Switch>
    </div>
  );
}
