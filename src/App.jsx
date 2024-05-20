// import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import initFluid from "./script";
import Navbar from "./components/Navbar";

const App = () => {
  // useEffect(() => {
  //   initFluid();
  // }, []);
  return (
    <>
      <canvas></canvas>
      <div>
        
      <Navbar/>
      <Home />
      <Footer />
      </div>
    {/* <div> */}
    {/* </div> */}
    </>
  );
};

export default App;
