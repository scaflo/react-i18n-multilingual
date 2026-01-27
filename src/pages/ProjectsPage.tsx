import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from '../components/common/Link';

const MOCK_PROJECTS = [
    { id: 1, key: 'project1' },
    { id: 2, key: 'project2' },
    { id: 3, key: 'project3' },
];

export const ProjectsPage = () => {
    const { t } = useTranslation(['projects', 'common']);

    return (
        <div>
            <Helmet>
                <title>{t('list.title', { ns: 'projects', defaultValue: 'Projects' })} | Lingual</title>
            </Helmet>

            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {t('list.title', { ns: 'projects' })}
                    </h1>
                    <p className="text-gray-600">
                        {t('list.subtitle', { ns: 'projects', defaultValue: 'Discover our work.' })}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PROJECTS.map((project) => (
                    <article key={project.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition group">
                        <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-400 transition">
                            Project Image
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                {t(`${project.key}.title`, { ns: 'projects', defaultValue: `Project ${project.id}` })}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {t(`${project.key}.description`, { ns: 'projects', defaultValue: 'Project description...' })}
                            </p>
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                            >
                                {t('buttons.learnMore', { ns: 'common' })} →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};
