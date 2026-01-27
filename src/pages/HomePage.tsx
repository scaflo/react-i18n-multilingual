import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from '../components/common/Link';

export const HomePage = () => {
    const { t } = useTranslation('common');

    return (
        <div className="space-y-12">
            <Helmet>
                <title>{t('seo.defaultTitle')}</title>
                <meta name="description" content={t('seo.defaultDescription')} />
            </Helmet>

            <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                    {t('seo.defaultTitle')}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    {t('seo.defaultDescription')}
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/projects"
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                    >
                        {t('nav.projects')}
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-md hover:shadow-lg border border-gray-100"
                    >
                        {t('nav.contact')}
                    </Link>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-white">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 text-blue-600 flex items-center justify-center font-bold text-xl">
                            {item}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Feature {item}</h3>
                        <p className="text-gray-600">
                            Demonstrating localized content scaling efficiently across multiple languages.
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
};
