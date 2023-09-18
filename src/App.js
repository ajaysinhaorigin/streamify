import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createBrowserRouter } from 'react-router-dom'
import Body from './components/body/Body'
import Header from './components/head/Header'
import MainContainer from './components/body/MainContainer'
import WatchVideo from './pages/WatchVideo'
import SearchResults from './pages/SearchResults'

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
    ],
  },
])

export default App
