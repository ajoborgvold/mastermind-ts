import { FC } from "react"
import { ButtonSmallProps } from "../interfaces/interfaces"

const ButtonSmall: FC<ButtonSmallProps> = ({ handleClick, aria, children }) => {
  return (
    <button
      className="hover:bg-stone-300 focus:bg-stone-300 dark:hover:bg-amber-100 dark:hover:text-stone-950 dark:focus:bg-amber-100 dark:focus:text-stone-950 sm:text-xl font-semibold py-1 px-3 sm:py-2 md:px-4 lg:px-5 border border-teal-950 dark:border-amber-100 rounded-lg"
      onClick={handleClick}
      aria-label={aria}
    >
      {children}
    </button>
  )
}

export default ButtonSmall