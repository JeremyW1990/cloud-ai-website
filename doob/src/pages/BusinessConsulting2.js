import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import Timeline from '../elements/timeline/Timeline';
import CopyrightTwo from '../common/footer/CopyrightTwo';
import Contact from '../elements/contact/Contact';
import { Link as ScrollLink } from 'react-scroll';
var BlogListData = BlogClassicData.slice(0, 3);




const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="Business Consulting 02" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div id="business-consulting-2">
                    <div className="slider-area slider-style-1 bg-transparent height-850">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span className="subtitle">CLOUD AI</span>
                                        <h1 className="title theme-gradient display-two">An AI-Powered tool for <br />Cloud {" "}
                                            <Typed
                                                strings={[
                                                    "Architect",
                                                    "Engineer",
                                                    "Provider",
                                                ]}
                                                typeSpeed={80}
                                                backSpeed={5}
                                                backDelay={1000}
                                                loop
                                            />
                                        </h1>
                                        <p className="description">Cloud-AI helps to deploy and manage your cloud infrastructure via multiple LLM agents and natural language</p>
                                        <div className="button-group">
                                            <ScrollLink 
                                                    to="feature" 
                                                    spy={true} 
                                                    smooth={true} 
                                                    offset={-70} 
                                                    duration={500} 
                                                    className="btn-default btn-medium round btn-icon"
                                                    style={{cursor: "pointer"}}
                                            >
                                                <span style={{ color: '#ffffff' }}>Feature<i className="icon" color=''><FiArrowRight /></i></span>
                                            </ScrollLink>   
                                            {/* <Link className="btn-default btn-medium btn-border round btn-icon" to="#contact-section">Contact Us <i className="icon"><FiArrowRight /></i></Link> */}
                                            <ScrollLink 
                                                to="contact" 
                                                spy={true} 
                                                smooth={true} 
                                                offset={-70} 
                                                duration={500} 
                                                className="btn-default btn-medium btn-border round btn-icon"
                                                style={{cursor: "pointer"}}
                                            >
                                                Contact Us <i className="icon"><FiArrowRight /></i>
                                            </ScrollLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Slider Area  */}

                <Separator />
                <div id="feature">
                    <Timeline />
                </div>

                {/* Start About Area  */}
                {/* <AboutOne />                             */}
                {/* End About Area  */}

                <Separator />                            
                {/* Start Service Area  */}
                {/* <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-start"
                        />
                    </div>
                </div> */}
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                {/* <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div> */}
                {/* End Call To Action Area  */}


                {/* Start Team Area  */}
                <div id="team">
                    <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "My Team"
                                            // title = "Our Company Experts."
                                            description = "Seeking passionate minds to innovate cloud's future with Cloud-AI."
                                        />
                                </div>
                            </div>
                            <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}
                <Separator /> 
                {/* Start Mission Area   */}
                {/* <Mission />                     */}
                {/* Start Mission Area  */}


                {/* <Separator />                                */}
                {/* Start Testimonial Area  */}
                {/* <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Our Awesome Client."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div> */}
                {/* End Testimonial Area  */}

                {/* <Separator />    */}
                {/* <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                <div id="contact">
                    <Contact />
                </div>
                <CopyrightTwo />
            </main>
        </>
    )
}
export default BusinessConsulting2;
