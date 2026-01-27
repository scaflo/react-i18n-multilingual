import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageRoute } from '../components/common/LanguageRoute';
import { RootRedirect } from '../components/common/RootRedirect';
import { Layout } from '../components/layout/Layout';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

// Placeholder Pages (will move later)
import { ProjectsPage } from '../pages/ProjectsPage';
import { ContactPage } from '../pages/ContactPage';

const NotFoundPage = () => <h1 className="text-3xl font-bold text-red-500">404 Not Found</h1>;

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRedirect />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/:lang',
        element: <LanguageRoute />,
        children: [
            {
                path: '',
                element: <Layout />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: 'about', element: <AboutPage /> },
                    { path: 'projects', element: <ProjectsPage /> },
                    { path: 'contact', element: <ContactPage /> },
                    { path: '*', element: <NotFoundPage /> },
                ],
            },
        ],
    },
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
