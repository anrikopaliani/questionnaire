import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import './App.css';
// components
import PageTwo from './components/pages/pageTwo/PageTwo';
import PageOne from './components/pages/pageOne/PageOne';
import PageThree from './components/pages/pageThree/PageThree'
import PageFour from './components/pages/pageFour/PageFour';
import EndPage from './components/pages/lastPage/EndPage';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path='/' exact component={StartPage} />
            <Route path="/page-1" component={PageOne} />
            <Route path='/page-2' component={PageTwo} />
            <Route path='/page-3' component={PageThree}/>
            <Route path='/page-4' component={PageFour} />
            <Route path="/page-5" component={EndPage}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
