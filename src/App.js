import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Shop/>
    </>
  );
}

export default App;
