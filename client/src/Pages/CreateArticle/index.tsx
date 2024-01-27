import { SimpleMdeReact } from "react-simplemde-editor";
import {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {$authHost, $host} from "../../API/axiosConfig.ts";
import {useNavigate, useParams} from "react-router-dom";
import {getOnePosts} from "../../API/services/postService.ts";
import { toast } from "react-toastify";
import SpinnerOverlay from "../../components/Spinner";
import "easymde/dist/easymde.min.css";

const CreateArticle = () => {
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = Boolean(id);

    const getArticle = async () => {
        try {
            if (id) {
                const article = await getOnePosts(id)
                setImageUrl(article.imageUrl)
                setTags(article.tags.join(','))
                setTitle(article.title)
                setText(article.text)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getArticle()
    }, []);


    const onChange = useCallback((value: string) => {
        setText(value);
    }, []);

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const files = e.target.files;

            if (files && files.length > 0) {
                const formData = new FormData();
                const file = files[0];
                formData.append("image", file);
                const { data } = await $host.post('/upload', formData);
                setImageUrl(data.url);
            } else {
                console.error('No files selected');
            }
        } catch (err) {
            console.error(err, 'upload file error');
        }
    };

    const handleTagsChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value);
    }, []);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const postData = {
                title,
                text,
                imageUrl,
                tags
            }
            const { data } = !isEditing
                ? await $authHost.post('/post', postData)
                : await $authHost.put(`/post/${id}`, postData)
            const postId = !isEditing ? data._id : id;
            const toastMessage = !isEditing ? 'Article added' : 'Article updated';
            navigate(`/article/${postId}`, { replace: true });
            toast(toastMessage, { type: 'success' })
        } catch (error) {
            console.error("Error creating article:", error);
            toast('error when publishing article', { type: 'error' })
        } finally {
            setLoading(false)
        }
    };

    const options = useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "400px",
            autofocus: true,
            placeholder: "Enter text",
            status: false,
        }),
        []
    );

    if (loading) {
        return <SpinnerOverlay loading={true} />
    }

    return (
        <div className="w-full pt-24 bg-[#f5ebe6] flex flex-col justify-center p-4 md:p-8 lg:py-24 lg:px-36 ">
            <h1 className="text-2xl font-bold mb-4">Create Article Page</h1>

            <div className="flex flex-col items-center gap-4 self-start">
                <label htmlFor="imageInput"
                       className="mb-4 cursor-pointer bg-[#2c363f] text-white py-2 px-2 rounded hover:opacity-80 self-start">
                    Add picture
                    <input
                        type="file"
                        id="imageInput"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>

                {
                    imageUrl && (
                        <div className="pb-6 w-1/2 self-start">
                            <button onClick={() => setImageUrl(null)}>Delete</button>
                            <img src={`${process.env.REACT_APP_API_URL}${imageUrl}`} alt="img"/>
                        </div>
                    )
                }
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Article title"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <input
                    type="text"
                    placeholder="Tags (separated by commas)"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    onChange={handleTagsChange}
                    value={tags}
                />
            </div>

            <div className="mb-4">
                <SimpleMdeReact value={text} onChange={onChange} options={options}/>
            </div>

            <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 self-start">
                { !isEditing ? 'Publish' : 'Save' }
            </button>
        </div>
    );
};

export default CreateArticle;
