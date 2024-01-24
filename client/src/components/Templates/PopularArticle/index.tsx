import {SubstringText} from "../../../utils/formaters.ts";
import {useState} from "react";
import {login} from "../../../API/services/userService.ts";
import {useNavigate} from "react-router-dom";

const PopularArticle = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)

    const handleLogin = async () => {
        try {
            const res = await login({ email, password })
            if (res) {
                navigate('/articles', { state: Math.random() })
            }
        } catch (err) {
            console.log(err)
        }
        onClose();
    };
    return (
        <div className="w-full min-h-screen bg-[#c2b4ad] flex items-center justify-center pb-24">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-4xl font-bold text-[#252221] uppercase pt-16">Popular articles</h1>
                </div>

                <div className="w-[140px] h-[6px] bg-[#252221]"/>

                <div className="flex justify-between items-center gap-8">

                    <div className="w-[350px] h-[500px] flex flex-col items-center gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                        <div>
                            <img className="w-[350px] h-[350px] object-cover" src="/images/photo_53.jpg" alt="img"/>
                        </div>
                        <div className="flex w-[60%] text-center">
                            <h3 className="text-2xl text-[#252221]">Entity Framework Insights</h3>
                        </div>
                        <div className="text-center">
                            { SubstringText('Entity Framework is an open-source Object-Relational Mapping (ORM) framework developed by Microsoft. It is a part of the .NET ecosystem and provides a powerful and convenient way to', 260) }
                        </div>
                    </div>

                    <div className="w-1 bg-[#a99f9a] h-[500px] rounded-full"/>

                    <div className="w-[350px] h-[500px] flex flex-col items-center gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                        <div>
                            <img className="w-[350px] h-[350px] object-cover" src="/images/photo_work.jpg" alt="img"/>
                        </div>
                        <div>
                            <h3 className="text-2xl text-[#252221]">Node.js Migrations</h3>
                        </div>
                        <div className="text-center">
                            { SubstringText('In Node.js, migrations refer to a way of managing and versioning changes to a database schema over time. Migrations are commonly used in web applications to keep track of changes to the database structure, such as creating new tables, modifying existing tables, or adding new columns.', 260) }
                        </div>
                    </div>

                    <div className="w-1 bg-[#a99f9a] h-[500px] rounded-full"/>

                    <div className="w-[350px] h-[500px] flex flex-col items-center gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                        <div>
                            <img className="w-[350px] h-[350px] object-cover" src="/images/photo_2024.jpg" alt="img"/>
                        </div>
                        <div>
                            <h3 className="text-2xl text-[#252221]">GraphQL Efficiency</h3>
                        </div>
                        <div className="text-center">
                            { SubstringText('GraphQL is a query language for APIs that was developed by Facebook. It enables clients to request exactly the data they need, nothing more and nothing less. GraphQL provides a more efficient and flexible alternative to traditional REST APIs', 260) }
                        </div>
                    </div>


                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md w-96">
                        <h2 className="text-2xl font-semibold mb-4">Login</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default PopularArticle;