import { useEffect, useState } from "react";
import { IUserInfo } from "../../utils/types/user.ts";
import { getMe } from "../../API/services/userService.ts";
import { useNavigate } from "react-router-dom";
import { SUPER_ADMIN } from "../../utils/constantUrls.ts";
import { getAllPosts } from "../../API/services/postService.ts";
import { IPostResponse } from "../../utils/types/post.ts";
import Spinner from "../../components/Spinner";
import { SubstringText } from "../../utils/formaters.ts";
import Slider from "react-slick";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Articles = () => {
    const [userInfo, setUserInfo] = useState<Partial<IUserInfo | null>>(null);
    const [allPosts, setAllPosts] = useState<IPostResponse[]>([]);
    const navigate = useNavigate();
    const isAdmin = userInfo?.role === SUPER_ADMIN;
    const [isLoading, setIsLoading] = useState(false);

    const getArticles = async () => {
        try {
            setIsLoading(true);
            const res = await getAllPosts();
            setAllPosts(res);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const getUserInfo = async () => {
        try {
            setIsLoading(true);
            const res = await getMe();
            if (res) {
                setUserInfo(res);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const navigateArticlePage = (id: string) => {
        if  (userInfo?.role) {
            navigate(`/article/${id}`);
        } else {
            navigate('/login')
        }
    };

    useEffect(() => {
        getUserInfo();
        getArticles();
    }, []);

    const settings = {
        speed: 500,
        slidesToShow: 3,
    };

    if (isLoading) return <Spinner loading={isLoading} />;

    const largeArticles = allPosts.slice(0, 2);

    return (
        <div className="w-full min-h-screen bg-[#f5ebe6] flex flex-col items-center justify-center pt-24 pb-8">
            <div className="container-md mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-wrap justify-between gap-4">
                <div className="w-full flex justify-end">
                    {isAdmin && (
                        <button
                            className="mb-4 cursor-pointer bg-[#2c363f] text-white py-2 px-2 rounded hover:opacity-80"
                            onClick={() => navigate("/article")}
                        >
                            Create Article
                        </button>
                    )}
                </div>
                <div className="w-full flex flex-wrap gap-8 justify-center ">
                    {largeArticles?.map((post, index) => {
                        return (
                            <>
                                {index === 0 ? (
                                    <div className="flex gap-20 pb-16">
                                        <div className="box flex-1">
                                            <div className="box1"></div>
                                            <div
                                                className="box1 box2"
                                                style={{
                                                    backgroundImage: `url(${process.env.REACT_APP_API_URL}${post.imageUrl})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="flex-[1] text-center">
                                            <div className="text-3xl pb-8 pt-16">{post.title}</div>
                                            <div className="text-xl pb-4">
                                                {SubstringText(post.text, 680)}
                                            </div>
                                            <div onClick={() => navigateArticlePage(post._id)}>
                                                <button className="btnLine">Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-20 pb-16">
                                        <div className="flex-[1] text-center">
                                            <div className="text-3xl pb-8 pt-16">{post.title}</div>
                                            <div className="text-xl pb-4">
                                                {SubstringText(post.text, 680)}
                                            </div>
                                            <div onClick={() => navigateArticlePage(post._id)}>
                                                <button className="btnLine">Read more</button>
                                            </div>
                                        </div>
                                        <div className="box flex-1">
                                            <div className="box1"></div>
                                            <div
                                                className="box1 box3"
                                                style={{
                                                    backgroundImage: `url(${process.env.REACT_APP_API_URL}${post.imageUrl})`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>

            <div style={{ maxWidth: "100%", padding: "10px 200px" }}>
                <div>
                    {
                        allPosts && allPosts.length > 0 && (
                            <Slider {...settings} className="w-full">
                                {allPosts.map((post) => {
                                    return (
                                        <div className="w-full" key={post._id}>
                                            <div
                                                className="flex w-[320px] flex-col  gap-2 cursor-pointer">
                                                <div>
                                                    <img
                                                        className="w-full h-[400px] object-cover"
                                                        src={`${process.env.REACT_APP_API_URL}${post.imageUrl}`}
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="flex w-full">
                                                    <h3 className="text-2xl text-[#252221]">
                                                        {post.title}
                                                    </h3>
                                                </div>
                                                <div>
                                                    {SubstringText(post.text, 260)}
                                                </div>
                                                <div onClick={() => navigateArticlePage(post._id)}>
                                                    <button className="btnLine">Read more</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Articles;
