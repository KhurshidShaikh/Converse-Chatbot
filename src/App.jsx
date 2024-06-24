import Header from "./components/Header";
import Responses from "./components/Responses";
import Footer from "./components/Footer"


function App() {
 
  return (
 
    <div className="flex flex-col  w-full min-h-screen bg-blue-300">
    <Header/>
    <Responses/>
    <div className="flex items-center justify-center">
    <Footer/>

    </div>

    </div>

  

  
  )
}

export default App
