import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import ProductInfo from './screens/ProductInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
      <Routes>
          <Route path= '/' Component={Home}  exact/>
          <Route path= '/product/:id' Component={ProductInfo}  exact/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
