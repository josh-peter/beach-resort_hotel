import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Pages/Home";
import Rooms from "./Components/Pages/Rooms";
import SingleRoom from "./Components/Pages/SingleRoom";
import About from "./Components/Pages/About";
import { Provider } from "./Context";


function App() {
  return (
    <Provider>
      <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='rooms' element={<Rooms />} />
                <Route path="/rooms/:slug" element={<SingleRoom />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </div>
    </Provider>
   
  );
}

export default App;
