import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {Home} from "./pages/home.jsx"
import {School} from "./pages/school.jsx"
import {Work} from "./pages/work.jsx"
import {Leadership} from "./pages/leadership.jsx"
import {ContactMe} from "./pages/contactme.jsx"

import ScrollToTop from "./components/scrollToTop.jsx"

function App() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/school" element={<School />} />
                <Route path="/work" element={<Work />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/contactme" element={<ContactMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
