import { FC } from "react";
import { ButtonLargeProps } from "../interfaces/interfaces";

const ButtonLarge: FC<ButtonLargeProps> = ({ handleClick, textContent }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-amber-400 text-amber-950 hover:bg-amber-800 focus:bg-amber-800 hover:text-amber-200 focus:text-amber-200 sm:text-2xl md:text-3xl font-semibold tracking-wider py-2 lg:py-4 px-4 lg:px-8 border-2 border-amber-400 rounded"
    >
      {textContent}
    </button>
  )
}

export default ButtonLarge