import { FC } from "react"
import OptionPeg from "./OptionPeg"

const ColorOptions: FC = () => {
  return (
    <div className="my-6 flex flex-col items-center gap-2 lg:gap-4 bg-stone-700 p-1 lg:py-2 lg:px-4 rounded-lg">
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide">Color options:</p>
      <OptionPeg />
    </div>
  )
}

export default ColorOptions