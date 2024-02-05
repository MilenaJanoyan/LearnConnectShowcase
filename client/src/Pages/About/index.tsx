
const About = () => {
    return (
        <div>
            <div id="about" className="relative bg-[#f5ebe6] overflow-hidden mt-[4.5rem]">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-[#f5ebe6] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-[7rem] text-white transform translate-x-1/2"
                            fill="#f5ebe6" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-5xl font-bold mb-6 w-full">Salutations! I'm Milena</h1>

                                <p className="text-2xl w-full">
                                    An ardent coder weaving together the intricacies of programming and the kaleidoscope of life's pursuits.
                                </p>

                                <div className="mt-8">
                                    <h2 className="text-4xl font-bold mb-4">Educational Sojourn:</h2>
                                    <p className=" text-2xl w-full">
                                        Originally set on the path to becoming a doctor, my narrative took a serendipitous turn. Fueled by my emotional compass and a blossoming love for coding, I redirected my trajectory. This odyssey led me to the doors of IU International University of Applied Sciences.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-4xl font-bold mb-4">Harmony of Work and Study:</h2>
                                    <p className=" text-2xl w-full">
                                        In synchrony with my studies, I plunged into the realm of software development. Commencing as an intern at a dynamic software company, I discovered the symphony between theoretical knowledge and real-world application. It's a dance of intellect and practice, propelling my curiosity and determination.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-4xl font-bold mb-4">Coding Palette Unveiled:</h2>
                                    <p className="w-full text-2xl">
                                        My coding canvas spans a vibrant spectrum of technologies. Proficient in .NET development and the eloquent language of C#, I navigate the intricate landscapes of relational databases, seamlessly switching between SQL Server, PostgreSQL, and MySQL. On the ever-evolving web frontier, I boldly traverse Node.js, Nest.js, Next.js, and React.js. Here, I craft not just applications but narratives—authentic stories embodied in every line of code.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-4xl font-bold mb-4">Beyond the Binary:</h2>
                                    <p className="w-full text-2xl">
                                        Outside the realm of code, I find solace in the melody of piano keys, sketching on the canvas of creativity, and exploring the expansive territories of chemistry and mathematics. Life, after all, is a symphony composed of logic and art, each note resonating with endless possibilities.
                                    </p>
                                </div>

                                <p className="mt-8 w-full text-2xl">
                                    Embark on this odyssey where logic dances with creativity, and technology serves as a canvas for innovation. Let's script a vibrant future together!
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/images/image.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;