
const CvPage = () => {
    return (
        <div className="w-full bg-[#e3d5ce] min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">

                <div className="md:w-1/3 text-center mb-8 md:mb-0">
                    <div className="flex gap-8 items-center">
                        <img
                            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4"
                            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                            alt="Profile Photo"
                        />
                        <div>
                            <h1 className="text-2xl font-bold mb-2">Name Surname</h1>
                            <p className="text-sm text-gray-600">Data</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col self-start">
                        <h2 className="text-lg font-bold mb-2">Skills</h2>
                        <div>
                            skill 1
                        </div>
                        <div>
                            skill 2
                        </div>
                        <div>
                            skill 3
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 text-gray-700">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Info</h2>
                        <p>Info Desc</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-2">Hobby</h2>
                        <p>Text Hobby </p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-2">Contacts</h2>
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                        <p>LinkedIn: linkedin.com/in/example</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvPage;
