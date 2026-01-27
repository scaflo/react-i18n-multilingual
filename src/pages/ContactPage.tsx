import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export const ContactPage = () => {
    const { t } = useTranslation(['forms', 'company', 'common']);

    return (
        <div className="max-w-2xl mx-auto">
            <Helmet>
                <title>{t('contact.title', { ns: 'company' })} | Lingual</title>
            </Helmet>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold mb-2 text-gray-900">
                    {t('contact.title', { ns: 'company' })}
                </h1>
                <p className="text-gray-600 mb-8">
                    We'd love to hear from you. Send us a message in any language.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('contact.name.label', { ns: 'forms', defaultValue: 'Name' })}
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder={t('contact.name.placeholder', { ns: 'forms' })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('contact.email.label', { ns: 'forms', defaultValue: 'Email' })}
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder={t('contact.email.placeholder', { ns: 'forms' })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('contact.message.label', { ns: 'forms', defaultValue: 'Message' })}
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder={t('contact.message.placeholder', { ns: 'forms' })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
                    >
                        {t('buttons.submit', { ns: 'common' })}
                    </button>
                </form>
            </div>
        </div>
    );
};
