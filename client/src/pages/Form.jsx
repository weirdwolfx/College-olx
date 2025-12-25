import Header from "../components/Header"
import Seller from "../components/sell"
import BackButton from "../components/BackButton"

export default function Form() {
  return (
    <>
      <Header />
      <BackButton to="/" label="Back to Browse" />
      <main className="mt-0">
        <Seller />
      </main>
    </>
  )
}
