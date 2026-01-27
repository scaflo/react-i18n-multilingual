import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export const AboutPage = () => {
    const { t } = useTranslation(['company', 'common']);

    return (
        <div className="max-w-4xl mx-auto">
            <Helmet>
                <title>{t('about.title', { ns: 'company', defaultValue: 'About Us' })} | Lingual</title>
            </Helmet>

            <h1 className="text-4xl font-bold mb-6 text-gray-900">{t('nav.about', { ns: 'common' })}</h1>

            <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                    {t('about.description', { ns: 'company', defaultValue: 'We are building the future of multilingual web applications.' })}
                </p>
                <div className="p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Translation Note</h3>
                    <p className="text-yellow-800">
                        This content is loaded from the <code>company</code> namespace, verifying our domain-based translation architecture.
                    </p>
                </div>
            </div>
        </div>
    );
};
