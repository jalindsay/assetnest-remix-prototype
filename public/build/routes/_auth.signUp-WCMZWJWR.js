import {
  require_passwordHashing
} from "/build/_shared/chunk-OGB5NMER.js";
import "/build/_shared/chunk-FGISBVNF.js";
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
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  Link,
  useActionData
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

// app/routes/_auth.signUp.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_passwordHashing = __toESM(require_passwordHashing());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.signUp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.signUp.tsx"
  );
  import.meta.hot.lastModified = "1706454922355.3281";
}
var Index = () => {
  _s();
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [repeatPassword, setRepeatPassword] = (0, import_react.useState)("");
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
      fileName: "app/routes/_auth.signUp.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Create your account" }, void 0, false, {
      fileName: "app/routes/_auth.signUp.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "email", onChange: (value) => {
        setEmail(value);
      }, value: email, placeholder: "Email", label: "Email", error: !!(actionData == null ? void 0 : actionData.email), helpText: actionData == null ? void 0 : actionData.email }, void 0, false, {
        fileName: "app/routes/_auth.signUp.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "password", onChange: (value) => {
        setPassword(value);
      }, value: password, placeholder: "Password", label: "Password", password: true, error: !!(actionData == null ? void 0 : actionData.password), helpText: actionData == null ? void 0 : actionData.password }, void 0, false, {
        fileName: "app/routes/_auth.signUp.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "repeatPassword", onChange: (value) => {
        setRepeatPassword(value);
      }, value: repeatPassword, placeholder: "Repeat Password", label: "Repeat Password", password: true, error: !!(actionData == null ? void 0 : actionData.repeatPassword), helpText: actionData == null ? void 0 : actionData.repeatPassword }, void 0, false, {
        fileName: "app/routes/_auth.signUp.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", submit: true, variant: "default", children: "Create Account" }, void 0, false, {
          fileName: "app/routes/_auth.signUp.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.signUp.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: [
          "Already Have a Account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: " text-primary underline hover:text-primaryHover", to: "/login", children: "Login" }, void 0, false, {
            fileName: "app/routes/_auth.signUp.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.signUp.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.signUp.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.signUp.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.signUp.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.signUp.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.signUp.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
};
_s(Index, "ioKSXfhJpM6PGZKSAD+OeLgYL94=", false, function() {
  return [useActionData];
});
_c = Index;
var auth_signUp_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_signUp_default as default
};
//# sourceMappingURL=/build/routes/_auth.signUp-WCMZWJWR.js.map
