import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Introduction/>
       <About/>
       <Resume/>
       <Project/>
       <Footer/>

    </div>
  );
}

export default App;
