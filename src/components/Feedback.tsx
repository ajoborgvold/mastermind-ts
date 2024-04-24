import { ColorData } from "../interfaces/interfaces"

export default function Feedback({ data }: { data: ColorData[]}): JSX.Element {
  const sortedData = [...data].sort((a, b) => (a.feedback?.code ?? 0) - (b.feedback?.code ?? 0))

  const feedbackEl = sortedData.map((item, index) => {
    const textContent =
      item.feedback?.code === 1 ? "P" : item.feedback?.code === 2 ? "C" : "N"

    const style =
      item.feedback?.code === 1
        ? "bg-black text-white border-stone-950"
        : item.feedback?.code === 2
        ? "bg-white text-black border-stone-950"
        : "text-amber-100 border-amber-100"

    const aria =
      item.feedback?.code === 1
        ? "Position and color correct"
        : item.feedback?.code === 2
        ? "Color correct, position not correct"
        : "No color match"

    return (
      <li
        key={index}
        className={`h-4 w-4 sm:h-5 sm:w-5 text-xs sm:text-sm flex justify-center items-center border rounded-full ${style}`}
        aria-label={`${aria}.`}
      >
        {textContent}
      </li>
    )
  })

  return <ul className="grid grid-cols-2 gap-y-1 sm:gap-1">{feedbackEl}</ul>
}
