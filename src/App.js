import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinsDetails from './components/CoinsDetails';

function App() {
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/exchanges' element={<Exchanges/>}></Route>
        <Route path='/coins/:id' element={<CoinsDetails/>}></Route>
      </Routes>
   </Router>

  );
}

export default App;
