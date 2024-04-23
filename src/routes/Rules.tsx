import { useContext } from "react";
import FeedbackExplained from "../components/FeedbackExplained";
import NavigationLink from "../components/NavigationLink";
import { GameContext } from "../context/GameContext";

export default function Rules(): JSX.Element {
  const { startNewGame } = useContext(GameContext)
  
  return (
    <main className="w-full h-full flex-1 flex flex-col items-center gap-8 p-4 lg:p-6">
      <FeedbackExplained />
      <NavigationLink
        textContent="Start game"
        path="/game"
        handleClick={startNewGame}
      />
    </main>
  )
}