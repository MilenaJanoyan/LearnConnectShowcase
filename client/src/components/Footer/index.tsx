import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-8 md:px-8 px-4 bg-[#c2b4ad] border-t-2 border-[#252221]">
      <div className="px-16 flex justify-between items-center text-[#252221]">
        <div className="flex">
          <Link to="/" className="block hover:text-gray-400 py-2 px-4">
            Home
          </Link>
          <Link to="/cv-page" className="block hover:text-gray-400 py-2 px-4">
            Cv and Skills
          </Link>
          <Link to="/about" className="block hover:text-gray-400 py-2 px-4">
            About Me
          </Link>
          <Link to="/articles" className="block hover:text-gray-400 py-2 px-4">
            Articles
          </Link>
        </div>
        <div className="flex gap-8">
          <Link
            to={"https://www.linkedin.com/in/milenajanoyan"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl cursor-pointer hover:opacity-80" />
          </Link>
          <Link
            to={"https://twitter.com/JanoyanMilena"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareTwitter className="text-3xl cursor-pointer hover:opacity-80" />
          </Link>
          <Link to={`mailto:milena.janoyan@iu-study.org`}>
            <MdEmail className="text-3xl cursor-pointer hover:opacity-80" />
          </Link>
          <Link
            to={`https://github.com/MilenaJanoyan`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="text-3xl cursor-pointer hover:opacity-80" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
