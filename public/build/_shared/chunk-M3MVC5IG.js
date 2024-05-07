import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/Card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Card.tsx"
  );
  import.meta.hot.lastModified = "1706454922349.601";
}
var Card = ({
  children,
  innerClassName,
  outerClassName
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: outerClassName ? "" : `max-h-[calc(100vh-100px)] overflow-auto py-1 `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `shadow-[0 2px 8px rgba(0, 0, 0, 0.2)] flex-column flex justify-center rounded bg-white`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${innerClassName ? innerClassName : "p-8"}  `, children }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 27,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/Card.tsx",
  lineNumber: 25,
  columnNumber: 7
}, this);
_c = Card;
var _c;
$RefreshReg$(_c, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Card
};
//# sourceMappingURL=/build/_shared/chunk-M3MVC5IG.js.map
