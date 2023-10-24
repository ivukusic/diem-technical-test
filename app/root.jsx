import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Diem</h1>
        <h4>Technical Test</h4>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
