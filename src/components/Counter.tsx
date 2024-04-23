import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function Counter(): JSX.Element {
  const { allGuessesArray, isGameOn } = useContext(GameContext)

  return (
    <div className="self-start bg-stone-700 py-2 px-4 rounded-lg">
      <p className="lg:text-xl tracking-wide">
        {!isGameOn ?
          `Attempts used: ${allGuessesArray.length}` :
          `Attempts left: ${12 - allGuessesArray.length}`
        }
      </p>
    </div>
  )
}
