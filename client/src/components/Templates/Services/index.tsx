import {AnimatePresence, motion} from "framer-motion";
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import {useState} from "react";

const Services = () => {

    const [activeTag, setActiveTag] = useState<number | null>(null);

    const handleMouseOver = (index: number) => {
        setActiveTag(index);
    };

    const handleMouseLeave = () => {
        setActiveTag(null);
    };

    const skillsContent = [
        { id: 1, title: 'C#/.NET Developer',url: 'https://dotnet.microsoft.com/en-us/',  text: 'As a C#/.NET Developer, I specialize in crafting robust and scalable applications using the versatile C# programming language and the powerful .NET framework. My expertise lies in developing backend systems, desktop applications, and web services that leverage the full potential of Microsoft\'s technology stack.' },
        { id: 2, title: 'React.js Developer',url: 'https://react.dev',  text: 'As a React.js Developer, I excel in building dynamic and responsive user interfaces. Using the React.js library, I create seamless and engaging web applications that offer a smooth user experience. My focus is on front-end development, leveraging React\'s component-based architecture to bring designs to life.' },
        { id: 3, title: 'Node.js Developer',url: 'https://nodejs.org/en',  text: 'In the realm of Node.js development, I am proficient in building scalable and efficient server-side applications. Leveraging the asynchronous, event-driven architecture of Node.js, I specialize in creating high-performance backend solutions. From API development to server-side scripting, I bring versatility to the world of JavaScript.' },
    ]

    return (
        <div className="w-full min-h-screen bg-[#484240] flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between md:flex-row">
                <div className="w-full md:w-1/3 h-full py-16 justify-center items-center text-center md:text-left">
                    <div className="w-[140px] h-[6px] bg-[#e3d5ce] mb-6"/>
                    <div>
                        <h1 className="text-4xl md:text-6xl text-[#e3d5ce] font-bold mb-4">SERVICES I OFFER</h1>
                    </div>
                    <p className="text-md md:text-xl text-[#e3d5ce] mb-4 md:mb-6">
                        I will help with finding a solution and solve your problem
                    </p>
                    <div
                        onClick={() => window.open('https://www.linkedin.com/in/milenajanoyan', "_blank")}
                        className="w-[120px] h-[120px] bg-[#e3d5ce] cursor-pointer rounded-full text-[#252221] text-xl uppercase flex flex-col justify-center items-center hover:opacity-80 transition duration-200 ease-in-out">
                        <span className="font-bold">Let's</span>
                        <span className="font-bold">Talk</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 md:right-20 ">
                    <div className="md:h-full flex flex-col justify-around gap-8">
                        {skillsContent.map((item, index) => (
                            <AnimatePresence initial={false}>
                                <div
                                    key={item.id}
                                    className="flex flex-col gap-6"
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="flex gap-6">
                                        <div className={`text-[#e3d5ce] w-full ${activeTag === index ? 'active' : ''}`}>
                                            <h3 className="text-4xl pb-4">
                                                <span className="font-bold">0{index + 1}</span> {item.title}
                                            </h3>
                                            {activeTag === index && (
                                                <motion.div
                                                    key="content"
                                                    initial="collapsed"
                                                    animate="open"
                                                    exit="collapsed"
                                                    variants={{
                                                        open: {opacity: 1, height: 'auto'},
                                                        collapsed: {opacity: 0, height: 0},
                                                    }}
                                                    style={{overflow: 'hidden'}}
                                                    transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                                                >
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </div>
                                        <span className="cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
                                            <BsArrowUpRightCircleFill color="#e3d5ce" size={25}/>
                                        </span>
                                    </div>
                                    <span className="w-full h-0.5 bg-[#e3d5ce]"/>
                                </div>
                            </AnimatePresence>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;