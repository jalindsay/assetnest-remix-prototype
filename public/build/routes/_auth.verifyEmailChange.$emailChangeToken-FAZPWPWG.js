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
  useNavigate
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

// app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.724";
}
function VerifyEmailChange() {
  _s();
  const navigation = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
      fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: "Your new email has been verified." }, void 0, false, {
      fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-5 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => navigation("/login"), className: "w-full", variant: "default", children: "Login" }, void 0, false, {
      fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.verifyEmailChange.$emailChangeToken.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(VerifyEmailChange, "7sZc5EvTsFMSo4mPTlyGC/0+rew=", false, function() {
  return [useNavigate];
});
_c = VerifyEmailChange;
var _c;
$RefreshReg$(_c, "VerifyEmailChange");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  VerifyEmailChange as default
};
//# sourceMappingURL=/build/routes/_auth.verifyEmailChange.$emailChangeToken-FAZPWPWG.js.map
