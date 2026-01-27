import React from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps, useParams } from 'react-router-dom';

interface LinkProps extends RouterLinkProps {
    lang?: string; // Optional override
}

export const Link: React.FC<LinkProps> = ({ children, to, lang: langOverride, ...props }) => {
    const { lang: currentLang } = useParams<{ lang: string }>();
    const language = langOverride || currentLang || 'en';

    let toPath = to;

    if (typeof to === 'string' && to.startsWith('/')) {
        // Ensure we don't double prefix if 'to' already includes the lang
        // But simple strategy: 'to' is always relative to lang root in our mental model? 
        // Plan said: "Conceptually: /projects -> /en/projects"
        // So input '/projects' should become '/en/projects'

        toPath = `/${language}${to}`;
    }

    return (
        <RouterLink to={toPath} {...props}>
            {children}
        </RouterLink>
    );
};
