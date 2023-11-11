import { useEffect } from "react";
import bannerImage from "../assets/Banner_image.svg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Backend Developer", "Web Developer", "Android Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop:true
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
                    <h2 className="mt-3 text-3xl">I am a <span className="font-bold" ref={el} ></span></h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor, tenetur incidunt velit deleniti dicta aut molestias eveniet quibusdam earum impedit corrupti nam vero modi quae enim atque maxime? Aliquam rem, reprehenderit at voluptatum quod dolorem asperiores inventore neque placeat quis quae voluptatibus repudiandae laboriosam minus ad a quibusdam iure?</p>
                    <div className="icon-container space-x-5">
                        <i class="fa-brands text-4xl hover:text-blue-950 fa-facebook"></i>
                        <i class="fa-brands text-4xl hover:text-blue-950 fa-instagram"></i>
                        <i class="fa-brands text-4xl hover:text-blue-950 fa-linkedin"></i>
                        <i class="fa-brands text-4xl hover:text-blue-950 fa-github"></i>
                    </div>
                    <br></br>
                    <a className="px-4 py-2 bg-orange-500 shadow-lg text-black rounded-full hover:text-white" href="/contact-me">Contact Me</a>
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