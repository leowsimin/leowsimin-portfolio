import { NavBar } from "../components/nav.jsx"

import schoolImg from "../assets/school-image.svg"

import RevealOnScroll from "../components/revealOnScroll.jsx"

function School() {
    return(
    <div className="school-container">
        <svg viewBox="0 25 300 50" width="300" height="65">
            <path
                id="curve"
                d="M 50 100 A 100 50 0 0 1 250 100"
                fill="transparent"
                // stroke="red"
            />
            <text fontSize="18" textAnchor="middle" fill="black">
                <textPath href="#curve" startOffset="50%">
                School Projects
                </textPath>
            </text>
        </svg>
        
        <div className="degree-wrapper">
            <div className="degree-container">
                <h5>DEGREE QUALIFICATIONS</h5>
                <p>
                    Bachelor of Engineering (Computer Science in Design)
                    <br /> 
                    at Singapore University of Technology and Design (SUTD)
                </p>
                <p>
                    Minor in Artificial Intelligence (AI) & 
                    <br /> 
                    Design, Technology in Society (DTS) 
                </p>
                <p>
                    September 2021 – May 2025
                </p>
            </div>
            <img className="degree-img" src={schoolImg} alt="Image of Rachel" />
        </div>

        <div className="timeline-container">
            <RevealOnScroll>
                <div className="timeline-year-row">
                    <div className="timeline-dot"></div>
                    <div className="timeline-dashed"></div>
                    <div className="timeline-dot-center"></div>
                    <span className="timeline-year">2023</span>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-left">
                    <h6>SuRE Web Application</h6>
                    <p>
                        I led the front-end development of an invoice management web application, 
                        building a responsive interface with React and JavaScript. 
                        Iterative feedback reinforced the value of usability, focused design and strong frontend–backend coordination.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-year-row-right">
                    <span className="timeline-year-right">2024</span>
                    <div className="timeline-dot-center-right"></div>
                    <div className="timeline-dashed-right"></div>
                    <div className="timeline-dot-right"></div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-right">
                    <h6>The Flying Dutchmen</h6>
                    <p>
                        I led the front-end design and development of a bar menu management 
                        web application using React and JavaScript. Designed and iterated on the 
                        interface in Figma to deliver a responsive experience for both customers
                        and staff.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-right">
                    <h6>Onion Fishing Game</h6>
                    <p>
                        I led the front-end design and deployment, focusing on smooth animations and interactive experiences. 
                        Integrated the front end with the backend and developed the application using Unreal Engine.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-right">
                    <h6>Human Pose Estimation</h6>
                    <p>
                        I researched and experimented with human pose estimation frameworks such as BlazePose and OpenPose, adapting 
                        and modifying existing models to suit project-specific objectives. Through iterative experimentation, I 
                        focused on improving model accuracy and understanding the practical challenges of deploying pose estimation systems.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-right">
                    <h6>MUVE: Realm of Relics</h6>
                    <p>
                        Contributed to the visual design and assisted in creating 3D models for an immersive game developed in Unity.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-year-row">
                    <div className="timeline-dot"></div>
                    <div className="timeline-dashed"></div>
                    <div className="timeline-dot-center"></div>
                    <span className="timeline-year">2025</span>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-left">
                    <h6>Rainfall Prediction <br /> in Australia</h6>
                    <p>
                        I led a three-member team in the planning and execution of a time-series deep learning project aimed 
                        at improving rainfall prediction accuracy in Australia. 
                        Using LSTM and GRU architectures, we modelled temporal patterns in climate data and benchmarked our 
                        results against current state-of-the-art predictive approaches.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-left">
                    <h6>Fake News</h6>
                    <p>
                        My team and I developed and customized state-of-the-art natural language processing models, including BERT-based architectures, to tackle fake news detection. 
                        The models achieved performance metrics comparable to recent research benchmarks, demonstrating strong generalisation and robustness. 
                        This project was implemented using Python and PyTorch, with a focus on experimenting with model variants and evaluation strategies.
                    </p>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="timeline-content-left">
                    <h6>NewNails</h6>
                    <p>
                        Developed algorithms in Rhino, Grasshopper, and Python to extract precise, smooth 3D nail models from hand scans, applying machine learning and computer vision 
                        techniques to support eco-conscious design.
                    </p>
                </div>
            </RevealOnScroll>

        </div>

        <NavBar />
    </div>
)
}

export {School}