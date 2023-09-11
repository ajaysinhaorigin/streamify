import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import WatchVideo from './pages/WatchVideo'

function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchVideo />,
      },
    ],
  },
])

export default App
