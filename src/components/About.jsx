import { useState } from "react";
import userImage from "../assets/Banner_image.svg";

const About = () => {
   const[data, setData]= useState({
        image: userImage,
        title: "Java Developer",
        desc1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorem temporibus voluptatibus at molestiae, cum architecto omnis ipsum sit aspernatur?",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam repellat dolorum officia qui in quae incidunt amet possimus quos placeat sapiente dicta eligendi molestiae expedita exercitationem commodi nihil ab, alias nesciunt at voluptatibus non aperiam voluptas consequatur. Maiores, illo voluptate?",
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