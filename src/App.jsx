import { useState } from 'react'
import Landing from './Components/Landing/Landing'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MCQ from './Components/MCQ/MCQ';
import AIquestions from "./Components/AIQUESTIONS/AIquestions"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Landing/> */}
      <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/mcq" element={<MCQ />} />
      </Routes>
    </Router>
      {/* <AIquestions/> */}
    </>
  )
}

export default App
