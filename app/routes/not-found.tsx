import { Link } from "react-router";
import { Home, FileQuestion } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-12">
      <div className="flex max-w-lg flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
          <FileQuestion size={40} className="text-blue-600" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 leading-7 text-gray-500">
          Sorry, we couldn't find the page you're looking for. It may have been
          moved or the URL might be incorrect.
        </p>

        <div>
          <Link
            to="/"
            className="primary-button mt-8 inline-flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
