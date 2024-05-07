import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/Pagination.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1706454922351.4478";
}
var Pagination = ({
  totalNumberPages,
  selectedPage,
  onPrevClick,
  onNextClick,
  goPage
}) => {
  const pages = [];
  for (let i = 0; i < totalNumberPages + 1; i++) {
    pages.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => goPage(i), className: i === selectedPage ? (
      //selected icon
      "z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    ) : (
      //unselected icon
      "flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    ), children: i + 1 }, void 0, false, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, i, false, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 31,
      columnNumber: 16
    }, this));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { "aria-label": "Page navigation example", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex h-10 items-center -space-x-px text-base", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onPrevClick, className: "ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", disabled: selectedPage === 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Previous" }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-3 w-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 1 1 5l4 4" }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    pages,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onNextClick, className: "flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", disabled: selectedPage === totalNumberPages, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Next" }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-3 w-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 9 4-4-4-4" }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ui/Pagination.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Pagination.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/Pagination.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/Pagination.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/Pagination.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-IWZRMDZZ.js.map
