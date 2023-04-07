import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout"
import ErrorPage from "./pages/ErrorPage"
import GifPage from "./pages/GifPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StickerPage from "./pages/StickerPage"
import DetailsPage from "./pages/DetailsPage"
import PrivateRoute from "./routes/PrivateRoute"
import AdminPage from "./pages/AdminPage"
import MyNavbar from "./components/MyNavbar/MyNavbar"
import AdminRoute from "./routes/AdminRoute"

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Routes>
        <Route path="/gifs" element={<GifPage/>}/>
        <Route path="/admin" element={<AdminRoute><AdminPage/></AdminRoute>}/>
        <Route path="/stickers" element={<PrivateRoute><StickerPage/></PrivateRoute>}/>
        <Route path="/details/:detailid?" element={<DetailsPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
