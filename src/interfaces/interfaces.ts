import { Dispatch, MouseEventHandler, SetStateAction, ReactNode } from "react"

interface ColorData {
  name: string
  bgColor: string
  textColor: string
  feedback?: {
    code: number
    name: string
  }
}

interface ContextData {
  isGameOn: boolean
  setIsGameOn: Dispatch<SetStateAction<boolean>>
  codeArray: ColorData[]
  selectColor: (colorName: string) => void
  selectedGuess: {color: (ColorData | null), position: (number | null)}
  deleteLatestGuess: () => void
  handlePegClick: (colorName: string, index: number) => void
  checkLatestGuess: () => void
  latestGuessArray: ColorData[]
  allGuessesArray: ColorData[][]
  hasPlayerWon: boolean
  startNewGame: () => void
}

interface ButtonLargeProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  textContent: string
}

interface ButtonSmallProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  aria: string
  children: ReactNode
}

interface ButtonPegProps {
  data: ColorData
  index: number
}

interface LinkProps {
  textContent: string
  path: string
  handleClick?: MouseEventHandler<HTMLAnchorElement>
}

export type { ColorData, ContextData, ButtonLargeProps, ButtonSmallProps, ButtonPegProps, LinkProps }
