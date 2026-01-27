import { Link as RouterLink, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from '../common/Link';

export const Layout = () => {
    const { t, i18n } = useTranslation('common');

    console.log(i18n);
    const { lang } = useParams<{ lang: string }>();

    const switchLanguage = (newLang: string) => {
        const currentPath = globalThis.location.pathname;
        const pathParts = currentPath.split('/');
        if (pathParts.length > 1) {
            pathParts[1] = newLang;
        }
        return pathParts.join('/');
    };

    return (
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
        <header className="bg-white shadow-sm border-b fixed top-0 w-full z-10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 flex items-center gap-2"
            >
              Lingual
            </Link>

            <nav className="hidden md:flex gap-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t("nav.projects")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <div className="flex gap-3 text-sm font-semibold">
              {["en", "od", "hi"].map((l) => (
                <RouterLink
                  key={l}
                  to={switchLanguage(l)}
                  className={`px-3 py-1 rounded-md transition-colors uppercase ${
                    lang === l
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {l}
                </RouterLink>
              ))}
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <Outlet />
        </main>

        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">{t("footer.copyright")}</p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/legal/privacy"
                className="hover:text-white transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/legal/terms"
                className="hover:text-white transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
};
