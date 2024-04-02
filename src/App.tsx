import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./routes/Layout"
import Home from "./routes/Home"
import Game from "./routes/Game"
import Result from "./routes/Result"
import Rules from "./routes/Rules"
import Error from "./routes/Error"

export default function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/game",
          element: <Game />,
        },
        {
          path: "/result",
          element: <Result />,
        },
        {
          path: "/rules",
          element: <Rules />
        }
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ])

  return <RouterProvider router={router}/>
}
