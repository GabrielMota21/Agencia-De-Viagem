import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HeaderTopo from './Components/HeaderTopo';
import Home from './Components/Home';
import Aruba from './Components/Aruba';
import Escocia from './Components/Escocia';
import GrandCanyon from './Components/GrandCanyon';
import Muralha from './Components/Muralha';
import Rodape from './Components/Rodape';

import './App.css';


function App() {
  return (
    <div className="App">
      <HeaderTopo />
      <Home />
      <Rodape />
      <Router>
        <HeaderTopo />
          <Routes>
            <Route path='/'element={ <Home />} />
            <Route path='/Escocia'element={ <Escocia />} />
            <Route path='/GrandCanyon'element={ <Home />} />
            <Route path='/Muralha'element={ <Muralha />} />
            <Route path='/Aruba'element={ <Aruba />} />
          </Routes>
        <Rodape />
      </Router>
    </div>
  );
}

export default App;
