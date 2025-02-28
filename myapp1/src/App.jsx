import About from "./componens/About";
import Navbar from "./componens/Navbar";
import Contact from "./componens/Contact";
import Home from "./"
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  function getvalue(val){

  }
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" elemant={<Home getvalue={getvalue}/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/form"elemants={<Form/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App