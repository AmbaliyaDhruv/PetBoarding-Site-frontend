
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './component/Home'
import Create from './component/Create'
import Detaile from './component/Detaile'
function App() {
  

  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing/create" element={<Create/>}/>
        <Route path="/listing/:id" element={<Detaile/>}/>
     </Routes>
    </div>
  )
}

export default App
