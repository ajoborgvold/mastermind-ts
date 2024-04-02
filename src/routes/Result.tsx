import { useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import ResultGuessPeg from "../components/ResultGuessPeg"
import NavigationLink from "../components/NavigationLink"
import { useNavigate } from "react-router-dom"

export default function Result(): JSX.Element {
  const {
    isGameOn,
    isGameOver,
    codeArray,
    hasPlayerWon,
    allGuessesArray,
    startNewGame,
  } = useContext(GameContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isGameOn) {
      navigate("/")
    }
  }, [isGameOn, navigate])

  return isGameOver ? (
    <main className="flex-1 w-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl">You {hasPlayerWon ? "won!" : "lost!"}</h1>
      <div className="flex flex-col items-center gap-2 bg-stone-700 py-2 px-4 rounded-lg">
        <p>Secret color code:</p>
        <ResultGuessPeg data={codeArray} />
      </div>
      {hasPlayerWon ? (
        <p>You cracked the code in {allGuessesArray.length} attempts</p>
      ) : (
        <div className="flex flex-col items-center gap-2 bg-stone-700 py-2 px-4 rounded-lg">
          <p>Your last guess was:</p>
          <ResultGuessPeg data={allGuessesArray[0]} />
        </div>
      )}
      <NavigationLink
        textContent="Play again"
        path="/game"
        handleClick={startNewGame}
      />
    </main>
  ) : (
    <>{null}</>
  )
}
