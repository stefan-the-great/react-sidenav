import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GuestList from './pages/GuestList';
import SeatingPlan from './pages/SeatingPlan';
import Expenses from './pages/Expenses';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={GuestList} />
          <Route path='/seatingplan' component={SeatingPlan} />
          <Route path='/expenses' component={Expenses} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
