import { FC } from "react"
import { ButtonSmallProps } from "../interfaces/interfaces"

const ButtonSmall: FC<ButtonSmallProps> = ({ handleClick, aria, children }) => {
  return (
    <button
      className="hover:bg-amber-100 hover:text-stone-950 focus:bg-amber-100 focus:text-stone-950 sm:text-xl font-semibold py-1 px-3 sm:py-2 md:px-4 lg:px-5 border border-amber-100 rounded-lg"
      onClick={handleClick}
      aria-label={aria}
    >
      {children}
    </button>
  )
}

export default ButtonSmall