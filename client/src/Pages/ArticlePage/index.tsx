import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addComment, deletePost, getOnePosts } from "../../API/services/postService.ts";
import { ICommentData, IPostResponse } from "../../utils/types/post.ts";
import { formatDateTime } from "../../utils/formaters.ts";
import Markdown from "react-markdown";
import { getMe } from "../../API/services/userService.ts";
import { IUserInfo } from "../../utils/types/user.ts";
import { SUPER_ADMIN } from "../../utils/constantUrls.ts";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const ArticlePage = () => {

    const { id } = useParams();
    const [userInfo, setUserInfo] = useState<Partial<IUserInfo | null>>(null)
    const [article, setArticle] = useState<Partial<IPostResponse>>({})
    const [comment, setComment] = useState('')
    const [showWarning, setShowWarning] = useState(false)
    const isAdmin = userInfo?.role === SUPER_ADMIN;
    const navigate = useNavigate();
    const { state } = useLocation();
    const getPost = async () => {
        try {
            if (id) {
                const post = await getOnePosts(id)
                setArticle(post)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const removePost = async () => {
        try {
            if (id) {
                const response = await deletePost(id)
                if (response) {
                    toast('Article deleted', { type: 'success' })
                    navigate('/articles')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const sendComment = async () => {
        try {
            userInfo ? setShowWarning(false) : setShowWarning(true)
            if (comment.trim() !== '') {
                const commentData: Partial<ICommentData> = {
                    id,
                    userId: userInfo?.id,
                    userEmail: userInfo?.email,
                    comment
                }

                const response = await addComment(commentData)
                if (response) {
                    getPost()
                    setComment('')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const getUserInfo = async () => {
        try {
            const res = await getMe()
            if (res) {
                setUserInfo(res)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const editArticle = () => {
        navigate(`/article/edit/${id}`)
    }

    useEffect(() => {
        getPost()
        getUserInfo()
    }, [state]);


    return (
        <div className="w-full min-h-screen bg-[#f5ebe6] flex flex-col items-center pt-24">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full md:flex md:flex-col md:justify-between">
                <div className="w-full mb-8 md:mb-0">
                    <img className="w-full h-[400px] object-cover" src={`${process.env.REACT_APP_API_URL}${article.imageUrl}`} alt="img" />
                    <div className="flex py-4 gap-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h3>Date</h3>
                            <p className="text-lg text-gray-400">{formatDateTime(article.createdAt)}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-lg text-gray-400">View: {article.viewsCount}</p>
                            <p className="text-lg text-gray-400">Comments: {article.comments?.length}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <h1 className="text-6xl py-4">{article.title}</h1>
                        {
                            isAdmin && (
                                <div className='flex items-center gap-4'>
                                    <MdDeleteForever onClick={removePost} width={25} height={25} className="text-gray-500 w-[30px] h-[30px] cursor-pointer" />
                                    <CiEdit onClick={editArticle} width={25} height={25} className="text-gray-500 w-[30px] h-[30px] cursor-pointer" />
                                </div>
                            )
                        }
                    </div>
                    {
                        !!article.tags?.length && <span>Tags</span>
                    }
                    <div>
                        <ul className="flex space-x-2">
                            {
                                article.tags?.map((tag, index) => {
                                    return (
                                        <li key={index} className="bg-[#766259] text-white p-2 rounded opacity-40">{tag}</li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="pt-4 text-xl">
                        <Markdown>
                            {article.text}
                        </Markdown>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pt-8">
                    <div>
                        <h3 className="text-2xl mb-4">Comments</h3>

                        {
                            article?.comments?.map(comment => {
                                return (
                                    <div className="mb-4 border-b pb-4" key={comment.id}>
                                        <div className="flex items-center mb-2">
                                            <img className="w-8 h-8 rounded-full mr-2" src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                                                alt="User Avatar" />
                                            <div>
                                                <h4>{comment.userEmail}</h4>
                                                <p>{comment.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pb-8">
                        <h4 className="text-2xl mb-2">Add a Comment</h4>
                        <div className="flex items-center mb-2">
                            <textarea className="w-full p-2 border rounded resize-none"
                                placeholder="Write your comment..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </div>
                        <button className="bg-[#766259] opacity-80 text-white px-4 py-2 rounded hover:opacity-40" onClick={sendComment}>Add Comment</button>
                        <div className='pt-4'>
                            {
                                showWarning && (
                                    <>
                                        <span className="text-red-600 text-base">To write a comment you need to </span>
                                        <Link to="/login" className="text-base italic">login</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
