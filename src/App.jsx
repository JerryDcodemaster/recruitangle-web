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
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/expert' element={<Expert/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;


// TYPEWRITER CODE
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const [text] = useTypewriter({
  //   words: ['your candidate', 'you before your next opportunity'],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

/* <h1 style={{margin: '50px'}}>
  I'm a {' '}
  <span style={{fontWeight: 'bold', color: 'green'}}>
    {text}
  </span>
  <span style={{color: 'red'}}>
    <Cursor cursorStyle='|' />
  </span>
</h1> */