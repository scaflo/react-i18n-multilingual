import { useEffect } from 'react';
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PARAM_SUPPORTED_LANGUAGES = ['en', 'hi', 'od'];
const DEFAULT_LANGUAGE = 'en';

export const LanguageRoute = () => {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();
    // const location = useLocation();

    const isValidLanguage = lang && PARAM_SUPPORTED_LANGUAGES.includes(lang);

    useEffect(() => {
        if (isValidLanguage && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, isValidLanguage, i18n]);

    if (!isValidLanguage) {
        // If language is missing or invalid, redirect to default language
        // Preserve the rest of the path if possible, or go to root
        // For now, simpler redirect to default + path
        // Remove the invalid lang segment if it looks like a lang, or preprend default
        // Case 1: /invalid/about -> /en/about (if invalid is 2 chars?)
        // Case 2: /about -> /en/about

        // Simple strategy: Redirect to /en
        return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
    }

    return <Outlet />;
};
