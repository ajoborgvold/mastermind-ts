import { FC, useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "../context/GameContext"
import { ButtonPegProps } from "../interfaces/interfaces"

const ButtonPeg: FC<ButtonPegProps> = ({ data, index }) => {
  const { handlePegClick, selectedGuess, allGuessesArray } = useContext(GameContext)
  const [ariaLabel, setAriaLabel] = useState<string>("")
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setAriaLabel(
      data.name === "?"
      ? `Position ${index + 1}: No color yet.`
      : `Position ${index + 1}: ${data.name}.`
    )
  }, [data, index, selectedGuess])

  useEffect(() => {
    if (allGuessesArray.length !== 0 && ref.current) {
      ref.current.focus()
    }
  }, [allGuessesArray])

  const selectedPositionStyle = selectedGuess.position === index ? "bg-stone-300 dark:bg-amber-100" : ""
  const divStyle = data.name !== "?" ? "border-black" : "border-sky-950 dark:border-amber-100"

  return (
    <li key={index}>
      <button
        className={`flex items-center p-1 sm:p-2 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-50 dark:hover:bg-amber-100 dark:focus:bg-amber-100 ${selectedPositionStyle} border-x border-stone-50 dark:border-stone-700 hover:border-stone-500 dark:hover:border-amber-100`}
        onClick={() => handlePegClick(data.name, index)}
        aria-label={ariaLabel}
        aria-pressed={selectedGuess.position === index}
        aria-live="polite"
        ref={index === 0 ? ref : null}
      >
        <div
          className={`${data.bgColor} ${data.textColor} w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border ${divStyle}`}
        >
          {data.name ? data.name[0].toUpperCase() : "?"}
        </div>
      </button>
    </li>
  )
}

export default ButtonPeg