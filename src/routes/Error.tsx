import { FC, useEffect } from "react"
import LinkLarge from "../components/LinkLarge"

const Error: FC = () => {
  useEffect(() => {
    document.title = "Mastermind | Error"
  }, [])

  return (
    <main className="w-full h-full flex-1 flex flex-col justify-center items-center gap-16 p-4 lg:p-6">
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
        Sorry, there was an error.
      </h1>
      <LinkLarge textContent="Return to home page" path="/" />
    </main>
  )
}

export default Error
