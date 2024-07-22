import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import stylesheet from './tailwind.css?url';

export const links = () => [{ rel: 'stylesheet', href: stylesheet }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="./styles.css" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-1 flex-col">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred!</title>
      </head>
      <body className="flex flex-1 flex-col">
        <Header />

        <main className="flex h-svh max-h-80 flex-col items-center justify-center">
          <h1>An error occurred!</h1>
          <p>{error.message}</p>
          <p className="mt-4">
            <Link
              className="w-full rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
              to="/"
            >
              Back to safety
            </Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
