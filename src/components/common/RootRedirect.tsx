import { Navigate } from 'react-router-dom';

export const RootRedirect = () => {
    // Can add logic here to detect browser language and redirect accordingly
    const detectedLang = 'en'; // default
    return <Navigate to={`/${detectedLang}`} replace />;
};
