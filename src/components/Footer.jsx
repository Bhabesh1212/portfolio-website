import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Footer = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Crafted with passion for backend development. Let’s turn ideas into something extraordinary!"
            ],
            startDelay: 100,
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 10,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <footer className="py-6 bg-gray-100 border-t flex flex-col items-center text-center px-5">
            
            <p className="text-sm text-gray-700">
                © 2025 <b>Bhabesh Ranjan Barik</b>. All Rights Reserved.
            </p>

            <p className="text-sm text-gray-600 mt-1">
                Made with ❤️ using <b>React</b> • <b>TailwindCSS</b>
            </p>

            <div className="mt-3 space-x-2 text-sm">
                <span className="font-semibold">Email:</span>
                <a 
                    href="mailto:bhabesh.barik.dev@gmail.com" 
                    className="hover:underline text-blue-700"
                >
                    bhabesh.barik.dev@gmail.com
                </a>
            </div>

            {/* Typed text section */}
            <div className="mt-3 text-sm italic text-gray-500">
                <b><span ref={el}></span></b>
            </div>
        </footer>
    );
};

export default Footer;
