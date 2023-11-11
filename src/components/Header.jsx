import { useState } from "react";

const Header=()=>{
    const [barndName,setBrandName] =useState("Bhabesh Ranjan Barik");
    const [menuLinks, setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
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
            title:"Contacts",
            link:"/Contacts",
            id:4
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
                {/* Menu Link */}
                {menuLinks.map((link) =>(
                <a key={link.id} href={link.link} className="hover:text-orange-600">{link.title}</a>
                )                             
                )}
                
                {/* <a href="/about" className="hover:text-orange-600">About</a>
                <a href="/skill" className="hover:text-orange-600">Skill</a>
                <a href="/Contacts" className="hover:text-orange-600">Contacts</a> */}
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