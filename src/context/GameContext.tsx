import { ReactNode, createContext, useEffect, useState } from "react"
import { colorData, emptyPeg } from "../data/colorData"
import { ColorData, ContextData } from "../interfaces/interfaces"

const defaultContext: ContextData = {
  isGameOn: false,
  codeArray: [],
  selectColor: () => {},
  selectedGuess: { color: null, position: null },
  deleteLatestGuess: () => {},
  handlePegClick: () => {},
  checkLatestGuess: () => {},
  latestGuessArray: [],
  allGuessesArray: [],
  hasPlayerWon: false,
  startNewGame: () => { },
  displayUserMessage: false,
  setDisplayUserMessage: () => {}
}

const GameContext = createContext<ContextData>(defaultContext)

function GameContextProvider({ children }: { children: ReactNode }) {
  const initialGuessArray = Array(4).fill(emptyPeg)

  const [isGameOn, setIsGameOn] = useState(false)
  const [codeArray, setCodeArray] = useState<ColorData[]>([])
  const [latestGuessArray, setLatestGuessArray] =
    useState<ColorData[]>(initialGuessArray)
  const [selectedGuess, setSelectedGuess] = useState<{
    color: ColorData | null
    position: number | null
  }>({ color: null, position: null })
  const [allGuessesArray, setAllGuessesArray] = useState<ColorData[][]>([])
  const [hasPlayerWon, setHasPlayerWon] = useState(false)
  const [displayUserMessage, setDisplayUserMessage] = useState(false)
  
  useEffect(() => {
    const mediaQuery = "(prefers-color-scheme: dark)"
    const mql = window.matchMedia(mediaQuery)
    
    if (mql.matches) {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#0c0a09")
      } else {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#e7e5e4")
    }
  }, [])

  useEffect(() => {
    if (selectedGuess.color !== null && selectedGuess.position !== null) {
      setLatestGuessArray(prevArray => {
        const updatedArray = [...prevArray]
        if (selectedGuess.color !== null && selectedGuess.position !== null) {
          updatedArray[selectedGuess.position] = selectedGuess.color
        }
        return updatedArray
      })

      setSelectedGuess({ color: null, position: null })
    }
  }, [selectedGuess])

  useEffect(() => {
    if (allGuessesArray.length) {
      const isCodeCracked = allGuessesArray[0].every(
        (guess) => guess.feedback?.name === "index match"
      )

      if (allGuessesArray.length === 12 && !isCodeCracked) {
        setIsGameOn(false)
        setHasPlayerWon(false)
      } else if (allGuessesArray.length <= 12 && isCodeCracked) {
        setIsGameOn(false)
        setHasPlayerWon(true)
      }
    }
  }, [allGuessesArray])

  function getSecretColorCode() {
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

  function selectColor(colorName: string) {
    setDisplayUserMessage(false)

    const targetColor = colorData.find((color) => color.name === colorName)
    const allColorsSelected = latestGuessArray.every(
      (color) => color.name !== "?"
    )

    if (targetColor && !allColorsSelected) {
      setSelectedGuess((prev) => ({ ...prev, color: targetColor }))
    }
  }

  function handlePegClick(colorName: string, index: number) {
    setDisplayUserMessage(false)

    if (colorName !== "?") {
      setLatestGuessArray(prevArray => {
        const updatedArray = [...prevArray]
        updatedArray[index] = emptyPeg
        return updatedArray
      })
    } else if (selectedGuess.position === index) {
      setSelectedGuess(prev => ({...prev, position: -1}))
    } else {
      setSelectedGuess((prev) => ({ ...prev, position: index }))
    }
  }

  function deleteLatestGuess() {
    setDisplayUserMessage(false)
    setLatestGuessArray(initialGuessArray)
  }

  function checkLatestGuess() {
    const isAttemptComplete = latestGuessArray.every(color => color.name !== "?")

    if (!isAttemptComplete) {
      setDisplayUserMessage(true)
    }

    if (isAttemptComplete) {
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
      setLatestGuessArray(initialGuessArray)
    }
  }

  function startNewGame() {
    setHasPlayerWon(false)
    setAllGuessesArray([])
    setIsGameOn(true)
    getSecretColorCode()
  }

  return (
    <GameContext.Provider
      value={{
        isGameOn,
        codeArray,
        selectColor,
        selectedGuess,
        deleteLatestGuess,
        handlePegClick,
        checkLatestGuess,
        latestGuessArray,
        allGuessesArray,
        hasPlayerWon,
        startNewGame,
        displayUserMessage,
        setDisplayUserMessage
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
