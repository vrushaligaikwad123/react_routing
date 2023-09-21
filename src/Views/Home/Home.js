import "./Home.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer"
export default function(){
    return(
        <div className="home-container"> 
         <Navbar/>
             <h2>All fruits are available here</h2><br/>
             <h2>Mango</h2>
             <h2>Banana</h2>
             <h2>Apple</h2>
        <Footer/>
        </div>
    )
}