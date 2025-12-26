import { BrowserRouter, Routes, Route } from "react-router-dom"
import SellForm from "./pages/SellForm"
import Browse from "./pages/Browse"
import Product from "./pages/Product"
import Chat from "./pages/Chat"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sell" element={<SellForm />} />
                <Route path="/message" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}
