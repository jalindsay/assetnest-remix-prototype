import type { LinksFunction } from '@remix-run/node'
import { captureRemixErrorBoundaryError, withSentry } from '@sentry/remix'
import { isRouteErrorResponse, useRouteError ,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'


import stylesheet from '~/styles/tailwind.css'
import logo from '~/assets/Logos/BrowserIcon.svg'
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Assetnest 2</title>
        <link rel="icon" type="image/x-icon" href={logo} />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
//stolen from https://remix.run/docs/en/main/pages/v2#catchboundary-and-errorboundary
export const ErrorBoundary = () => {
  const error = useRouteError()

  captureRemixErrorBoundaryError(error)

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    )
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = 'Unknown error'
  if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  )
}

export default withSentry(App)
