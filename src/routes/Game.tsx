import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GameContext } from "../context/GameContext"
import Counter from "../components/Counter"
import ColorOptions from "../components/ColorOptions"
import GuessesContainer from "../components/GuessesContainer"
import ButtonLarge from "../components/ButtonLarge"
import LinkSmall from "../components/LinkSmall"
import Header from "../components/Header"
import ResultCard from "../components/ResultCard"

export default function Game(): JSX.Element {
  const { isGameOn, codeArray, hasPlayerWon, startNewGame, allGuessesArray } =
    useContext(GameContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!codeArray.length) {
      navigate("/")
    }
  }, [codeArray, navigate])

  return (
    <div className="w-full h-full flex-1 flex flex-col">
      <Header flexStyle="justify-between">
        <Counter />
        <LinkSmall textContent="How to play" path="/rules" />
      </Header>
      <main className="my-6 flex flex-col items-center gap-8 p-4 lg:p-6">
        {isGameOn ? (
          <ColorOptions />
        ) : hasPlayerWon ? (
          <ResultCard
            cardStyle="bg-teal-800"
            p1="Congratulations!"
            p2={`You cracked the code in ${allGuessesArray.length} attempts!`}
          />
        ) : (
          <ResultCard
            cardStyle="bg-rose-900"
            p1="Too bad!"
            p2="You failed to crack this code:"
          />
        )}
        {!isGameOn && (
          <ButtonLarge
            handleClick={startNewGame}
            textContent="Start new game"
          />
        )}
        <div className="flex flex-col items-center gap-10">
          <GuessesContainer />
        </div>
      </main>
    </div>
  )
}
