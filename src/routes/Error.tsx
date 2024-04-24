import NavigationLink from "../components/LinkLarge"

export default function Error(): JSX.Element {
  return (
    <main className="w-full h-full flex-1 flex flex-col justify-center items-center gap-16 p-4 lg:p-6">
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
        Sorry, there was an error.
      </h1>
      <NavigationLink textContent="Return to home page" path="/" />
    </main>
  )
}
