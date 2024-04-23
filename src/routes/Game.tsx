import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GameContext } from "../context/GameContext"
import Counter from "../components/Counter"
import ColorOptions from "../components/ColorOptions"
import GuessesContainer from "../components/GuessesContainer"
import ResultGuessPeg from "../components/ResultGuessPeg"
import ButtonLarge from "../components/ButtonLarge"

export default function Game(): JSX.Element {
  const { isGameOn, codeArray, hasPlayerWon, startNewGame } =
    useContext(GameContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!codeArray.length) {
      navigate("/")
    }
  }, [codeArray, navigate])

  return (
    <main className="w-full h-full flex-1 flex flex-col items-center gap-8 p-4 lg:p-6">
      <Counter />
      {isGameOn ? (
        <ColorOptions />
      ) : hasPlayerWon ? (
        <div className="flex flex-col items-center gap-3 sm:gap-4 bg-green-950 mb-4 px-4 sm:px-8 py-4 border border-stone-950 shadow-[0_0_30px] rounded-md">
          <p className="text-xl sm:text-2xl tracking-wider">Congratulations!</p>
          <p className="text-base sm:text-xl tracking-wider">
            You cracked the code!
          </p>
          <ResultGuessPeg data={codeArray} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 sm:gap-4 bg-rose-950 mb-4 px-4 sm:px-8 py-4 border border-stone-950 shadow-[0_0_30px] rounded-md">
          <p className="text-xl sm:text-2xl tracking-wider">Too bad!</p>
          <p className="text-base sm:text-xl tracking-wider">
            You failed to crack this code:
          </p>
          <ResultGuessPeg data={codeArray} />
        </div>
      )}
      {!isGameOn && (
        <ButtonLarge handleClick={startNewGame} textContent="Start new game" />
      )}
      <div className="flex flex-col items-center gap-10">
        <GuessesContainer />
      </div>
    </main>
  )
}
