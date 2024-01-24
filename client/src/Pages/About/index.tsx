
const About = () => {
    return (
        <div>
            <div id="about" className="relative bg-[#e3d5ce] overflow-hidden mt-[4.5rem]">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-[#e3d5ce] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="#e3d5ce" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main
                            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                    About me
                                </h2>

                                <p className="w-[450px]">
                                Welcome to Milena's World

Hello there! I'm Milena, and I'm thrilled to welcome you to my little corner of the internet. This website is more than just a digital space; it's a reflection of who I am, what I'm passionate about, and the journey I'm on.

Who Am I?


What Drives Me?


Why This Website?


Explore with Me


Connect with Me


Thank you for stepping into my world. Let's make this journey an unforgettable one!

Warm regards,
Milena
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                         src="/images/image.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;