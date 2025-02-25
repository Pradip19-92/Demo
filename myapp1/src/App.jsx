import About from "./componens/About";
import Navbar from "./componens/Navbar";
import Contact from "./componens/Contact";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App