import { BrowserRouter, Routes, Route } from "react-router-dom"
import SellFormPage from "./pages/SellFormPage"
import BrowsePage from "./pages/BrowsePage"
import ProductPage from "./pages/ProductPage"
import ChatRouter from "./components/Chat/ChatRouter"
import ChatPage from "./pages/ChatPage"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BrowsePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/sell" element={<SellFormPage />} />
                <Route path="/message/*" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    )
}
