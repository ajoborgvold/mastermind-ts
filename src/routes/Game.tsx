import { FC, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GameContext } from "../context/GameContext"
import Counter from "../components/Counter"
import ColorOptions from "../components/ColorOptions"
import GuessesContainer from "../components/GuessesContainer"
import ButtonLarge from "../components/ButtonLarge"
import LinkSmall from "../components/LinkSmall"
import Header from "../components/Header"
import ResultCard from "../components/ResultCard"

const Game: FC = () => {
  const { isGameOn, codeArray, startNewGame } =
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
        ) : (
          <>
            <ResultCard />
            <ButtonLarge
              handleClick={startNewGame}
              textContent="Start new game"
            />
          </>
        )}
        <div className="relative flex flex-col items-center gap-10">
          <GuessesContainer />
        </div>
      </main>
    </div>
  )
}

export default Game