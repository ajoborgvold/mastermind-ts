import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { ColorData } from "../interfaces/interfaces"

export default function ButtonPeg({
  data,
  index,
}: {
  data: ColorData
  index: number
}): JSX.Element {
  const { handlePegClick } = useContext(GameContext)

  return (
    <button
      key={index}
      className="flex items-center p-1 sm:p-2 rounded-sm hover:bg-stone-300"
      aria-label={data.name ? data.name : "?"}
      onClick={() => handlePegClick(index)}
    >
      <div
        className={`${data.bgColor} ${data.textColor} w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black`}
      >
        {data.name ? data.name[0].toUpperCase() : "?"}
      </div>
    </button>
  )
}
