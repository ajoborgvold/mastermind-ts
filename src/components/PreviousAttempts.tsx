import { FC, useContext } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"
import Feedback from "./Feedback"

const PreviousAttempts: FC = () => {
  const { allGuessesArray, isGameOn } = useContext(GameContext)
  
  const allGuessesEl = allGuessesArray.map((round, index) => {
    const lastAttempt = !isGameOn && allGuessesArray.length
    const attemptStyle =
      index + allGuessesArray.length === lastAttempt
        ? "my-6 shadow-[0_0_12px_3px_rgb(8,47,73)] dark:shadow-[0_0_8px_2px_rgb(253,230,138)]"
        : ""

    return (
      <li
        key={index}
        className={`h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-50 dark:bg-stone-700 px-2 lg:px-6 rounded-md ${attemptStyle}`}
        tabIndex={0}
      >
        <p
          className="w-6 lg:text-2xl"
          aria-label={`Attempt number ${allGuessesArray.length - index}.`}
        >
          {allGuessesArray.length - index}
        </p>
        <div>
          <ColorPeg data={round} />
        </div>
        <div className="ml-auto w-12">
          <p className="sr-only">Feedback:</p>
          <Feedback data={round} />
        </div>
      </li>
    )
  })

  return <>{allGuessesEl}</>
}

export default PreviousAttempts