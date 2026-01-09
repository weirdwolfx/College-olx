import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import MyItemCard from "../components/Product/MyItemCard";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import DialogBox from "../components/DialogBox";
import API from "../api/index";

export default function MyItems() {
  const [products, setProducts] = useState([]);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  const loadProducts = async () => {
    const res = await API.get("/api/listings/me");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    console.log("Deleting item:", selectedId);

    try {
      await API.delete(`/api/listings/${selectedId}`);

      alert("Product deleted successfully!");
     // Navigate("/my-items");
      setProducts((prev) => prev.filter((item) => item._id !== selectedId));
    } catch (err) {
      console.error("Delete error:", err);
      alert(err.response?.data?.message || "Failed to delete product");
    } finally {
      setShowDeleteDialog(false);
      setSelectedId(null);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit item:", id);
    navigate(`/my-items/edit/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-100 py-3 md:py-6 px-4 md:px-16 lg:px-20 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5">
        <div className="flex flex-col gap-3 md:gap-5 py-1">
          <BackButton />
          {products.length === 0 && (
            <p className="text-center text-gray-500">No items found</p>
          )}

          {products.map((item) => (
            <MyItemCard
              key={item._id}
              item={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>

      <DialogBox
        open={showDeleteDialog}
        title="Delete item?"
        description="This action cannot be undone. Are you sure you want to delete this item?"
        confirmText="Delete"
        cancelText="Cancel"
        danger
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteDialog(false)}
      />
    </div>
  );
}
