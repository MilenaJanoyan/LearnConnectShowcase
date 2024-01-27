import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import './index.css'

const Footer = () => {

    const { pathname } = useLocation();

    const menuItems: Array<{ path: string, name: string, id: number }> = [
        {
            id: 1,
            path: '/',
            name: 'Home'
        },
        {
            id: 2,
            path: '/cv-page',
            name: 'CV & Skills'
        },
        {
            id: 3,
            path: '/about',
            name: 'About Me'
        },
        {
            id: 4,
            path: '/articles',
            name: 'Articles'
        }
    ];

    return (
        <div className="py-8 md:px-8 px-4 bg-[#c2b4ad] border-t-2 border-[#252221]">
            <div className="px-16 flex justify-between items-center text-[#252221]">
                <div className="footer-menu flex">
                    {menuItems.map(menuItem => (
                        <Link
                            key={menuItem.id}
                            to={menuItem.path}
                            className={`block py-2 px-4 ${pathname === menuItem.path ? "active hover:text-black" : "hover:text-black"
                                }`}
                        >
                            {menuItem.name}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-8">
                    <Link
                        to={"https://www.linkedin.com/in/milenajanoyan"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-3xl cursor-pointer hover:opacity-80" />
                    </Link>
                    <Link
                        to={"https://twitter.com/JanoyanMilena"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareTwitter className="text-3xl cursor-pointer hover:opacity-80" />
                    </Link>
                    <Link to={`mailto:milena.janoyan@iu-study.org`}>
                        <MdEmail className="text-3xl cursor-pointer hover:opacity-80" />
                    </Link>
                    <Link
                        to={`https://github.com/MilenaJanoyan`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareGithub className="text-3xl cursor-pointer hover:opacity-80" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
