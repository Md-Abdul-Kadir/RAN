import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contactus from './Components/Contactus/Contactus';
import Navigation from './Components/Navigation/Navigation';
import Whatwedo from './Components/Whatwedo/Whatwedo';
import Howweworks from './Components/Howweworks/Howweworks';
import Whoweare from './Components/Whoweare/Whoweare';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Resigter/Register';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/whoweare" element={<Whoweare></Whoweare>}/>
        <Route path="/whatwedo" element={<Whatwedo></Whatwedo>}/>
        <Route path="/howweworks" element={<Howweworks></Howweworks>} />
        <Route path="/aboutran" element={<About></About>} />
        <Route path="/contactus" element={<Contactus></Contactus>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Register></Register>} />
      </Routes>
      </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}

export default App;
