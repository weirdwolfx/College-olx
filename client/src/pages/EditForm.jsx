import Header from "../components/Header";
import Form from "../components/Form";
import BackButton from "../components/BackButton";
import sampleProduct from "../assets/data";
import { useParams } from "react-router-dom";

export default function EditForm() {
  const { itemId } = useParams();

  return (
    <>
      <Header />
      <main className="py-3 md:py-6 md:pb-20 px-4 sm:px-12 md:px-36 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
        <div className="flex w-full lg:w-max flex-col gap-3 md:gap-5">
          <BackButton />
          <Form mode="edit" initialValue={sampleProduct} />
        </div>
      </main>
    </>
  );
}
