import introImg from "../assets/introduction-image.svg"

import python from "../assets/python.svg"
import react from "../assets/react.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"

import dancing from "../assets/dancing.svg"
import eating from "../assets/eating.svg"
import music from "../assets/music.svg"
import outdoors from "../assets/outdoors.svg"
import movies from "../assets/movies.svg"

import { NavBar } from "../components/nav.jsx"
import { useState, useEffect } from "react"

function Home() {

    const [showSplash, setShowSplash] = useState(() => !sessionStorage.getItem("splashShown"))
    const [fadeOut, setFadeOut] = useState(false)
    const [contentVisible, setContentVisible] = useState(false)  // always starts false

    useEffect(() => {
        if (!showSplash) {
            // return visit
            const timer = setTimeout(() => {
                setContentVisible(true)
            }, 100)
            return () => clearTimeout(timer)
        }

        // first visit
        const fadeTimer = setTimeout(() => {
            setFadeOut(true)
        }, 2000)

        const removeTimer = setTimeout(() => {
            setShowSplash(false)
            setContentVisible(true)
            sessionStorage.setItem("splashShown", "true")
        }, 3000)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    return(
    <>
        {showSplash && (
            <div className={`splash-screen ${fadeOut ? "splash-fade-out" : ""}`}>
                <p className="splash-text">Hello!</p>
                <p className="splash-text">Welcome to my page.</p>
            </div>
        )}

        <div className={`home-container ${contentVisible ? "content-visible" : ""}`}>
        
            <svg viewBox="0 25 300 50" width="300" height="65" style={{flexShrink: 0}}>
                <path
                    id="curve"
                    d="M 50 100 A 100 50 0 0 1 250 100"
                    fill="transparent"
                    // stroke="red"
                />
                <text fontSize="18" textAnchor="middle" fill="black">
                    <textPath href="#curve" startOffset="50%">
                    introduction
                    </textPath>
                </text>
            </svg>

            <div className="home-title">
                <h2>I'm RACHEL.</h2>
                <h3>AI & SUSTAINABILITY</h3>
            </div>
        
            <img className="introImg" src={introImg} alt="Image of Rachel"></img>
            <div className="line"></div>
            <p>I’m driven by a curiosity about how the natural world works, from weather systems to ecosystems. 
                I combine environmental science with technology—using data, machine learning, and interactive 
                design—to explore and communicate complex processes in engaging ways.
            </p>
            <div className="line"></div>

            <h4>Skill</h4>
            <div className="skill-container">
                <img src={python} alt="Python"></img>
                <img src={react} alt="React"></img>
                <img src={html} alt="HTML"></img>
                <img src={css} alt="CSS"></img>
                <img src={javascript} alt="Javascript"></img>
            </div>

            <h4>Hobbies</h4>
            <div className="hobby-container">
                <div className="hobby-item">
                    <img src={dancing} alt="Dancing" />
                    <p>Dancing</p>
                </div>
                <div className="hobby-item">
                    <img src={eating} alt="Eating" />
                    <p>Eating</p>
                </div>
                <div className="hobby-item">
                    <img src={music} alt="Music" />
                    <p>Music</p>
                </div>
                <div className="hobby-item">
                    <img src={outdoors} alt="Outdoors" />
                    <p>Outdoors</p>
                </div>
                <div className="hobby-item">
                    <img src={movies} alt="Movies" />
                    <p>Movies</p>
                </div>
            </div>

            <NavBar />

        </div>
    </>
    )
}

export { Home }