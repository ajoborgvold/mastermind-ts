import { Link } from "react-router-dom"
import { LinkProps } from "../interfaces/interfaces"
import { FC } from "react"

const LinkSmall: FC<LinkProps> = ({ textContent, path, handleClick }) => {
  return (
    <Link
      className="bg-teal-800 text-stone-50 dark:bg-amber-400 dark:text-amber-950 hover:bg-stone-50 hover:text-teal-800 focus:bg-stone-50 focus:text-teal-800 dark:hover:bg-amber-800 dark:focus:bg-amber-800 dark:hover:text-amber-200 dark:focus:text-amber-200 sm:text-lg md:text-xl tracking-wider py-1 px-2 border-2 border-teal-800 dark:border-amber-400 rounded"
      to={path}
      onClick={handleClick}
    >
      {textContent}
    </Link>
  )
}

export default LinkSmall
