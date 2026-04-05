import { NavBar } from "../components/nav.jsx"

import contactmeImg from "../assets/contactme-image.svg"


function ContactMe() {
    return(
    <div className ="contactme-container">
        <div className="contactme-wrapper">
            <svg viewBox="0 25 300 50" width="300" height="65" style={{flexShrink: 0}}>
                <path
                    id="curve"
                    d="M 50 100 A 100 50 0 0 1 250 100"
                    fill="transparent"
                    // stroke="red"
                />
                <text fontSize="18" textAnchor="middle" fill="black">
                    <textPath href="#curve" startOffset="50%">
                    Contact Me
                    </textPath>
                </text>
            </svg>

            <img className="contactmeImg" src={contactmeImg} alt="Image of Rachel"></img>
            
            <div className="home-title">
                <h2>I'm RACHEL.</h2>
                <h3>AI & SUSTAINABILITY</h3>
            </div>
        
            <div className="line"></div>
            <p><strong>Mobile Phone:</strong> +65 98277245</p>
            <p><strong>Email:</strong> leowsmr@gmail.com</p>
            <p><strong>Linkedin:</strong> 
                <a href="https://www.linkedin.com/in/rachel-leow-si-min/" target="_blank" rel="noreferrer" className="linkedin-link"> linkedin.com/in/rachel-leow-si-min/
                </a>
            </p>
            <div className="line"></div>

        </div>
        
        <NavBar />
    </div>
    )
}

export {ContactMe}