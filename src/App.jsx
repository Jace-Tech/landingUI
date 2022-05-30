import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Landing from './pages/Landing'
import About from './pages/About'
import Github from './pages/Github'

const App = () => {
    const routes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/github",
            element: <Github />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/comingsoon",
            element: <Landing />
        },
        {
            path: "/blog",
            element: <Blog />
        },
    ]

    return (
        <div>
            <Routes>
                {routes.map((route, index) => <Route key={`${index}`} path={route.path} element={route.element} />)}
            </Routes>
        </div>
    )
}

export default App
