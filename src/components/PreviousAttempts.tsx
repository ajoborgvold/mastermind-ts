import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"
import Feedback from "./Feedback"

export default function PreviousAttempts(): JSX.Element {
  const { allGuessesArray } = useContext(GameContext)

  const allGuessesEl = allGuessesArray.map((round, index) => (
    <li
      key={index}
      className="h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-700 px-2 lg:px-6 rounded-md"
    >
      <p className="w-6 lg:text-2xl">{allGuessesArray.length - index}</p>
      <ColorPeg data={round} />
      <div className="ml-auto w-12 flex justify-center gap-1 flex-wrap">
        <Feedback data={round} />
      </div>
    </li>
  ))

  return <>{allGuessesEl}</>
}
