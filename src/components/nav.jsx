import school from "../assets/school.svg"
import work from "../assets/work.svg"
import meicon from "../assets/me-icon.svg"
import leadership from "../assets/leadership.svg"
import contactme from "../assets/contact-me.svg"

import schoolBlack from "../assets/school-black.svg"
import workBlack from "../assets/work-black.svg"
import leadershipBlack from "../assets/leadership-black.svg"
import contactmeBlack from "../assets/contact-me-black.svg"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function NavBar() {
    const location = useLocation() 

    const [hovered, setHovered] = useState({
        school: false,
        work: false,
        me: false,
        leadership: false,
        contactme: false
    })

    const handleMouseEnter = (key) => setHovered(prev => ({ ...prev, [key]: true }))
    const handleMouseLeave = (key) => setHovered(prev => ({ ...prev, [key]: false }))

    const isActive = (path) => location.pathname === path

    return(
         <div className="nav-container">
            <Link
                className="nav-item"
                to="/school"
                onMouseEnter={() => handleMouseEnter("school")}
                onMouseLeave={() => handleMouseLeave("school")}
            >
                <img src={hovered.school || isActive("/school") ? schoolBlack : school} alt="School" />
                <p>School</p>
            </Link>
            <Link
                className="nav-item"
                to="/work"
                onMouseEnter={() => handleMouseEnter("work")}
                onMouseLeave={() => handleMouseLeave("work")}
            >
                <img src={hovered.work || isActive("/work") ? workBlack : work} alt="Work" />
                <p>Work</p>
            </Link>
            <Link className="nav-item" to="/">
                <img className="meicon" src={meicon} alt="Me" />
            </Link>
            <Link
                className="nav-item"
                to="/leadership"
                onMouseEnter={() => handleMouseEnter("leadership")}
                onMouseLeave={() => handleMouseLeave("leadership")}
            >
                <img src={hovered.leadership || isActive("/leadership") ? leadershipBlack : leadership} alt="Leadership" />
                <p>Leadership</p>
            </Link>
            <Link
                className="nav-item"
                to="/contactme"
                onMouseEnter={() => handleMouseEnter("contactme")}
                onMouseLeave={() => handleMouseLeave("contactme")}
            >
                <img src={hovered.contactme || isActive("/contactme") ? contactmeBlack : contactme} alt="Contact Me" />
                <p>Contact Me</p>
            </Link>
        </div>
    )
}

export {NavBar}