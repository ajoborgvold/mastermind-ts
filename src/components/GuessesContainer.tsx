import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import PreviousAttempts from "./PreviousAttempts"
import CurrentAttempt from "./CurrentAttempt"

export default function GuessesContainer(): JSX.Element {
  const { allGuessesArray, isGameOn } = useContext(GameContext)

  return (
    <ul className="w-full flex flex-col gap-2">
      {isGameOn && <CurrentAttempt />}
      {allGuessesArray.length > 0 && <PreviousAttempts />}
    </ul>
  )
}
