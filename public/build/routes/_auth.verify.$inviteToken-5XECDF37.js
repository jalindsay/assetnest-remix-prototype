import {
  AssetNestLogoDark_default
} from "/build/_shared/chunk-T4IUXHXJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-PCSBLE76.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.verify.$inviteToken.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.verify.$inviteToken.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.verify.$inviteToken.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.5557";
}
function Index() {
  _s();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
      fileName: "app/routes/_auth.verify.$inviteToken.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Welcome to Assetnest" }, void 0, false, {
      fileName: "app/routes/_auth.verify.$inviteToken.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "userID", value: loaderData != null ? loaderData : -1 }, void 0, false, {
        fileName: "app/routes/_auth.verify.$inviteToken.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-5 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { submit: true, className: "w-full", variant: "default", children: "Click here to verify your account" }, void 0, false, {
        fileName: "app/routes/_auth.verify.$inviteToken.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.verify.$inviteToken.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.verify.$inviteToken.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.verify.$inviteToken.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.verify.$inviteToken.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.verify.$inviteToken.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_auth.verify.$inviteToken-5XECDF37.js.map
