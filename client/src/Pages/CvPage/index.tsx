import { MdWorkOutline} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { TbSettings2 } from "react-icons/tb";
import {DoughuntChart} from "../../components/elements/DoughuntChart";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiMiniLanguage } from "react-icons/hi2";
import './index.css'
import {Link} from "react-router-dom";

const CvPage = () => {


    const workSolicy = [
        { id: Date.now() + Math.random(), text: 'Led backend development projects using C# ASP.NET, ensuring robust and scalable solutions' },
        { id: Date.now() + Math.random(), text: 'Expanded skills to encompass frontend development, UI/UX design,manual testing, and project management' },
        { id: Date.now() + Math.random(), text: 'Collaborated seamlessly with international clients, demonstrating strong intercultural communication and teamwork' },
        { id: Date.now() + Math.random(), text: 'Spearheaded the backend development of a specific product,contributing to its success and client satisfaction' },
        { id: Date.now() + Math.random(), text: 'Proficient in managing databases, including SQL Server, MySQL, PostgreSQL, and MongoDB' },
        { id: Date.now() + Math.random(), text: 'Played a pivotal role in fostering effective communication and collaboration with frontend developers, ensuring project success' },
        { id: Date.now() + Math.random(), text: 'Maintained adaptability in dynamic project environments, showcasing versatility and a holistic approach to development.' },
        { id: Date.now() + Math.random(), text: 'Proven ability to deliver projects on time and contribute to a positive and collaborative team culture' },
        { id: Date.now() + Math.random(), text: 'Implemented code using design patterns, emphasizing structured documentation for enhanced maintainability in development projects.' }
    ]

    return (
        <div className="w-full bg-[#766259] min-h-screen flex items-center justify-center md:pt-28">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">

                <div className="flex flex-col gap-4">
                    <div className="text-white text-6xl flex">
                        <span className="font-light">EXPE</span>
                        <span className="font-bold">RIENCE</span>
                        <span className="ml-4">
                            <MdWorkOutline/>
                        </span>
                    </div>
                    <div className="ml-8">
                        <span className="text-white text-4xl">Solicy</span>
                        <ul className="list-disc text-white ml-4 text-xl flex flex-col gap-2 mt-4">
                            {workSolicy.map((item) => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-white text-6xl flex py-8">
                        <span className="font-light">EDU</span>
                        <span className="font-bold">CATIONS</span>
                        <span className="ml-4">
                            <FaGraduationCap/>
                        </span>
                    </div>
                    <div>
                        <div className="flex w-1/2 justify-between items-center text-white text-xl font-bold py-8">
                            <span className="w-1/2">2021 - 2024</span>
                            <span className="flex flex-col w-1/2">
                                <span>IU INTERNATIONAL UNIVERSITY</span>
                                <span>OF APPLIED SCIENCES</span>
                                <p>Bachelor of Computer Science</p>
                            </span>
                        </div>
                        <div className="flex w-1/2 justify-between items-center text-white text-xl font-bold">
                            <span className="w-1/2">2018 - 2021</span>
                            <span className="flex flex-col w-1/2">
                                <span>HIGH SCHOOL NAMED</span>
                                <span>AFTER A. KHACHATRYAN</span>
                            </span>
                        </div>
                    </div>

                    <div className="text-white text-6xl flex py-8">
                        <span className="font-light">SKI</span>
                        <span className="font-bold">LLS</span>
                        <span className="ml-4">
                            <TbSettings2/>
                        </span>
                    </div>

                    <div>
                        <div className="w-full  flex justify-between items-center text-white ">
                            <span className="flex flex-col gap-2 md:flex-wrap">
                                <DoughuntChart display={90} hide={10}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>C#</span>
                                    <span>AND ASP.NET</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={90} hide={10}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>DATABASE</span>
                                    <span>MANAGEMENT</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={80} hide={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>PROJECT</span>
                                    <span>MANAGEMENT</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={80} hide={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>CODE DESIGN</span>
                                    <span>PATTERNS</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={75} hide={25}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>API DEVELOPMENT</span>
                                    <span>(GRAPHQL AND</span>
                                    <span>RESTFUL)</span>
                                </span>
                            </span>
                        </div>
                        <div className="w-full flex justify-between items-center text-white">
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={60} hide={40}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>INTERCULTURAL</span>
                                    <span>COMMUNICATION</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={95} hide={5}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>TEAMWORK</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={50} hide={50}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>ADAPTABILITY</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={85} hide={15}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>PROBLEM</span>
                                    <span>-SOLVING</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-2">
                                <DoughuntChart display={75} hide={25}/>
                                <span className="flex flex-col items-center justify-center">
                                    <span>DOCUMENTATION</span>
                                    <span>PRACTICES</span>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div className="text-white text-6xl flex py-8">
                            <span className="font-light">LANG</span>
                            <span className="font-bold">UAGE</span>
                            <span className="ml-4">
                                <HiMiniLanguage/>
                            </span>
                        </div>

                        <div className="flex justify-between items-center pb-20 pt-8">


                            <div className="w-1/2 flex flex-col gap-6">
                                <div className="text-white text-xl flex items-center">
                                    <div className="w-1/3">
                                        Armenian
                                    </div>
                                    <div className="w-1/2">
                                        <ProgressBar
                                            completed={95}
                                            animateOnRender
                                            borderRadius={'0'}
                                            bgColor={'#2e2726'}
                                            baseBgColor={'#b6ada8'}
                                            isLabelVisible={false}
                                        />
                                    </div>
                                </div>
                                <div className="text-white text-xl flex items-center">
                                    <div className="w-1/3">
                                        English
                                    </div>
                                    <div className="w-1/2">
                                        <ProgressBar
                                            completed={80}
                                            animateOnRender
                                            borderRadius={'0'}
                                            bgColor={'#2e2726'}
                                            baseBgColor={'#b6ada8'}
                                            isLabelVisible={false}
                                        />
                                    </div>
                                </div>
                                <div className="text-white text-xl flex items-center">
                                    <div className="w-1/3">
                                        Russian
                                    </div>
                                    <div className="w-1/2">
                                        <ProgressBar
                                            completed={70}
                                            animateOnRender
                                            borderRadius={'0'}
                                            bgColor={'#2e2726'}
                                            baseBgColor={'#b6ada8'}
                                            isLabelVisible={false}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 flex flex-col text-white gap-2 pl-20">
                                <h3 className="text-3xl font-bold">Contact:</h3>
                                {/*<Link className="text-xl" to={`tel:+37477873780`}>*/}
                                {/*    +374 77 87 37 80*/}
                                {/*</Link>*/}
                                <Link className="text-xl" to={`mailto:milena.janoyan@iu-study.org`}>
                                    milena.janoyan@iu-study.org
                                </Link>
                                <span className="text-xl">Yerevan, Armenia</span>
                                <Link className="text-xl underline" to={`https://www.linkedin.com/in/milenajanoyan`}>
                                    Linkedin
                                </Link>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CvPage;
