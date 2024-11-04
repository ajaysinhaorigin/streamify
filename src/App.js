import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { createBrowserRouter } from "react-router-dom"
import Body from "./components/body/Body"
import Header from "./components/head/Header"
import MainContainer from "./components/body/MainContainer"
import WatchVideo from "./pages/WatchVideo"
import SearchResults from "./pages/SearchResults"
import Shorts from "./pages/Shorts"
import TrendingVideos from "./pages/TrendingVideos"
import Shopping from "./pages/Shopping"
import Music from "./pages/Music"
import Films from "./pages/Films"
import Live from "./pages/Live"
import Gaming from "./pages/Gaming"
import News from "./pages/News"
import Sport from "./pages/Sport"
import Learning from "./pages/Learning"
import FashionAndBeauty from "./pages/FashionAndBeauty"

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/shorts/:videoId",
        element: <Shorts />,
      },
      // Explore
      {
        path: "/feed/trending",
        element: <TrendingVideos />,
      },
      {
        path: "channel/UCkYQyvc_i9hXEo4xic9Hh2g",
        element: <Shopping />,
      },
      {
        path: "channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        element: <Music />,
      },
      {
        path: "feed/storefront",
        element: <Films />,
      },
      {
        path: "channel/UC4R8DWoMoI7CAwX8_LjQHig",
        element: <Live />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "channel/UCYfdidRxbB8Qhf0Nx7ioOYw",
        element: <News />,
      },
      {
        path: "channel/UCEgdi0XIXXZ-qJOFPf4JSKw",
        element: <Sport />,
      },
      {
        path: "channel/UCtFRv9O2AHqOZjjynzrv-xg",
        element: <Learning />,
      },
      {
        path: "channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ",
        element: <FashionAndBeauty />,
      },
    ],
  },
])

export default App
