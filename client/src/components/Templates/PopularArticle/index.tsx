import { SubstringText } from "../../../utils/formaters.ts";
import { useEffect, useState } from "react";
import {
  getMe,
  login,
  registration,
} from "../../../API/services/userService.ts";
import { useNavigate } from "react-router-dom";
import { IUserInfo } from "../../../utils/types/user.ts";
import {
  ROLE_USER,
  SUPER_ADMIN,
  TYPE_LOGIN,
  TYPE_REGISTER,
} from "../../../utils/constantUrls.ts";
import { getPopularPosts } from "../../../API/services/postService.ts";
import { IPopularPosts } from "../../../utils/types/post.ts";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "./article.css";

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
  const [actionType, setActionType] = useState<string>(TYPE_LOGIN);

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

  const changeAction = () => {
    if (actionType === TYPE_LOGIN) {
      setActionType(TYPE_REGISTER);
    } else {
      setActionType(TYPE_LOGIN);
    }
  };

  useEffect(() => {
    getUserInfo();
    popular();
  }, []);

  const onClose = () => setIsOpen(false);

  const handleLogin = async () => {
    try {
      let res;

      if (actionType === TYPE_LOGIN) {
        res = await login({ email, password });
      }

      if (actionType === TYPE_REGISTER) {
        res = await registration({ email, password });
      }

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

  console.log(actionType);

  return (
    <div className="w-full min-h-screen bg-[#f5ebe6] flex items-center justify-center pb-24">
      <div className="flex flex-col gap-8 w-full max-w-screen-xl px-4">
        <div>
          <h1 className="text-4xl font-bold text-[#252221] uppercase pt-16">
            Popular articles
          </h1>
        </div>

        <div className="w-[140px] h-[6px] bg-[#252221]" />

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
                <div className="pt-2">{SubstringText(post.text, 260)}</div>
              </div>
            ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="authModalContainer w-full h-full flex">
            <div className="leftContent w-1/2 p-8 relative">
              <h1 className="text-5xl text-[#f5ebe6] font-semibold my-24 text-center">
                MJ
              </h1>
              <div className="leftContentText absolute bottom-8 left-8 text-white flex flex-col  gap-4">
                <div className="flex items-center justify-center gap-8">
                  <Link
                    to={"https://www.linkedin.com/in/milenajanoyan"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl cursor-pointer hover:opacity-80" />
                  </Link>
                  <Link
                    to={"https://twitter.com/JanoyanMilena"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareTwitter className="text-xl cursor-pointer hover:opacity-80" />
                  </Link>
                  <Link to={`mailto:milena.janoyan@iu-study.org`}>
                    <MdEmail className="text-xl cursor-pointer hover:opacity-80" />
                  </Link>
                  <Link
                    to={`https://github.com/MilenaJanoyan`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareGithub className="text-xl cursor-pointer hover:opacity-80" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightContent w-1/2">
              <div className="closeButton" onClick={onClose}>
                <span>&times;</span>
              </div>
              <div className="authModal rounded-2xl w-3/4 h-3/4 relative">
                <div className="bg-image-blur"></div>

                <h2 className="text-4xl text-[#f5ebe6] font-semibold mb-8">
                  {actionType === TYPE_LOGIN ? "Login" : "Registration"}
                </h2>
                <div className="mb-4">
                  <label
                    className="block text-[#f5ebe6] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#f5ebe6] text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="buttonContainer">
                    <button
                      className="bg-black text-xl opacity-50 text-white hover:opacity-80 px-6 py-2 rounded-md mr-2 flex content-center items-center"
                      onClick={handleLogin}
                    >
                      {actionType === TYPE_LOGIN ? "Login" : "Registration"}
                      <IoIosArrowForward className="icon" />
                    </button>
                  </div>
                  <span
                    className="cursor-pointer text-sm w-full"
                    onClick={changeAction}
                  >
                    {actionType === TYPE_LOGIN
                      ? "Don't have an account?"
                      : "Have an account?"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularArticle;
