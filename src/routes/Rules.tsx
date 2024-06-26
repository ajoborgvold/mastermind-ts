import { FC, useContext, useEffect } from "react"
import { GameContext } from "../context/GameContext"
import FeedbackExplained from "../components/FeedbackExplained"
import LinkLarge from "../components/LinkLarge"
import LinkSmall from "../components/LinkSmall"
import Header from "../components/Header"

const Rules: FC = () => {
  const { codeArray, startNewGame, setDisplayUserMessage } = useContext(GameContext)

  useEffect(() => {
    document.title = "Mastermind | How to play"
  }, [])

  useEffect(() => {
    setDisplayUserMessage(false)
  }, [setDisplayUserMessage])

  return (
    <div className="flex-1 flex flex-col">
      <Header flexStyle="justify-end">
        {codeArray.length ? (
          <LinkSmall textContent="Back to game" path="/game" />
        ) : (
          <LinkSmall
            textContent="Start game"
            path="/game"
            handleClick={startNewGame}
          />
        )}
      </Header>
      <main className="flex flex-col items-center gap-8 mt-2 mb-8 p-4 lg:p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center tracking-wider">
          How to play a game of<br></br>
          <span className="inline-block mt-4 text-sky-800 dark:text-amber-300 font-bold uppercase tracking-widest">
            Mastermind
          </span>
        </h1>
        <section className="md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center gap-12 leading-loose">
          <div className="flex flex-col gap-4 bg-stone-50 dark:bg-stone-900 p-4 sm:p-6 rounded">
            <h2 className="text-sky-800 dark:text-amber-300 text-xl sm:text-2xl font-semibold">
              Game overview
            </h2>
            <p>
              When you start the game, a random code consisting of four colors will be generated. Your job is to crack this code within 12 attempts.
            </p>
            <p>
              There are six different colors in this game and the secret code
              can consist of any possible combination of these six colors. Be
              aware that the same color can occur multiple times in the code.
              Empty spaces are not allowed, so you can be sure that a code will
              always contain exactly four colors.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-stone-50 dark:bg-stone-900 p-4 sm:p-6 rounded">
            <h2 className="text-sky-800 dark:text-amber-300 text-xl sm:text-2xl font-semibold">
              Game mechanics
            </h2>
            <p>
              To select a color and add it to your current attempt, simply click
              the desired color and the desired position. It doesn't matter if
              you click the color or the position first – it works both ways.
            </p>
            <p>
              You can remove a single color from your current attempt by
              clicking it. You can also delete the entire attempt (before
              submitting it) by clicking the delete button (cross icon) to the
              right of your selected colors.
            </p>
            <p className="">
              To submit an attempt, click the submit button (check mark icon) to
              the right of the delete button. After submission, the latest
              attempt will appear right below the current one. To the right of
              the colors you selected, you'll see some feedback on the submitted
              attempt. Here's how it works:
            </p>
            <FeedbackExplained />
            <p>
              <span className="text-sky-800 dark:text-amber-300 font-bold tracking-wider">
                Important:
              </span>{" "}
              The order of the feedback pegs does not correspond to the order of
              the colors in your guess. This means that you cannot assume
              anything about which colors in your guess received what kind of
              feedback based on the order of the feedback pegs.
            </p>
            <p>
              For instance, if the first feedback peg says "Position and color
              correct", this does not automatically mean that the first color in
              your guess is a correct color at a correct position. It could be
              the case, but you don't know – cause that would make it too easy
              to crack the code, right?
            </p>
          </div>
          <LinkLarge
            textContent="Start new game"
            path="/game"
            handleClick={startNewGame}
          />
        </section>
      </main>
    </div>
  )
}

export default Rules