import { NavBar } from "../components/nav.jsx"

import leadershipImg from "../assets/leadership-image.svg"

import RevealOnScroll from "../components/revealOnScroll.jsx"

function Leadership() {
    return(
    <div className="leadership-container">
        <div className="leadership-header-image">
            <img className="leadership-img" src={leadershipImg} alt="Image of Rachel" />
            <div className ="leadership-header">
                <h4>Leadership</h4>
                <p>Always grateful for all the leadership opportunities entrusted to me.</p>
            </div>
        </div>

        <RevealOnScroll>
            <div className="leadership-card">
                <h5>Title</h5>
                <p>Senior Dance Captain</p>
                <h5>Club</h5>
                <p>Dance Derivative, DDZ @SUTD</p>
                <h5>Description</h5>
                <p>
                    I directed weekly training sessions for over 60 dancers, supporting their technical development and performance readiness, 
                    which culminated in two successful stage productions. Alongside this, I contributed to all-club operations by organising 
                    seven major events, ensuring alignment with the club’s mission while fostering a strong and supportive team culture.
                    Stepping into this leadership role was initially challenging, as I struggled with self-doubt and questioned whether I deserved the title. 
                    However, through the belief and encouragement of my instructor and team, I chose to embrace the responsibility. The experience pushed me 
                    beyond my comfort zone, and I am deeply grateful for the opportunity to grow into a more confident and capable version of myself.
                </p>
            </div>
        </RevealOnScroll>

        <RevealOnScroll>
            <div className="leadership-card">
                <h5>Title</h5>
                <p>External Publicity Head</p>
                <h5>Club</h5>
                <p>Dance Derivative, DDZ @SUTD</p>
                <h5>Description</h5>
                <p>
                    I led the creation and execution of social media content to increase club visibility and promote key events. During BYTE 3.0 Dance Production, 
                    I managed and guided a team of creatives in developing and executing marketing strategies across platforms such as Instagram.
                    This role was particularly demanding, as maintaining consistent engagement required constant updates and careful planning alongside my academic 
                    commitments. BYTE 3.0 was especially time-intensive, with tight deadlines for advertisements, designs, and ticketing. Despite the pressure, 
                    the experience was deeply rewarding. It offered valuable, real-world exposure to leadership with real consequences, and through teamwork and perseverance, 
                    my team and I were able to rise to the challenge. I am truly grateful for the team I worked with.
                </p>
            </div>
        </RevealOnScroll>

        <RevealOnScroll>
            <div className="leadership-card">
                <h5>Title</h5>
                <p>Member</p>
                <h5>Club</h5>
                <p>Student Council @ SAJC</p>
                <h5>Description</h5>
                <p>
                    I helped organise the JC1 Orientation Programme at St. Andrew’s Junior College, supporting new students as they familiarised themselves with the school’s facilities, 
                    culture, and routines. I also contributed to the planning and execution of the college’s Open House, welcoming prospective students and the public to experience the 
                    school’s environment and achievements.
                </p>
            </div>
        </RevealOnScroll>

        <RevealOnScroll>
            <div className="leadership-card last-card">
                <h5>Title</h5>
                <p>Vice Captain</p>
                <h5>Club</h5>
                <p>Shooting Club @ SJC</p>
                <h5>Description</h5>
                <p>
                    As Vice Captain of the Shooting team, I led and planned multiple training sessions each week, adapting programmes to meet individual abilities and development needs. 
                    I fostered a positive and inclusive team culture while maintaining high morale, and managed key administrative responsibilities such as coordination, scheduling, 
                    and internal communications.
                </p>
            </div>
        </RevealOnScroll>
        <NavBar />

    </div>
    )
}

export {Leadership}