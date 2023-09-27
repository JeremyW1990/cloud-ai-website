import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';


import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ServiceFour from '../elements/service/ServiceFour';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandTwo from '../elements/brand/BrandTwo';

import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";


const Marketing = () => {
    return (
        <>
            <SEO title="Marketing" />
            <main className="page-wrapper">
                
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />


                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-two">An AI-Powered tool<br /> For Cloud{" "}
                                        <Typed
                                            strings={[
                                                "Provider",
                                                "Engineer",
                                                "Architect",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">Cloud-AI helps to manange cloud infrastructure in an innovative way.</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">New Customer <i className="icon"><FiArrowRight /></i></Link>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img src="./images/bg/bg-image-16.png" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
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
                        <ServiceFour 
                            serviceStyle = "service__style--1 icon-circle-style with-working-process"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "You can acquire all."
                                    title = "Acquire new customers with Doob."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <AdvanceTabOne />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-pricingtable-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Pricing Table"
                                    title = "Advance Pricing Table."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <div className="row mt--30">
                            <div className="col-lg-8 offset-lg-2">
                                <AdvancePricingOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Brand Area  */}
                <div className="rwt-brand-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Awesome Clients"
                                    title = "Join over +10,000 happy clients!"
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandTwo brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                <FooterThree />

            </main>
        </>
    )
}

export default Marketing;
