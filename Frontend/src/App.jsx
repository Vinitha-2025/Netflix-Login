import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App