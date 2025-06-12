import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8">
          <div className="text-primary text-8xl font-light mb-2">404</div>
          <div className="text-gray-400 text-xl">Page Not Found</div>
        </div>

        <h1 className="text-3xl font-light text-gray-800 mb-4">
          Oops, looks like we misplaced this page!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Our bad! It seems this page took a wrong turn. Let's help you find your way back.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Back to Homepage
          </Link>

          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <Link href="/contact-us" className="text-primary hover:text-accent underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
