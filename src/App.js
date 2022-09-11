import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>{
    if(theme==='light')
    setTheme('dark');
    else
    setTheme('light');
  }



  return (
    <div>
      <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route exact path='/' element={<Body theme={theme}/>}/> 
        <Route exact path='/about' element={<About theme={theme}/>}/> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
