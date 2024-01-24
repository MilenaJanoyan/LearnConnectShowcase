import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import {getMe, logout} from "../../API/services/userService.ts";
import {IUserInfo} from "../../utils/types/user.ts";
import "./navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<Partial<IUserInfo | null>>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { state } = useLocation();

    const getUserInfo = async () => {
        try {
            const res = await getMe();
            if (res) {
                setUserInfo(res);
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.log(err);
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        getUserInfo()
    }, [state]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    const logoutUser = async () => {
        try{
            const res = await logout();
            if (res) {
                navigate('/login')
                setUserInfo(null)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50">
            <nav
                className={`py-4 md:px-8 px-4 bg-[#e3d5ce] border-b-2 ${
                    isSticky ? "border-[#524c49] sticky top-0 right-0 left-0" : "border-[#3f3a38]"
                } opacity-95`}
            >
                <div className="flex items-center justify-between">
                    <div className="font-bold text-2xl cursor-pointer text-black w-[290px]">
                        <Link to={"/"}>
                            <span className="animated-text">
                              <span className="text-container">M</span>
                              <span className="initial-text2">J</span>
                            </span>
                        </Link>
                    </div>

                    <div className="lg:flex items-center gap-3 hidden text-[#252221] pr-60">
                        <Link to="/" className={`block hover:text-black py-2 px-4 ${
                            location.pathname === "/" ? "text-indigo-900" : ""
                        }`}>
                            Home
                        </Link>
                        <Link to="/cv-page" className={`block hover:text-black py-2 px-4 ${
                            location.pathname === "/cv-page" ? "text-indigo-900" : ""
                        }`}>
                            CV & Skills
                        </Link>
                        <Link to="/about" className={`block hover:text-black py-2 px-4 ${
                            location.pathname === "/about" ? "text-indigo-900" : ""
                        }`}>
                            About Me
                        </Link>
                        <Link to="/articles" className={`block hover:text-black py-2 px-4 ${
                            location.pathname === "/articles" ? "text-indigo-900" : ""
                        }`}>
                            Articles
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        {
                            userInfo ? (
                                <div className="flex justify-between items-center gap-2">
                                    <img className="w-8 h-8 rounded-full mr-2"
                                         src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                                         alt="User Avatar"/>
                                    <p>{userInfo?.email}</p>
                                    <div className="lg:block hidden" onClick={logoutUser}>
                                        <button className="btnLine">LogOut</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="lg:block hidden" onClick={() => navigate('/login')}>
                                    <button className="btnLine">Login</button>
                                </div>
                            )
                        }

                        {/* btn mobile */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden text-indigo-600 text-3xl"
                        >
                            {isMenuOpen ? <HiX/> : <HiMenu/>}
                        </button>
                    </div>
                </div>

                {/* menu for small devices */}
                <CSSTransition
                    in={isMenuOpen}
                    timeout={300}
                    classNames="mobile-menu"
                    unmountOnExit
                >
                    <div className="mobile-menu-overlay px-4 py-6">
                        <div className="mobile-menu">
                            <button onClick={toggleMenu} className="close-menu-btn text-black">
                                &times;
                            </button>
                            <Link to="/" onClick={toggleMenu} className="block hover:text-gray-400 py-2 px-4">
                                Home
                            </Link>
                            <Link to="/cv-page" onClick={toggleMenu} className="block hover:text-gray-400 py-2 px-4">
                                CV & Skills
                            </Link>
                            <Link to="/about" onClick={toggleMenu} className="block hover:text-gray-400 py-2 px-4">
                                About
                            </Link>
                            <Link to="/articles" onClick={toggleMenu} className="block hover:text-gray-400 py-2 px-4">
                                Articles
                            </Link>
                            {isLoggedIn ? (
                                <button onClick={() => {
                                    toggleMenu();
                                    logoutUser();
                                }} className="block hover:text-gray-400 py-2 px-4">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" onClick={toggleMenu} className="block hover:text-gray-400 py-2 px-4">
                                    Login
                                </Link>
                            )}
                        </div>

                    </div>
                </CSSTransition>
            </nav>
        </header>
    );
};

export default Navbar;
