import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Expert from "./pages/Expert";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/expert' element={<Expert/>} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
