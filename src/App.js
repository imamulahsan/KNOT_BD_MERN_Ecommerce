import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    
    </div>
  );
}

export default App;
