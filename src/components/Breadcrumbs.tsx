import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1 py-3 text-sm">
          <li>
            <Link to="/" className="flex items-center text-gray-500 hover:text-sky-600 transition-colors">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-gray-300" />
              {i === crumbs.length - 1 ? (
                <span className="text-gray-700 font-medium">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="text-gray-500 hover:text-sky-600 transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
