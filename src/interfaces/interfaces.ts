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
  selectedGuess: {color: (ColorData | null), position: (number | null)}
  // selectedColor: ColorData
  deleteLatestGuess: () => void
  handlePegClick: (colorName: string, index: number) => void
  // selectedPosition: (number | null)
  checkLatestGuess: () => void
  latestGuessArray: ColorData[]
  allGuessesArray: ColorData[][]
  isGameOver: boolean
  hasPlayerWon: boolean
  startNewGame: () => void
}

export type { ColorData, ContextData }
