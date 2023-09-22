import "./About.css"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"
export default function About(){
    return(
        <div className="about">
            <Navbar/>
            <h2>Price of Fruits</h2>
             <h2>Mango : Rs.100/kg</h2>
             <h2>Banana: Rs.40/dozen</h2>
             <h2>Apple: Rs.200/kg</h2>
            <Footer/>
        </div>
    )
}