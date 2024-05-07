import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/CircularProgressBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/CircularProgressBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/CircularProgressBar.tsx"
  );
  import.meta.hot.lastModified = "1706454922350.0508";
}
var CircularProgressBar = ({
  percent
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " h-10 w-10", style: {
    borderRadius: "50%",
    background: "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#327B93 " + percent + "%, #DBEDF3 0)"
  }, role: "progressbar", "aria-valuenow": 75, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full w-full items-center justify-center text-xs text-primary", children: [
    percent,
    "%"
  ] }, void 0, true, {
    fileName: "app/components/ui/CircularProgressBar.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/CircularProgressBar.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = CircularProgressBar;
var _c;
$RefreshReg$(_c, "CircularProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CircularProgressBar
};
//# sourceMappingURL=/build/_shared/chunk-QVURBCHD.js.map
