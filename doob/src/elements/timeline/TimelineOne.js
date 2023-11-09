import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

// const TimelineData = [
//     {
//         id: "1",
//         date: "Step-1",
//         title: "Your working process you can present.",
//         description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
//         image: "timeline-01",
//         workingStep: [
//             {
//                 stepTitle: "Gain your works",
//                 stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
//             },
//             {
//                 stepTitle: "Working process",
//                 stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
//             },
//         ]
//     },
//     {
//         id: "2",
//         date: "Step-2",
//         title: "Our compnay working process to present.",
//         description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
//         image: "timeline-02",
//         workingStep: [
//             {
//                 stepTitle: "Follow this process",
//                 stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
//             },
//             {
//                 stepTitle: "Working experience",
//                 stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
//             },
//         ]
//     },
// ]

const TimelineData = [
    {
        "id": "1",
        "title": "Read Terraform State Files from S3",
        "description": "Stay on top of your cloud setup. Cloud-AI meticulously scans your entire terraform state file in S3, chunks the information, and embeds it, ensuring that relevant pieces can be mapped seamlessly in response to user queries.",
        "image": "timeline-01",
        "workingStep": []
    },
    {
        "id": "2",
        "title": "Vectorize Your Entire Codebase",
        "description": "Dive deep into your code. Cloud-AI sifts through your entire codebase, segmenting and embedding the data, allowing for pinpoint accuracy when locating relevant code snippets for user questions.",
        "image": "timeline-02",
        "workingStep": []
    },
    {
        "id": "3",
        "title": "Connect with Multiple LLMs",
        "description": "Seamlessly configure your extension to connect with leading language models like ChatGPT-4, ChatGPT 3.5 Turbo, and others. Additionally, enjoy full support for local LLM modes.",
        "image": "timeline-03",
        "workingStep": []
    },
    {
        "id": "4",
        "title": "Highlight Code for LLM Focus",
        "description": "Enhance AI comprehension by feeding selected code snippets as a highlighted context. This ensures the model emphasizes specific parts of your code.",
        "image": "timeline-04",
        "workingStep": []
    },
    {
        "id": "5",
        "title": "Learn from External Webpages",
        "description": "Feed new knowledge to your LLM on the go. Provide a URL, and Cloud-AI will download the content, allowing the model to learn and deliver the most current answers.",
        "image": "timeline-05",
        "workingStep": []
    },
    {
        "id": "6",
        "title": "CI/CD Agent: Intelligent Deployment Orchestrator (developing)",
        "description": [
            "Error Detection & Analysis: Monitors the CI/CD pipeline logs in real-time to detect errors and warnings. Utilizes reasoning trees to analyze issues and their potential causes.",
            "Automated Code Improvement: Proposes code updates or changes through Cloud-AI in response to detected pipeline issues, supporting a self-healing deployment process.",
            "Stateful Troubleshooting: Maintains state information about past errors and attempted solutions, enabling a systematic trial-and-error approach to resolving issues.",
            "Continuous Learning Loop: Incorporates outcomes of deployments into its knowledge base, refining its reasoning and predictive capabilities for future CI/CD activities.",
            "Dynamic Integration: Designed to seamlessly integrate with mainstream CI/CD tools like Jenkins, AWS CodeDeploy, and Harness, allowing for versatile and adaptive deployment strategies."
        ],
        "image": "timeline-06",
        "workingStep": []
    },
    {
        "id": "7",
        "title": "Monitoring Agent: Proactive Infrastructure Watchdog (developing)",
        "description": [
            "Real-Time Alarm Handling: Continuously scans logs from monitoring tools like Datadog, ArgoCD, and Prometheus to detect and classify alerts based on predefined severity levels.",
            "Context-Aware Diagnostics: Employs an intelligent analysis to discern false alarms from genuine issues, informing the decision-making for responses.",
            "Direct Interaction with Monitoring APIs: Capable of executing immediate corrective actions by interfacing with monitoring tool APIs, mitigating issues autonomously when appropriate.",
            "Adaptive Response Mechanism: Determines the course of action for various scenarios ranging from auto-resolving minor issues to escalating critical problems to the development team.",
            "Smart State Management: Keeps track of ongoing and past incidents to enhance diagnostic accuracy and response efficacy, while refining alert classification and prioritization processes."
        ],
        "image": "timeline-07",
        "workingStep": []
    }
]


const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        {/* <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation> */}
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            {Array.isArray(data.description) ? 
                                                data.description.map((paragraph, index) => (
                                                    <li key={index} className="description">{paragraph}</li>
                                                )) 
                                            : <p className="description">{data.description}</p>}
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* <div className="read-morebtn">
                                            <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <a className="btn-default btn-large round" href="/contact"><span>Get Started Now</span></a>
                                            </ScrollAnimation>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
