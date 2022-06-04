import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import About from './components/About/About';
import Policey from './components/Policey/Policey';
function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={[<Header/>,<Cart />]} />
        <Route exact path='/Shop' element={ [<Header/>, <Shop />] } />
        <Route exact path='/About' element={ [<Header/>, <About />] } />
        <Route exact path='/Privicey' element={ [<Header/>, <Policey />] } />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
