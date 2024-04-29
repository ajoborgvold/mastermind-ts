import { FC } from "react"
import { ColorPegProps } from "../interfaces/interfaces"

const ColorPeg: FC<ColorPegProps> = ({ data, pegStyle }) => {
  const colorEl = data.map((color, index) => {
    return (
      <li
        key={index}
        className="flex items-center p-1 sm:p-2 rounded-sm"
        aria-label={`Position ${index + 1}: ${color.name}.`}
      >
        <div
          className={`${color.bgColor} ${color.textColor} w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black ${pegStyle}`}
        >
          {color.name[0].toUpperCase()}
        </div>
      </li>
    )
  })

  return <ul className="flex gap-1 sm:gap-2">{colorEl}</ul>
}

export default ColorPeg