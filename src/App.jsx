
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './component/Home'
import Create from './component/Create'
import Detaile from './component/Detaile'
import SignUp from './component/SignUp'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Edit from './component/Edit'
function App() {
  

  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing/create" element={<Create/>}/>
        <Route path="/listing/:id" element={<Detaile/>}/>
        <Route path="/listing/Edit/:id" element={<Edit/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
     </Routes>
    </div>
  )
}

export default App
