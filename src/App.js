import "./global.css";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className={`bg-[#0D0D0D] w-full`}>
        <Navbar/>
        <Cursor/>
        <Clients/>
        <Contact/>
        <Footer/>

      </div>
      <div className={`bg-[#161615] w-full`}>
      </div>
    </div>
  );
}

export default App;
