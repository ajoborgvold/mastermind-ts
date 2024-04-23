import { ColorData } from "../interfaces/interfaces"

export default function ResultGuessPeg({
  data,
}: {
  data: ColorData[]
}): JSX.Element {
  const colorEl = data.map((color, index) => {
    return (
      <div
        key={index}
        className="flex items-center p-1 sm:p-2 rounded-sm"
        aria-label={color.name ? color.name : "?"}
      >
        <div
          className={`${color.bgColor} ${color.textColor} w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black shadow-[0_0_10px_rgb(250,250,250)]`}
        >
          {color.name ? color.name[0].toUpperCase() : "?"}
        </div>
      </div>
    )
  })

  return <div className="flex gap-1 sm:gap-2">{colorEl}</div>
}
