import Post from "../../components/Post";
import {useEffect, useState} from "react";
import {IUserInfo} from "../../utils/types/user.ts";
import {getMe} from "../../API/services/userService.ts";
import {useNavigate} from "react-router-dom";
import {SUPER_ADMIN} from "../../utils/constantUrls.ts";
import {getAllPosts} from "../../API/services/postService.ts";
import {IPostResponse} from "../../utils/types/post.ts";
import Spinner from "../../components/Spinner";

const Articles = () => {

    const [userInfo, setUserInfo] = useState<Partial<IUserInfo | null>>(null)
    const [allPosts, setAllPosts] = useState<IPostResponse[]>([])
    const navigate = useNavigate()
    const isAdmin = userInfo?.role === SUPER_ADMIN
    const [isLoading, setIsLoading] = useState(false)

    const getArticles = async () => {
        try {
            setIsLoading(true)
            const res = await getAllPosts()
            setAllPosts(res)

        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    const getUserInfo = async () => {
        try {
            setIsLoading(true)
            const res = await getMe()
            if (res) {
                setUserInfo(res)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUserInfo()
        getArticles()
    }, []);

    if (isLoading) return <Spinner loading={isLoading} />

    return (
        <div className="w-full min-h-screen bg-[#e3d5ce] flex items-center justify-center pt-24 pb-8">
            <div className="container-md mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-wrap justify-between gap-4">
                <div className="w-full flex justify-end">
                    {
                        isAdmin && (
                            <button
                                className="mb-4 cursor-pointer bg-[#2c363f] text-white py-2 px-2 rounded hover:opacity-80"
                                onClick={() => navigate('/article')}>Create Article</button>
                        )
                    }
                </div>
                <div className="w-full flex flex-wrap gap-8 justify-center ">
                    {
                        allPosts?.map((post: IPostResponse) => {
                            return <Post
                                text={post.text}
                                _id={post._id}
                                viewsCount={post.viewsCount}
                                comments={post.comments}
                                tags={post.tags}
                                createdAt={post.createdAt}
                                title={post.title}
                                imageUrl={post.imageUrl}
                                user={post.user}
                                updatedAt={post.updatedAt}
                                isAdmin={isAdmin}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Articles;