import Header from "../components/Header";
import Form from "../components/Form";
import BackButton from "../components/BackButton";
import API from "../api/index";

export default function FormPage() {
  const handleCreate = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);

    data.images.forEach((imgObj) => {
      if (imgObj.file) {
        formData.append("images", imgObj.file);
      }
    });

    try {
      const response = await API.post("/api/listings/createListing", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product posted successfully!");
      // Optional: Redirect to browse or clear form
    } catch (err) {
      console.error("Upload error:", err);
      alert(err.response?.data?.message || "Failed to post product");
    }
  };

  return (
    <>
      <Header />
      <main className="py-3 md:py-6 md:pb-20 px-4 sm:px-12 md:px-36 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
        <div className="flex w-full lg:w-max flex-col gap-3 md:gap-5">
          <BackButton />
          <Form mode="create" onSubmit={handleCreate} />
        </div>
      </main>
    </>
  );
}
