import { ReactNode, createContext, useEffect, useState } from "react"
import { colorData, emptyPeg } from "../data/colorData"
import { ColorData, ContextData } from "../interfaces/interfaces"

const GameContext = createContext<ContextData>({
  isGameOn: false,
  setIsGameOn: () => {},
  codeArray: [],
  selectColor: () => {},
  deleteLatestGuess: () => {},
  handlePegClick: () => {},
  checkLatestGuess: () => {},
  latestGuessArray: [],
  allGuessesArray: [],
  isGameOver: false,
  hasPlayerWon: false,
  startNewGame: () => {},
})

function GameContextProvider({ children }: { children: ReactNode }) {
  const [isGameOn, setIsGameOn] = useState(false)
  const [codeArray, setCodeArray] = useState<ColorData[]>([])
  const [latestGuessArray, setLatestGuessArray] = useState<ColorData[]>(
    Array(4).fill(emptyPeg)
  )
  const [allGuessesArray, setAllGuessesArray] = useState<ColorData[][]>([])
  const [hasPlayerWon, setHasPlayerWon] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (isGameOn) {
      const randomColorArray = []
      for (let i = 0; i < 4; i++) {
        const num = Math.floor(Math.random() * 6)
        const color = colorData[num]
        if (color) {
          randomColorArray.push(color)
        }
      }

      setCodeArray(randomColorArray)
    }
  }, [isGameOn])

  useEffect(() => {
    if (allGuessesArray.length) {
      const isCodeCracked = allGuessesArray[0].every(
        (guess) => guess.feedback?.name === "index match"
      )

      if (allGuessesArray.length === 12 && !isCodeCracked) {
        setHasPlayerWon(false)
        setIsGameOver(true)
        setIsGameOn(false)
      } else if (allGuessesArray.length <= 12 && isCodeCracked) {
        setHasPlayerWon(true)
        setIsGameOver(true)
        setIsGameOn(false)
      }
    }
  }, [allGuessesArray])

  function selectColor(colorName: string) {
    const targetColor = colorData.find((color) => color.name === colorName)
    const allColorsSelected = latestGuessArray.every(
      (color) => color.name !== "?"
    )

    if (targetColor && !allColorsSelected) {
      const firstNoValueIndex = latestGuessArray.findIndex(
        (color) => color.name === "?"
      )

      const updatedGuessArray = [...latestGuessArray]
      updatedGuessArray[firstNoValueIndex] = targetColor
      setLatestGuessArray(updatedGuessArray)
    }
  }

  function deleteLatestGuess() {
    if (latestGuessArray.length) {
      const updatedGuessArray = [...latestGuessArray]
      const lastNonEmptyIndex = findLastNonEmptyIndex(updatedGuessArray)

      if (lastNonEmptyIndex !== -1) {
        updatedGuessArray[lastNonEmptyIndex] = emptyPeg
        setLatestGuessArray(updatedGuessArray)
      }
    }
  }

  function findLastNonEmptyIndex(array: ColorData[]) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].name !== "?") {
        return i
      }
    }
    return -1
  }

  function handlePegClick(index: number) {
    const updatedGuessArray = [...latestGuessArray]
    updatedGuessArray[index] = emptyPeg
    setLatestGuessArray(updatedGuessArray)
  }

  function checkLatestGuess() {
    if (latestGuessArray.length === 4) {
      const updatedGuessArray = [...latestGuessArray]
      const updatedCodeArray = [...codeArray]

      for (let i = 0; i < updatedGuessArray.length; i++) {
        if (
          !updatedGuessArray[i].feedback &&
          updatedGuessArray[i].name === codeArray[i].name
        ) {
          updatedGuessArray[i] = {
            ...updatedGuessArray[i],
            feedback: { name: "index match", code: 1 },
          }
          updatedCodeArray[i] = {
            ...updatedCodeArray[i],
            feedback: { name: "matched", code: 0 },
          }
        }
      }

      for (let i = 0; i < updatedGuessArray.length; i++) {
        if (!updatedGuessArray[i].feedback) {
          const colorMatchIndex = updatedCodeArray.findIndex(
            (color) =>
              !color.feedback && color.name === updatedGuessArray[i].name
          )

          if (colorMatchIndex !== -1) {
            updatedGuessArray[i] = {
              ...updatedGuessArray[i],
              feedback: { name: "color match", code: 2 },
            }
            updatedCodeArray[colorMatchIndex] = {
              ...updatedCodeArray[colorMatchIndex],
              feedback: { name: "matched", code: 0 },
            }
          } else {
            updatedGuessArray[i] = {
              ...updatedGuessArray[i],
              feedback: { name: "no match", code: 3 },
            }
          }
        }
      }

      setAllGuessesArray((prevAllGuessesArray) => [
        updatedGuessArray,
        ...prevAllGuessesArray,
      ])
      setLatestGuessArray(Array(4).fill(emptyPeg))
    }
  }

  function startNewGame() {
    setHasPlayerWon(false)
    setIsGameOver(false)
    setAllGuessesArray([])
    setIsGameOn(true)
  }

  return (
    <GameContext.Provider
      value={{
        isGameOn,
        setIsGameOn,
        codeArray,
        selectColor,
        deleteLatestGuess,
        handlePegClick,
        checkLatestGuess,
        latestGuessArray,
        allGuessesArray,
        isGameOver,
        hasPlayerWon,
        startNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
