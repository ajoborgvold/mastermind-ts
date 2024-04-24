import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { emptyPeg } from "../data/colorData"
import LinkLarge from "../components/LinkLarge"

export default function Home(): JSX.Element {
  const { startNewGame } = useContext(GameContext)
  const secretCodeArray = Array(4).fill(emptyPeg)

  return (
    <main className="h-full flex-1 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <h1 className="text-amber-300 text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest uppercase">
        Mastermind
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p className="sm:text-lg md:text-xl">Can you crack the secret code?</p>
        <div className="flex gap-4 bg-stone-700 text-sm md:text-base py-3 px-6 rounded-md">
          {secretCodeArray.map((color, index) => (
            <div
              key={index}
              className="w-7 h-7 md:w-10 md:h-10 flex justify-center items-center border border-amber-100 rounded-full"
            >
              {color.name}
            </div>
          ))}
        </div>
        <p className="sm:text-lg md:text-xl">You'll get 12 attempts</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-32">
        <LinkLarge
          textContent="Start game!"
          path="/game"
          handleClick={startNewGame}
        />
        <LinkLarge textContent="How to play" path="/rules" />
      </div>
    </main>
  )
}
