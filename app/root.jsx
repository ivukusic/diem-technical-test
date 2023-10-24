import { Links, Meta, Outlet, Scripts, LiveReload } from '@remix-run/react';

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="./styles.css" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container">
          <h1>Diem!</h1>
          <h4>Technical Test</h4>
          <p>Please use this file as your entry point.</p>
          <ul>
            <li>Demonstrate your approach to componentisation</li>
            <li>Follow the acceptance criteria thoroughly</li>
            <li>Use your best judgment on design</li>
          </ul>
        </div>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
