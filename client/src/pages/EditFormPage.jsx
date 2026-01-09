import Header from "../components/Header";
import Form from "../components/Form";
import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../api/index";

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await API.get(`/api/listings/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) getProduct();
  }, [id]);

  const handleUpdate = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);

    // unchanged images sent separately
    const keptImages = data.images
      .filter((img) => !img.file)
      .map((img) => img.preview);

    formData.append("existingImages", JSON.stringify(keptImages));

    // sending newly added images here
    data.images.forEach((img) => {
      if (img.file) {
        formData.append("images", img.file);
      }
    });

    try {
      await API.patch(`/api/listings/${id}`, formData);

      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert(err.response?.data?.message || "Failed to update product");
    }
  };

  return (
    <>
      <Header />
      <main className="py-3 md:py-6 md:pb-20 px-4 sm:px-12 md:px-36 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100 h-screen">
        <div className="flex w-full lg:w-max flex-col gap-3 md:gap-5">
          <BackButton />
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 font-semibold">
                Loading product details...
              </p>
            </div>
          ) : product ? (
            <Form mode="edit" initialValue={product} onSubmit={handleUpdate} />
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold">Product not found</h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
