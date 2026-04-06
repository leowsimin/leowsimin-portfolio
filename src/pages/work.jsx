import { NavBar } from "../components/nav.jsx"

import workImg from "../assets/work-image.svg"

import RevealOnScroll from "../components/revealOnScroll.jsx"

// NOTE: Same as school.jsx --> css is the same class.

function Work() {
    return(
        <div className="school-container">
            <svg viewBox="0 25 300 50" width="300" height="65">
                <path
                    id="curve"
                    d="M 50 100 A 100 50 0 0 1 250 100"
                    fill="transparent"
                    // stroke="red"
                />
                <text style={{fontFamily: "'Kalam', cursive"}} fontSize="18" textAnchor="middle" fill="black">
                    <textPath href="#curve" startOffset="50%">
                    Work Experiences
                    </textPath>
                </text>
            </svg>
    
            <div className="degree-container work-container">
                <h5>WORKING STATUS</h5>
                <p>
                    Maritime Digital Capabilities Trainee at <br/>
                    Maritime Port Authority of Singapore (MPA)
                </p>
                <p>
                    January 2026 - Present
                </p>
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
                        <h6>UI/UX @ HOZ Singapore</h6>
                        <p>
                            I designed and developed two responsive e-commerce platforms, Hoz and Tner, guiding each project from concept to deployment. 
                            Through iterative prototyping in Figma and implementation on Shopify, I focused on creating intuitive user experiences that 
                            improved client engagement.
                        </p>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <div className="timeline-year-row-right">
                        <span className="timeline-year-right">2025</span>
                        <div className="timeline-dot-center-right"></div>
                        <div className="timeline-dashed-right"></div>
                        <div className="timeline-dot-right"></div>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <div className="timeline-content-right">
                        <h6>OCI Certified Generative AI Professional</h6>
                        <p>
                            Through this certification, I acquired the skills to create and work with large language models using Oracle. 
                            It strengthened my understanding of chatbot development and how AI is applied in real-world systems. 
                            I was also equipped with the ability to modify and train large language models for more specific use cases and requirements.
                        </p>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <div className="timeline-year-row">
                        <div className="timeline-dot"></div>
                        <div className="timeline-dashed"></div>
                        <div className="timeline-dot-center"></div>
                        <span className="timeline-year">2026</span>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <div className="timeline-left-with-image">
                        <div className="timeline-content-left">
                            <h6>Trainee @ Maritime Port Authority of Singapore</h6>
                            <p>
                                Supported digitalisation initiatives for ship agents through the use of MPA platforms, policies, and frameworks. 
                                Conducted research and analysis to inform digital and policy workstreams, and assisted in mapping the maritime digital ecosystem to identify 
                                relevant partners and technology solutions. Collaborated with research institutes and technology companies to address connectivity and digital 
                                capability challenges. Also contributed to key initiatives such as Singapore Maritime Week 2026 and the Maritime Energy Training Facility (METF). </p>
                        </div>
                        <div className="timeline-image-right-gap">
                            <img className="degree-img" src={workImg} alt="Image of Rachel" />
                        </div>
                    </div>
                </RevealOnScroll>
    
            </div>
    
            <NavBar />
        </div>
    )
}

export {Work}