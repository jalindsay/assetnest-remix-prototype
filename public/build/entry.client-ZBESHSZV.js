import {
  require_client
} from "/build/_shared/chunk-ZWGWGGVF.js";
import {
  BrowserTracing,
  Replay,
  init,
  remixRouterInstrumentation
} from "/build/_shared/chunk-GMZDM37N.js";
import "/build/_shared/chunk-W6Q4MLZS.js";
import {
  RemixBrowser,
  useLocation,
  useMatches
} from "/build/_shared/chunk-PCSBLE76.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1706454925349.4023";
}
init({
  dsn: "https://92becfa3e8e441cfb4c51d9db1befbb5@o4505600850722816.ingest.sentry.io/4505600852688896",
  integrations: [
    new BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
      routingInstrumentation: remixRouterInstrumentation(
        import_react2.useEffect,
        useLocation,
        useMatches
      )
    }),
    new Replay()
  ],
  // Performance Monitoring
  tracesSampleRate: 1,
  // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1,
  // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1
  // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this)
  );
});
//# sourceMappingURL=/build/entry.client-ZBESHSZV.js.map
