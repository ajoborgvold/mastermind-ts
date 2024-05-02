import { Link } from "react-router-dom"
import { LinkProps } from "../interfaces/interfaces"
import { FC } from "react"

const LinkSmall: FC<LinkProps> = ({ textContent, path, handleClick }) => {
  return (
    <Link
      className="bg-sky-800 text-stone-50 dark:bg-amber-400 dark:text-stone-950 hover:bg-stone-50 hover:text-sky-800 focus:bg-stone-50 focus:text-sky-800 dark:hover:bg-stone-950 dark:focus:bg-stone-950 dark:hover:text-amber-400 dark:focus:text-amber-400 sm:text-lg md:text-xl tracking-wider py-1 px-2 border-2 border-sky-800 dark:border-amber-400 rounded"
      to={path}
      onClick={handleClick}
    >
      {textContent}
    </Link>
  )
}

export default LinkSmall
