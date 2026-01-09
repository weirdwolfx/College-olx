import { Routes, Route } from "react-router-dom";
import SellFormPage from "./pages/SellFormPage";
import BrowsePage from "./pages/BrowsePage";
import ProductPage from "./pages/ProductPage";
import ChatRouter from "./components/Chat/ChatRouter";
import ChatPage from "./pages/ChatPage";
import MyItemsPage from "./pages/MyItemsPage";
import EditFormPage from "./pages/EditFormPage";

export default function App() {
  return (
  
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/sell" element={<SellFormPage />} />
        <Route path="/message/*" element={<ChatPage />} />
        <Route path="/my-items" element={<MyItemsPage />} />
        <Route path="/my-items/edit/:id" element={<EditFormPage />} />
      </Routes>
   
  );
}
