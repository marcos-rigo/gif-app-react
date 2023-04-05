import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout"
import ErrorPage from "./pages/ErrorPage"
import GifPage from "./pages/GifPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StickerPage from "./pages/StickerPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gifs" element={<GifPage/>}/>
        <Route path="/stickers" element={<StickerPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
      
  )
}

export default App
