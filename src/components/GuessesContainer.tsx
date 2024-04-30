import { FC, useContext, useEffect, useRef } from "react"
import { GameContext } from "../context/GameContext"
import PreviousAttempts from "./PreviousAttempts"
import CurrentAttempt from "./CurrentAttempt"

const GuessesContainer: FC = () => {
  const {
    allGuessesArray,
    isGameOn,
    displayUserMessage,
  } = useContext(GameContext)

  const messageRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (displayUserMessage && messageRef.current) {
      messageRef.current.focus()
    }
  }, [displayUserMessage])

  return (
    <>
      {displayUserMessage && (
        <p
          className="absolute -top-10 py-1 px-4 border border-sky-950 dark:border-amber-100 rounded-md shadow-[0_0_2px_1px_rgb(8,47,73)] dark:shadow-[0_0_2px_1px_rgb(253,230,138)]"
          ref={messageRef}
        >
          Please select four colors.
        </p>
      )}
      <ul className="w-full flex flex-col gap-2">
        {isGameOn && <CurrentAttempt />}
        {allGuessesArray.length > 0 && <PreviousAttempts />}
      </ul>
    </>
  )
}

export default GuessesContainer
