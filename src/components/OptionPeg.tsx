import { FC, useContext } from "react"
import { colorData } from "../data/colorData"
import { GameContext } from "../context/GameContext"

const OptionPeg: FC = () => {
  const { selectColor, selectedGuess } = useContext(GameContext)

  const colorEl = colorData.map((color, index) => {
    const selectedColorStyle =
      selectedGuess.color?.name === color.name ? "bg-amber-100 text-stone-950" : ""
    
    return (
      <li key={index}>
        <button
          className={`flex gap-2 items-center p-2 hover:bg-amber-100 focus:bg-amber-100 hover:text-stone-950 focus:text-stone-950 rounded-md ${selectedColorStyle}`}
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