import Body from "./components/Body";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Body/>}/> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
