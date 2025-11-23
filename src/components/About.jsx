import { useState } from "react";
import userImage from "../assets/Banner_image.svg";

const About = () => {
   const[data, setData]= useState({
        image: userImage,
        title: "Software Engineer",
        desc1: "I am a Software Engineer with experience in Java, Spring Boot, Microservices, and API Gateway-based architectures. My expertise includes building modular services, implementing secure authentication flows (JWT, OAuth), integrating REST/Kafka-based communication, and optimizing backend performance.",
        desc2: "I have hands-on exposure to Docker, CI/CD pipelines, Cloud services, and production-grade design patterns. With a strong interest in system design and real-world problem-solving, I aim to build reliable, scalable, and maintainable backend applications while continuously learning and adapting to modern engineering practices",
        actionButton:{
            title:"Read More...",
            link:"/readMore"
        }
    });
    return (
        <>
            <div className="main-container bg-gray-100 border py-16">
                <h1 className="text-4xl font-bold text-center underline pb-14">About Me</h1>
                <div className="flex ">
                    <div className="w-full flex items-center">
                        {/* image container */}
                        <img className="" src={data.image} />
                    </div>
                    <div className="w-full flex justify-center">
                        {/* text container */}
                        <div className="space-y-5 w-2/3">
                            <h1 className="text-5xl font-semibold">{data.title}</h1>
                            <p>{data.desc1}</p>
                            <p>{data.desc2}</p>
                            <br/>
                            <a href={data.actionButton.link} className="bg-orange-600 rounded-full shadow-lg px-3 py-1 hover:text-white">{data.actionButton.title}</a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default About;