import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import BonsDrinks from './components/BonsDrinks';
import Contato from './components/Contato';
import Drinks from './components/Drinks';
import NossoTime from './components/NossoTime';
import Sobre from './components/Sobre';

import './reset.css'
import './App.css';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },2500)
  }, [])
  return (
    loading ? <Loading/> :
    <div className="appContainer">
      <Router>
        <Header />
        <Switch>
          <Route path="/drinks">
          <Drinks />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route exact path="/">
            <BonsDrinks />
          </Route>
          <Route path="/nossoTime">
            <NossoTime />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
