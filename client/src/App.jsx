import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./pages/Form"
import Browse from "./pages/Browse"
import Product from "./pages/Product"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sell" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}
