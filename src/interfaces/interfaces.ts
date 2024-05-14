import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react"

export interface ColorData {
  name: string
  bgColor: string
  textColor: string
  feedback?: {
    code: number
    name: string
  }
}

export interface ContextData {
  isGameOn: boolean
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
  displayUserMessage: boolean
  setDisplayUserMessage: Dispatch<SetStateAction<boolean>>
}

export interface HeaderProps {
  children: ReactNode
  flexStyle: string
}

export interface ColorPegProps {
  data: ColorData[]
  listStyle?: string
  pegStyle?: string
}

export interface ButtonLargeProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  textContent: string
}

export interface ButtonSmallProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  aria: string
  children: ReactNode
}

export interface ButtonPegProps {
  data: ColorData
  index: number
}

export interface LinkProps {
  textContent: string
  path: string
  handleClick?: MouseEventHandler<HTMLAnchorElement>
}

export interface FeedbackProps {
  data: ColorData[]
}