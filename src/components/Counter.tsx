import { FC, useContext } from "react"
import { GameContext } from "../context/GameContext"

const Counter: FC = () => {
  const { allGuessesArray, isGameOn } = useContext(GameContext)

  return (
    <div
      className="self-start bg-stone-50 text-sky-950 dark:bg-stone-700 dark:text-amber-200 py-2 px-4 rounded-lg shadow-[0_0_3px_1px]"
      tabIndex={0}
    >
      <p className="lg:text-xl tracking-wide">
        {!isGameOn
          ? `Attempts used: ${allGuessesArray.length}`
          : `Attempts left: ${12 - allGuessesArray.length}`}
      </p>
    </div>
  )
}

export default Counter