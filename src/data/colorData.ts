import { ColorData } from "../interfaces/interfaces"

const colorData: ColorData[] = [
  {
    name: "red",
    bgColor: "bg-red-800",
    textColor: "text-white",
  },
  {
    name: "blue",
    bgColor: "bg-blue-800",
    textColor: "text-white",
  },
  {
    name: "green",
    bgColor: "bg-green-700",
    textColor: "text-white",
  },
  {
    name: "yellow",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  {
    name: "white",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "black",
    bgColor: "bg-black",
    textColor: "text-white",
  },
]

const emptyPeg: ColorData = {
  name: "?",
  bgColor: "bg-stone-50 dark:bg-stone-700",
  textColor: "text-sky-950 dark:text-amber-100",
}

export { colorData, emptyPeg }
