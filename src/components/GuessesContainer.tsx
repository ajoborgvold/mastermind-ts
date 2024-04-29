import { FC, useContext } from "react"
import { GameContext } from "../context/GameContext"
import PreviousAttempts from "./PreviousAttempts"
import CurrentAttempt from "./CurrentAttempt"

const GuessesContainer: FC = () => {
  const { allGuessesArray, isGameOn } = useContext(GameContext)

  return (
    <ul className="w-full flex flex-col gap-2">
      {isGameOn && <CurrentAttempt />}
      {allGuessesArray.length > 0 && <PreviousAttempts />}
    </ul>
  )
}

export default GuessesContainer