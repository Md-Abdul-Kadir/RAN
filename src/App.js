import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contactus from './Components/Contactus/Contactus';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';
import Whatwedo from './Components/Whatwedo/Whatwedo';
import Signup from './Components/Signup/Signup';
import Howweworks from './Components/Howweworks/Howweworks';
import Whoweare from './Components/Whoweare/Whoweare';

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
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
