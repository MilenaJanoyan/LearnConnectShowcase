import { BriefInfo } from "../../components/Templates/BriefInfo";
import Services from "../../components/Templates/Services";
import PopularArticle from "../../components/Templates/PopularArticle";

const Home = () => {
    return (
        <>
            <BriefInfo />
            <Services />
            <PopularArticle />
        </>
    );
};

export default Home;
