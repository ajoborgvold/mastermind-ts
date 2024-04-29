import { FC, useContext } from "react"
import { GameContext } from "../context/GameContext"
import ButtonSmall from "./ButtonSmall"
import ButtonPeg from "./ButtonPeg"
import { FaCheck, FaDeleteLeft } from "react-icons/fa6"

const CurrentAttempt: FC = () => {
  const {
    allGuessesArray,
    latestGuessArray,
    deleteLatestGuess,
    checkLatestGuess,
  } = useContext(GameContext)

  const latestGuessEl = (
    <li className="h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-50 dark:bg-stone-700 px-2 lg:px-6 rounded-md">
      <p
        className="w-6 lg:text-2xl"
        aria-label={`Current attempt. Attempt number ${
          allGuessesArray.length + 1
        } of 12.`}
      >
        {allGuessesArray.length + 1}
      </p>
      <div>
        <ul className="flex gap-1 sm:gap-2">
          {latestGuessArray.map((guess, index) => (
            <ButtonPeg key={index} data={guess} index={index} />
          ))}
        </ul>
      </div>
      <div className="ml-auto flex gap-5 sm:gap-4">
        <ButtonSmall
          handleClick={deleteLatestGuess}
          aria="Delete all colors in current guess."
        >
          <FaDeleteLeft />
        </ButtonSmall>
        <ButtonSmall
          handleClick={checkLatestGuess}
          aria="Submit your guess.">
          <FaCheck />
        </ButtonSmall>
      </div>
    </li>
  )

  return <>{latestGuessEl}</>
}

export default CurrentAttempt
