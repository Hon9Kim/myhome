import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Home from './Home.js'
import History from './History.js'
import Projects from './Projects.js'

function Header() {

    return (
        <div>
            <nav className='space-x-10'>
                <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>

        </div>
    )
}

export default Header