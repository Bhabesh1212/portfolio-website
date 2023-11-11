import { useState } from "react";

const Services = () => {

    const [services, setServices] = useState([
        {
            id: '1',
            imagelink: "text-5xl fa-brands fa-aws",
            title: "Web Developement",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni nisi, voluptates explicabo labore voluptatum earum maiores doloremque est quibusdam! Dolorum atque enim consequuntur, impedit doloribus odio dolorem qui fugiat!",
            actionButton: {
                title: "Check here",
                link: "/check-here"
            }
        },
        {
            id: '2',
            imagelink: "text-5xl fa-solid fa-server",
            title: "Backend Developement",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni nisi, voluptates explicabo labore voluptatum earum maiores doloremque est quibusdam! Dolorum atque enim consequuntur, impedit doloribus odio dolorem qui fugiat!",
            actionButton: {
                title: "Check here",
                link: "/check-here"
            }
        },
        {
            id: '3',
            imagelink: "text-5xl fa-solid fa-mobile-screen",
            title: "Android Developement",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni nisi, voluptates explicabo labore voluptatum earum maiores doloremque est quibusdam! Dolorum atque enim consequuntur, impedit doloribus odio dolorem qui fugiat!",
            actionButton: {
                title: "Check here",
                link: "/check-here"
            }
        }
    ]);
    return (
        <>
            <div className="main-container py-14">
                <h1 className="underline text-4xl text-center font-bold">My Services</h1>
                <div className="service-container flex justify-center mt-10 space-x-5 px-10">
                    {services.map((service) => (
                        <div key={service.id}  className="cursor-pointer hover:bg-gray-200 shadow-lg rounded-xl service1 space-y-3 bg-slate-100 p-5 text-center">
                            <i class={service.imagelink}></i>
                            <h1 className="text-4xl">{service.title}</h1>
                            <p>{service.description}</p>
                            <br/>
                            <a href={service.actionButton.link} className="px-3 py-2 bg-orange-600 rounded  hover:text-white">{service.actionButton.title}</a>
                        </div>

                    ))}

                    {/* <div className="cursor-pointer hover:bg-gray-200 shadow-lg rounded-xl service2 space-y-3 bg-slate-100 p-5 text-center">
                        <i class="text-5xl fa-solid fa-server"></i>
                        <h1 className="text-4xl">Backend Developement</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni nisi, voluptates explicabo labore voluptatum earum maiores doloremque est quibusdam! Dolorum atque enim consequuntur, impedit doloribus odio dolorem qui fugiat!</p>
                        <button className="px-3 py-2 bg-orange-600 rounded hover:text-white">Check here</button>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-200 shadow-lg rounded-xl service3 space-y-3 bg-slate-100 p-5 text-center">
                        <i class="text-5xl fa-solid fa-mobile-screen"></i>
                        <h1 className="text-4xl">Android Developement</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni nisi, voluptates explicabo labore voluptatum earum maiores doloremque est quibusdam! Dolorum atque enim consequuntur, impedit doloribus odio dolorem qui fugiat!</p>
                        <button className="px-3 py-2 bg-orange-600 rounded  hover:text-white">Check here</button>
                    </div> */}
                </div>
            </div>
        </>
    )
};

export default Services;