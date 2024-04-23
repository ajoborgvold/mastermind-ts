import { ButtonLargeProps } from "../interfaces/interfaces";

export default function ButtonLarge({ handleClick, textContent}: ButtonLargeProps): JSX.Element {

  return (
    <button
      onClick={handleClick}
      className="bg-cyan-900 text-cyan-50 hover:bg-cyan-50 focus:bg-cyan-50 hover:text-cyan-900 focus:text-cyan-900 sm:text-2xl md:text-3xl font-semibold tracking-wider py-2 lg:py-4 px-4 lg:px-8 rounded"
    >
      {textContent}
    </button>
  )
}
