import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Projects from "./componentes/Project/Projects";

const Home = ()=>{

    return(
        <div className="">
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>
    )
}

export default Home;