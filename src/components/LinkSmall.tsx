import { Link } from "react-router-dom"
import { LinkProps } from "../interfaces/interfaces"

export default function LinkSmall({
  textContent,
  path,
  handleClick
}: LinkProps): JSX.Element {
  return (
    <Link
      className="bg-amber-400 text-amber-950 hover:bg-amber-800 focus:bg-amber-800 hover:text-amber-200 focus:text-amber-200 sm:text-lg md:text-xl tracking-wider py-1 px-2 border-2 border-amber-400 rounded"
      to={path}
      onClick={handleClick}
    >
      {textContent}
    </Link>
  )
}
