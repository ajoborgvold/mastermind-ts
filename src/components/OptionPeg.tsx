import { FC, useContext } from "react"
import { colorData } from "../data/colorData"
import { GameContext } from "../context/GameContext"

const OptionPeg: FC = () => {
  const { selectColor, selectedGuess } = useContext(GameContext)

  const colorEl = colorData.map((color, index) => {
    const selectedColorStyle =
      selectedGuess.color?.name === color.name ? "bg-stone-300 border-stone-300 dark:bg-amber-100 dark:text-stone-950 dark:border-amber-100" : ""
    
    return (
      <li key={index}>
        <button
          className={`flex gap-2 items-center p-2 hover:bg-stone-300 focus:bg-stone-300 dark:hover:bg-amber-100 dark:focus:bg-amber-100 dark:hover:text-stone-950 dark:focus:text-stone-950 border border-stone-50 dark:border-stone-700 hover:border-stone-950 focus:border-stone-950 rounded-md ${selectedColorStyle}`}
          onClick={() => selectColor(color.name)}
          aria-label={color.name}
          aria-pressed={selectedGuess.color?.name === color.name}
          aria-live="polite"
        >
          <div
            className={`${color.bgColor} ${color.textColor} w-7 h-7 lg:w-10 lg:h-10 flex justify-center items-center font-bold rounded-full border border-black`}
          >
            {color.name[0].toUpperCase()}
          </div>
          {color.name[0].toUpperCase() + color.name.slice(1)}
        </button>
      </li>
    )
  })

  return (
    <ul className="w-72 lg:w-full flex flex-wrap lg:flex-nowrap justify-between text-sm lg:text-base lg:gap-6">
      {colorEl}
    </ul>
  )
}

export default OptionPeg