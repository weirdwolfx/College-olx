import { BrowserRouter, Routes, Route } from "react-router-dom"
import form from "./pages/form"
import Browse from "./pages/Browse"
import Product from "./pages/Product"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sell" element={<form />} />
            </Routes>
        </BrowserRouter>
    )
}
