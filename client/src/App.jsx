import { BrowserRouter, Routes, Route } from "react-router-dom"
import SellForm from "./pages/SellForm"
import Testlogin from "./pages/Testlogin"
import Browse from "./pages/Browse"
import Product from "./pages/Product"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sell" element={<SellForm />} />
                <Route path="/testlogin" element={<Testlogin />} />
            </Routes>
        </BrowserRouter>
    )
}
