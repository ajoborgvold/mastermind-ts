export default function FeedbackExplained(): JSX.Element {
  return (
    <div className="self-center flex flex-col gap-1 bg-stone-700 py-4 px-6 rounded-lg">
      <p className="mb-2 font-semibold tracking-wide">Feedback explained:</p>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center bg-black text-white text-xs lg:text-sm border border-stone-950 rounded-full">
          P
        </div>
        <p>= Position & color correct</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center bg-white text-black text-xs lg:text-sm border border-stone-950 rounded-full">
          C
        </div>
        <p>= Color correct, position incorrect</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center text-white text-xs lg:text-sm border border-stone-50 rounded-full">
          N
        </div>
        <p>= No color match</p>
      </div>
    </div>
  )
}
