import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createBrowserRouter } from 'react-router-dom'
import Body from './components/body/Body'
import Header from './components/head/Header'
import MainContainer from './components/body/MainContainer'
import WatchVideo from './pages/WatchVideo'
import SearchResults from './pages/SearchResults'
import Shorts from './pages/Shorts'
import TrendingVideos from './pages/TrendingVideos'
import Shopping from './pages/Shopping'

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
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchVideo />,
      },
      {
        path: '/results',
        element: <SearchResults />,
      },
      {
        path: '/shorts/:videoId',
        element: <Shorts />,
      },
      // Explore
      {
        path: '/feed/trending',
        element: <TrendingVideos />,
      },
      {
        path: 'channel/UCkYQyvc_i9hXEo4xic9Hh2g',
        element: <Shopping />,
      },
    ],
  },
])

export default App
