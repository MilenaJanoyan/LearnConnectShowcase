import {IPostResponse} from "../../utils/types/post.ts";
import {useNavigate} from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import {formatDateTime} from "../../utils/formaters.ts";


const Post = ({ _id, tags, imageUrl, viewsCount, comments, createdAt, title, isAdmin } : IPostResponse) => {

    const navigate = useNavigate();

    const navigateArticlePage = () => {
        navigate(`/article/${_id}`)
    }

    return (
        <div className="w-full md:w-1/2 md:items-center lg:w-[30rem]">
            <div className="w-full bg-white rounded-md overflow-hidden shadow-md">
                <div className="relative">
                    <img
                        className="w-full h-[320px]"
                        src={`${imageUrl ? `${process.env.REACT_APP_API_URL}${imageUrl}` : 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'}`}
                        alt="img"
                    />
                    <div className="absolute top-0 right-0 flex gap-4 p-2">
                        {
                            isAdmin && <FaEdit color={"#fff"} className="cursor-pointer opacity-70 hover:opacity-100" onClick={() => navigate(`/article/edit/${_id}`)} />
                        }
                    </div>
                </div>
                <div className="p-4 cursor-pointer" onClick={navigateArticlePage}>
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-sm text-gray-600">{formatDateTime(createdAt)}</p>
                </div>
                <div className="p-4">
                    <ul className="flex space-x-2">
                        {
                            tags.map((tag: string) => {
                                return (
                                    <li className="bg-gray-200 p-2 rounded">{tag}</li>
                                )
                            })
                        }
                        {
                            !tags.length && <li className="bg-gray-200 p-2 rounded">No tags</li>
                        }
                    </ul>
                </div>
                <div className="p-4 flex justify-between text-sm text-gray-600">
                    <p>Comments: {comments.length}</p>
                    <p>Views: {viewsCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;