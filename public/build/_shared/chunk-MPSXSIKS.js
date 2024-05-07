import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/Dialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Dialog.tsx"
  );
  import.meta.hot.lastModified = "1706454922350.197";
}
var Dialog = ({
  children,
  onClose,
  open
}) => {
  return open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, false, {
      fileName: "app/components/ui/Dialog.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-10 overflow-y-auto", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full items-center justify-center p-4 text-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4", onClick: (event) => {
      event.stopPropagation();
    }, children }, void 0, false, {
      fileName: "app/components/ui/Dialog.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Dialog.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Dialog.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Dialog.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/Dialog.tsx",
    lineNumber: 26,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
    fileName: "app/components/ui/Dialog.tsx",
    lineNumber: 39,
    columnNumber: 14
  }, this);
};
_c = Dialog;
var _c;
$RefreshReg$(_c, "Dialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Dialog
};
//# sourceMappingURL=/build/_shared/chunk-MPSXSIKS.js.map
