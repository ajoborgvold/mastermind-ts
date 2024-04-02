import { useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import Counter from "../components/Counter"
import ColorOptions from "../components/ColorOptions"
import GuessesContainer from "../components/GuessesContainer"
import { useNavigate } from "react-router-dom"

export default function Game(): JSX.Element {
  const { isGameOn, isGameOver } = useContext(GameContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isGameOn) {
      navigate("/")
    }
    if (isGameOver) {
      navigate("/result")
    }
  }, [isGameOn, isGameOver, navigate])

  return (
    <main className="w-full h-full flex-1 flex flex-col items-center gap-8 p-4 lg:p-6">
      <Counter />
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col items-center gap-10">
        <ColorOptions />
        <GuessesContainer />
      </div>
    </main>
  )
}
