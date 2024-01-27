import './home.css';

export const BriefInfo = () => {
    return (
        <div className="w-full min-h-screen bg-[#f5ebe6] flex items-center justify-center pt-20">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex relative flex-col md:flex-row">
                <div
                    className="w-full md:w-1/2 h-full py-16 justify-center items-center relative z-10 text-center md:text-left">
                    <div className="w-[140px] h-[6px] bg-black mb-6"/>
                    <div>
                        <h1 className="text-4xl md:text-7xl text-[#252221] font-bold mb-4">
                            <div>I'M MILENA</div>
                            <div>A WEB DEVELOPER</div>
                        </h1>
                    </div>
                    <p className="text-md text-[#252221] md:text-xl mb-4 md:mb-6">I craft high-performing, beautiful websites that are
                        conversion-focused, brand-accurate, & people-friendly</p>
                    <button className="btnLetsTalk" onClick={() => window.open('https://www.linkedin.com/in/milenajanoyan', "_blank")}>Let's Talk</button>
                </div>

                <div className="w-full md:w-1/2 relative md:right-20 z-0">
                    <div className="relative h-60 md:h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/image.jpg"
                            alt="photo"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}