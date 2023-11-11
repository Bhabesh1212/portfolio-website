import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
    return (
        <>
            <div className="my-8">
                <h1 className=" text-4xl underline font-bold text-center">
                    My Expertise
                </h1>
                {/* box section */}
                <div style={{
                    backgroundImage: `url(${bannerBackground})`,
                    backgroundSize: "cover"
                }
                } className="box-container items-center flex mt-10">

                    <div className="flex justify-center">
                        {/* text-container    */}
                        <div className="w-2/3 text-center space-y-4">
                            <h1 className="text-4xl font-bold">I Love These Technology</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati ducimus odit animi. Neque eius, asperiores nostrum ducimus tenetur excepturi aliquid natus cumque laudantium! Enim obcaecati saepe odit corrupti atque.</p>
                            <button className="px-4 py-2 font-semibold bg-orange-500 rounded-full shadow-lg hover:text-white">Hire Me</button>
                        </div>

                    </div>
                    <div className="flex justify-center ">
                        {/* skill-container    */}
                        <div className="flex justify-center flex-wrap space-x-3 w-2/3 h-fit">
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Core Java
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                J2EE
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Spring Framework
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Spring Boot Framework
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Spring Security
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Hibernate(ORM Tool)
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Web Services(Rest & Soap)
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Micro-services
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                Tailwind CSS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                ReactJS
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                State Management
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                SQL
                            </p>
                            <p className="bg-gray-300 w-fit px-3 py-2 mt-2 hover:bg-orange-500 cursor-pointer rounded-full">
                                NOSql
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Expertise;