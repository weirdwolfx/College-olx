import { BrowserRouter, Routes, Route } from "react-router-dom"
import SellFormPage from "./pages/SellFormPage"
import Testlogin from "./pages/Testlogin"
import BrowsePage from "./pages/BrowsePage"
import ProductPage from "./pages/ProductPage"
import ChatRouter from "./components/Chat/ChatRouter"
import ChatPage from "./pages/ChatPage"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BrowsePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/sell" element={<SellFormPage />} />
                <Route path="/message/*" element={<ChatPage />} />
                <Route path="/testlogin" element={<Testlogin />} />
            </Routes>
        </BrowserRouter>
    )
}
