import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Home from "../Pages/Home";
import CvPage from "../Pages/CvPage";
import Skills from "../Pages/About";
import Articles from "../Pages/Articles";
import CreateArticle from "../Pages/CreateArticle";
import ArticlePage from "../Pages/ArticlePage";
import About from "../Pages/About";
import Authentication from "../Pages/Authentication";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <Home />},
            {path: 'cv-page', element: <CvPage />},
            {path: 'skills', element: <Skills />},
            {path: 'about', element: <About />},
            {path: 'login', element: <Authentication />},
            {path: 'registration', element: <Authentication />},
            {path: 'articles', element: <Articles />},
            {path: 'article', element: <CreateArticle />},
            {path: 'article/edit/:id', element: <CreateArticle />},
            {path: 'article/:id', element: <ArticlePage />},
        ]
    }
])