import "./App.css"
import { DashboardLayout } from "./DashboardLayout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Screen1 } from "./pages/screen1"
import { Screen2 } from "./pages/screen2"
import { Screen3 } from "./pages/screen3"

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/screen1" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
