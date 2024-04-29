import { Link } from "react-router-dom"
import { LinkProps } from "../interfaces/interfaces"
import { FC } from "react"

const LinkLarge: FC<LinkProps> = ({ textContent, path, handleClick }) => {
  return (
    <Link
      className="bg-teal-800 text-stone-50 dark:bg-amber-400 dark:text-amber-950 hover:bg-stone-50 hover:text-teal-800 focus:bg-stone-50 focus:text-teal-800 dark:hover:bg-amber-800 dark:focus:bg-amber-800 dark:hover:text-amber-200 dark:focus:text-amber-200 sm:text-2xl md:text-3xl font-semibold tracking-wider py-2 lg:py-4 px-4 lg:px-8 border-2 border-teal-800 dark:border-amber-400 rounded"
      onClick={handleClick}
      to={path}
    >
      {textContent}
    </Link>
  )
}

export default LinkLarge
