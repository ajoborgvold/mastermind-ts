import { Dispatch, SetStateAction } from "react"

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
  deleteLatestGuess: () => void
  handlePegClick: (index: number) => void
  checkLatestGuess: () => void
  latestGuessArray: ColorData[]
  allGuessesArray: ColorData[][]
  isGameOver: boolean
  hasPlayerWon: boolean
  startNewGame: () => void
}

export type { ColorData, ContextData }
