import React from "react";
import Image from "next/image";
import ToastIcon from "../svgs/toast.svg";
import SliderIcon from "../svgs/slider.svg";
import OpenlinkIcon from "../svgs/openlink.svg";

class AboutUs extends React.Component {
    constructor(props: any) {
        super(props);
        this.openWindow = this.openWindow.bind(this);
    }
    openWindow(link: string) {
        window.open(link, '_blank');
    }
    render() {
        return (
            <div className="section-container about-us"> 
                <div className="introduction"></div>
                <h2>Technologies I know</h2>
                <ul>
                    <li> React/Nextjs, Vuejs, Emberjs</li>
                    <li> Nodejs (Nestjs, expressjs) </li>
                    <li> Stencil.js (Web Components) </li>
                    <li> SCSS/CSS, LESS/CSS, Bootstrap, ElementUI</li>
                    <li> Git, Gulp, npm/yarn</li>
                    <li> Docker </li>
                    <li><b>Tools:</b> VScode/Atom code editor, Adobe XD/Figma</li>
                </ul>

                <div id="personal-projects">
                    <h2 >Personal Projects</h2>
                    <section onClick={() => this.openWindow('https://web-components-kappa.vercel.app/')}>
                        <ToastIcon />
                        <div>
                            <h3>Toast Web Component</h3>
                            <p>Easy-to-use toast component built on stenciljs with web components concept.</p>
                        </div>
                    </section>
                    <section onClick={() => this.openWindow('https://www.npmjs.com/package/ember-simple-range-slider')}>
                        <SliderIcon />
                        <div>
                            <h3>Ember Range Slider</h3>
                            <p>A node module can be used in emberjs as addon. Range slider with consistent design across browser</p>
                        </div>
                    </section>
                </div>

                <h2 id="work-experience">Work Experience</h2>
                {/* IQZ Systems */}
                <div className="experience">
                    <div className="company">
                        <div className="logo">
                            <img
                                src="/assets/iqzsystems.svg"
                                width={100}
                                height={40}
                                className="iqz logo"
                                alt="IQZ Systems logo"
                            />
                        </div>
                        <h3>IQZ Systems</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://iqzsystems.com">
                            <div className="open-external-link">
                                <OpenlinkIcon />
                            </div>
                        </a>
                    </div>
                    <div className="period">
                        Coimbatore, India - ( July 2021 - Dec 2022 )
                    </div>
                    <div className="project">
                        <h3>Full Stack Developer</h3>
                        <p>Being a part of creating company website from scratch, added best code practices, code revamps and built many pages</p>
                        <p>Developed a product from scratch, collaborated with team mates/UI UX designers, code quality checks, setting up CI/CD pipelines and deployed using kubernetes technology</p>
                    </div>
                </div>
                <hr/>
                {/* Freshworks */}
                <div className="experience">
                    <div className="company">
                        <div className="logo">
                            <img
                                src="/assets/freshworks.svg"
                                width={40}
                                height={60}
                                className="logo"
                                alt="freshworks logo"
                            />
                        </div>
                        <h3>Freshworks</h3>
                        <a target="_blank" href="https://www.freshworks.com" rel="noopener noreferrer">
                            <div className="open-external-link">
                                <OpenlinkIcon />
                            </div>
                        </a>
                    </div>
                    <div className="period">
                        Chennai, India - (Oct 2019 - May 2021)
                    </div>
                    <div className="project">
                        <h3>Tech team - Platform</h3>
                        <p>Enhance the developer platform, Requirement analysis, design, develop, review codes, support developer community and organization maintained open source contribution</p>
                    </div>
                </div>
                <hr />
                {/* Zoho */}
                <div className="experience">
                    <div className="company">
                        <img src="/assets/zoho.png" style={{marginRight: "0.5rem"}} width={100} height={35} alt="Zoho logo" />
                        <h3>Corporation Pvt. Ltd</h3>
                        <a target="_blank" href="https://www.zoho.com" rel="noopener noreferrer">
                            <div className="open-external-link">
                                <OpenlinkIcon />
                            </div>
                        </a>
                    </div>
                    <div className="period">
                        Chennai, India - (May 2016 - Oct 2019)
                    </div>
                    <div className="project">
                        <h3>UI Team - Product</h3>
                        <p> Enhance Product Features, add unit and integration tests, peer code reviews, requirement gathering, Mentor new team member  </p>
                        <h3>UI Team - Marketing</h3>
                        <p> Build Customer experiencing marketing websites, enhance performance, improve SEO, make website responsive and smooth transitions </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;
