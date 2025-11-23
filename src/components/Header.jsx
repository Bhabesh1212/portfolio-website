import { useState } from "react";

const Header=()=>{
    const [barndName,setBrandName] =useState("Bhabesh Ranjan Barik");

    const openEmailPopup = () => {
        const confirmed = window.confirm("Do you want to contact me via email?");
        if (confirmed) {
            window.location.href = "mailto:bhabesh.barik.dev@gmail.com";
        }
    };

    const [menuLinks, setMenuLinks]=useState([
        {
            title:"Home",
            link:"https://bhabesh1212.github.io/portfolio-website/",
            id:1
        }
        ,
        {
            title:"About",
            link:"/about",
            id:2
        },
        {
            title:"Skill",
            link:"/skill",
            id:3
        },
        {
            title: "Contacts",
            link: "#",   // prevent direct mail opening
            id: 4,
            action: openEmailPopup
        }
    ]);
    const [actionButton, setActionButton]= useState({
        title:"Download CV",
        link:"/hire-me"
    });
    return(
        <>
        <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
            <div> 
                {/* brand logo */}
                <h1 className="text-xl font-bold">{barndName}</h1>
            </div>
            <div className="space-x-6">
                {menuLinks.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        onClick={(e) => {
                            if (item.action) {
                                e.preventDefault();   // stop default link
                                item.action();        // run popup
                            }
                        }}
                        className="hover:text-orange-600 cursor-pointer"
                    >
                        {item.title}
                    </a>
                ))}
            </div>
            <div>
                {/* Button */}
                <a href={actionButton.link} className="px-4 py-2 bg-orange-500 shadow-lg text-black rounded-full">{actionButton.title}</a>
            </div>
        </div>
        </>
         
    )
}

export default Header;