import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import FeedbackExplained from "../components/FeedbackExplained"
import LinkLarge from "../components/LinkLarge"
import LinkSmall from "../components/LinkSmall"
import Header from "../components/Header"

export default function Rules(): JSX.Element {
  const { codeArray, startNewGame } = useContext(GameContext)

  return (
    <div className="flex-1 flex flex-col">
      {codeArray.length && (
        <Header flexStyle="justify-end">
          <LinkSmall textContent="Back to game" path="/game" />
        </Header>
      )}
      <main className="flex flex-col items-center gap-8 mt-2 mb-8 p-4 lg:p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold tracking-wider">
          How to play a game of<br></br>
          <span className="inline-block mt-4 text-amber-300 uppercase tracking-widest">
            Mastermind
          </span>
        </h1>
        <section className="md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center gap-12 leading-loose">
          <div className="flex flex-col gap-4 bg-stone-900 p-4 sm:p-6 rounded">
            <h2 className="text-amber-300 text-xl sm:text-2xl">Overview</h2>
            <p>
              When you start the game, the computer will generate a random code
              consisting of four colors, and your job is to crack this code.
              You'll get 12 attempts to do so.
            </p>
            <p>
              There are six different colors in this game and the secret code
              can consist of any possible combination of these six colors. Be
              aware that the same color can occur multiple times in the code.
              Empty spaces are not allowed and so you can be sure that a code
              will always contain exactly four colors.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-stone-900 p-4 sm:p-6 rounded">
            <h2 className="text-amber-300 text-xl sm:text-2xl">
              The technical stuff
            </h2>
            <p>
              To select a color and add it to your current attempt, just click
              the desired color and the desired position. It doesn't matter if
              you click the color or the position first – it works both ways.
            </p>
            <p>
              You can remove a single color from your current attempt by
              clicking it. You can also delete the entire attempt before
              submitting it by clicking the delete button to the right of your
              selected colors.
            </p>
            <p>
              To submit an attempt, click the submit button to the right of the
              delete button. After submission, the latest attempt will appear
              right below the current. To the right of the colors you selected,
              you'll see some feedback on the submitted attempt. Here's how it
              works:
            </p>
            <FeedbackExplained />
            <p>
              <span className="text-amber-300 font-semibold tracking-wider">
                Important:
              </span>{" "}
              The order of the feedback pegs does not correspond with the order
              of the colors in your guess. This means that you cannot asume
              anything about which colors in your guess that got what kind of
              feedback based on the order of the feedback pegs.
            </p>
            <p>
              For instance, if the first feedback peg says "Position and color
              correct", this does not automatically mean that the first color in
              your guess is a correct color at a correct position. It could be
              the case, but you don't know. Cause that would make it way too
              easy to crack the code, right?
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
