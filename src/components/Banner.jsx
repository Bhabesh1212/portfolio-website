import { useEffect, useRef } from "react";
import bannerImage from "../assets/Banner_image.svg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Backend Developer", "Web Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true

        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover"
            }
            }
            className="main-container flex items-center">
            <div className="w-full flex items-center justify-center text-white">
                {/*text  */}
                <div className="w-2/3  space-y-2 ms-10">
                    <h3 className="mt-3 text-3xl font-semibold">Hi, I am </h3>
                    <h1 className="mt-3 text-5xl font-bold">Bhabesh Ranjan Barik</h1>
                    <h2 className="mt-3 text-3xl">I am a <span className="font-bold" ref={el}></span></h2>
                    <p className="mt-3">
                        Welcome to my digital space! As a dedicated software engineer, I bring passion and proficiency to every project. With a foundation in diverse technologies, I specialize in crafting efficient and scalable solutions. From front-end elegance to back-end robustness, I thrive in turning complex challenges into elegant, user-centric solutions. Explore my portfolio to witness a fusion of innovation and precision, showcasing my proficiency in languages like JavaScript ,Java & their latest frameworks and their deployment. With a keen eye for detail and a commitment to excellence, I am driven to create seamless, cutting-edge software experiences. Let's embark on a journey of code where possibilities are limitless</p>
                    <div className="icon-container space-x-5">
                        {/* <i class="fa-brands text-4xl hover:text-blue-950 fa-facebook"></i> */}
                        <a href="https://www.instagram.com/worldofbhabesh/"><i class="fa-brands text-4xl hover:text-blue-950 fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands text-4xl hover:text-blue-950 fa-linkedin"></i></a>
                        <a href="https://github.com/Bhabesh1212"><i class="fa-brands text-4xl hover:text-blue-950 fa-github"></i></a>
                    </div>
                    {/* <br></br>
                    <a className="px-4 py-2 bg-orange-500 shadow-lg text-black rounded-full hover:text-white" href="/contact-me">Contact Me</a> */}
                </div>
            </div>

            <div className=" w-full flex justify-center my-2">
                {/* image */}
                <img className="rounded-full shadow-lg w-fit" src={bannerImage} />
            </div>
        </div>
    );

};

export default Banner;