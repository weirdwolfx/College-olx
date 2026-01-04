import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellForm from "./pages/SellForm";
import Browse from "./pages/Browse";
import Product from "./pages/Product";
import MyItems from "./pages/MyItems";
import EditForm from "./pages/EditForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/my-items/edit/:itemId" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
}
