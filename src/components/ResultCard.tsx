import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"
import { ResultCardProps } from "../interfaces/interfaces"


export default function ResultCard({cardStyle, p1, p2}: ResultCardProps): JSX.Element {
  const { codeArray } = useContext(GameContext)

  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-4 ${cardStyle} mb-4 px-4 sm:px-8 py-4 border-2 border-stone-950 shadow-[0_0_12px_3px_rgb(253,230,138)] rounded-md`}>
      <p className="text-xl sm:text-2xl tracking-wider">{p1}</p>
      <p className="text-base sm:text-xl tracking-wider">
        {p2}
      </p>
      <ColorPeg
        data={codeArray}
        pegStyle="shadow-[0_0_5px_3px_rgb(253,230,138)]"
      />
    </div>
  )
}