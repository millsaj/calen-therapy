import Link from 'next/link';
import { routes } from './_config';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8">
          <div className="text-primary text-8xl font-light mb-2">404</div>
          <div className="text-gray-400 text-xl">Page Not Found</div>
        </div>

        <h1 className="text-3xl font-light text-gray-800 mb-4">
          Oops! We couldn't find that page.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Our bad! The page you are looking for might have been moved. Please check the URL or return to the homepage.
        </p>

        <div className="space-y-4">
          <Link
            href={routes.home()}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Back to Homepage
          </Link>

          <div className="mt-4">
            <p className="text-gray-500">
              Need help?{' '}
              <Link href={routes.contact()} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
