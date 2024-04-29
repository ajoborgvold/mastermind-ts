import { FC, useContext, useEffect, useRef } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"

const ResultCard: FC = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { hasPlayerWon, codeArray, allGuessesArray } = useContext(GameContext)

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus()
    }
  }, [])

  const cardStyle = hasPlayerWon ? "bg-teal-800" : "bg-rose-900"
  const p1 = hasPlayerWon ? "Congratulations!" : "Too bad!"
  const p2 = hasPlayerWon ? `You cracked the code in ${allGuessesArray.length} attempts!` : "You failed to crack this code:"

  return (
    <div
      className={`my-6 flex flex-col items-center gap-3 sm:gap-4 ${cardStyle} text-stone-50 dark:text-amber-100  mb-4 px-4 sm:px-8 py-4 border-2 border-stone-950 shadow-[0_0_12px_3px_rgb(253,230,138)] rounded-md`}
      tabIndex={0}
      ref={cardRef}
    >
      <p className="text-xl sm:text-2xl tracking-wider">{p1}</p>
      <p className="text-base sm:text-xl tracking-wider">{p2}</p>
      <ColorPeg
        data={codeArray}
        pegStyle="shadow-[0_0_5px_3px_rgb(253,230,138)]"
      />
    </div>
  )
}

export default ResultCard