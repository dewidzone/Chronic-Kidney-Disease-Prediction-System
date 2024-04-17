
import Navbar from "./Navbar"
import Home from "./pages/Home"
import GetPrediction from "./pages/GetPrediction"
import TreatmentOption from "./pages/TreatmentOption"
import AboutUs from "./pages/AboutUs"
import { Route, Routes } from "react-router-dom"

function App() {
 
   return (
        <>
            <Navbar />
            <div className="Container">
                <Routes>
                    <Route path="/home" element={<Home />} />  
                    <Route path="/getprediction" element={<GetPrediction />}/>
                    <Route path="/treatmentoption" element={<TreatmentOption />}/>
                    <Route path="/aboutus" element={<AboutUs />}/>
                </Routes>
            </div>
        </>
    )
 

}
     
        export default App;