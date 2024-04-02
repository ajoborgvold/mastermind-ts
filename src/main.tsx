import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { GameContextProvider } from "./context/GameContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameContextProvider>
      <div className="h-full min-h-screen flex flex-col justify-center bg-stone-950 text-stone-50">
        <App />
      </div>
    </GameContextProvider>
  </React.StrictMode>
)
