import { Link } from "react-router-dom"
import { LinkProps } from "../interfaces/interfaces"
import { FC } from "react"

const LinkLarge: FC<LinkProps> = ({ textContent, path, handleClick }) => {
  return (
    <Link
      className="bg-sky-800 text-stone-50 dark:bg-amber-400 dark:text-stone-950 hover:bg-stone-50 hover:text-sky-800 focus:bg-stone-50 focus:text-sky-800 dark:hover:bg-stone-950 dark:focus:bg-stone-950 dark:hover:text-amber-400 dark:focus:text-amber-400 sm:text-2xl md:text-3xl font-semibold tracking-wider py-2 lg:py-4 px-4 lg:px-8 border-2 border-sky-800 dark:border-amber-400 rounded"
      onClick={handleClick}
      to={path}
    >
      {textContent}
    </Link>
  )
}

export default LinkLarge
