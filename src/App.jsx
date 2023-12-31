import "./App.css";
import { Routes, Route } from "react-router";

// pages
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Error from "./pages/error/Error"
import NotFound from "./pages/error/NotFound"

// components
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />

      <br />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
