import { SubstringText } from "../../../utils/formaters.ts";
import { useEffect, useState } from "react";
import { getMe, login } from "../../../API/services/userService.ts";
import { useNavigate } from "react-router-dom";
import { IUserInfo } from "../../../utils/types/user.ts";
import { ROLE_USER, SUPER_ADMIN } from "../../../utils/constantUrls.ts";
import { getPopularPosts } from "../../../API/services/postService.ts";
import { IPopularPosts } from "../../../utils/types/post.ts";

const PopularArticle = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [userInfo, setUserInfo] = useState<null | IUserInfo>(null);
    const [popularPosts, setPopularPosts] = useState<IPopularPosts[] | null>(
        null
    );
    const [isAuth, setIsAuth] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState<null | string>(null);

    const getUserInfo = async () => {
        try {
            const res = await getMe();
            if (res) {
                setUserInfo(res);
                setIsAuth(Boolean(res?.role === SUPER_ADMIN || ROLE_USER));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const popular = async () => {
        try {
            const res = await getPopularPosts(3);
            if (res) {
                setPopularPosts(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUserInfo();
        popular();
    }, []);

    const onClose = () => setIsOpen(false);

    const handleLogin = async () => {
        try {
            const res = await login({ email, password });
            if (res) {
                navigate(`/article/${selectedPostId}`, { state: Math.random() });
            } else {
                setIsOpen(true);
            }
        } catch (err) {
            console.log(err);
        }
        onClose();
        setSelectedPostId(null);
    };

    const handleClickPopularPost = (postId: string) => {
        setSelectedPostId(postId);
        if (isAuth) {
            navigate(`/article/${postId}`);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#f5ebe6] flex items-center justify-center pb-24">
            <div className="flex flex-col gap-8 w-full max-w-screen-xl px-4">
                <div>
                    <h1 className="text-4xl font-bold text-[#252221] uppercase pt-16">
                        Popular articles
                    </h1>
                </div>

                <div className="w-[140px] h-[6px] bg-[#252221]"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {popularPosts?.length &&
                        popularPosts.map((post) => (
                            <div
                                className="flex flex-col  gap-2 cursor-pointer"
                                onClick={() => handleClickPopularPost(post._id)}
                                key={post._id}
                            >
                                <div>
                                    <img
                                        className="w-full h-[350px] object-cover"
                                        src={`${process.env.REACT_APP_API_URL}${post.imageUrl}`}
                                        alt="img"
                                    />
                                </div>
                                <div className="flex w-full">
                                    <h3 className="text-2xl text-[#252221]">{post.title}</h3>
                                </div>
                                <div className="p-4">{SubstringText(post.text, 260)}</div>
                            </div>
                        ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md w-96">
                        <h2 className="text-2xl font-semibold mb-4">Login</h2>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
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
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
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
    );
};

export default PopularArticle;
