import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Beckoning Bell | Home',
  description: 'Beckoning Bell home.',
}

export default function Page() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Beckoning Bell
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            A cooperative platform for subreddit moderators.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Already have an account?
              </Link>
              <Link
                href="/auth/register" 
                className="text-sm font-semibold leading-6 text-gray-900">
                  Or create an account{' '}
                  <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
