import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';
import '../lib/i18n'; // Initialize i18n
import '../index.css';

export const AppProvider = () => {
    return (
        <HelmetProvider>
            <AppRoutes />
        </HelmetProvider>
    );
};
