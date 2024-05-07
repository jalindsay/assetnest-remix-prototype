import "/build/_shared/chunk-FGISBVNF.js";
import {
  AssetNestLogoDark_default
} from "/build/_shared/chunk-T4IUXHXJ.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import {
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
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
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.forgotPassword.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.forgotPassword.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.forgotPassword.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.003";
}
function ForgotPassword() {
  _s();
  const navigation = useNavigate();
  const [email, setEmail] = (0, import_react.useState)("");
  const [displaySuccessAlert, setDisplaySuccessAlert] = (0, import_react.useState)(false);
  const actionData = useActionData();
  (0, import_react.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      setDisplaySuccessAlert(!!(actionData == null ? void 0 : actionData.success));
      setTimeout(() => setDisplaySuccessAlert(false), 5e3);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
    displaySuccessAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "success", title: "Email Sent", onClose: () => {
      setDisplaySuccessAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_auth.forgotPassword.tsx",
      lineNumber: 73,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Reset Your Password" }, void 0, false, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p flex justify-center text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-72 sm:w-96 ", children: "Give us a email address associated with your assetnest account, and we will send you an email with a link to reset your password." }, void 0, false, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: () => setDisplaySuccessAlert(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "email", onChange: (value) => {
          setEmail(value);
        }, value: email, placeholder: "Email", label: "Email", error: !!(actionData == null ? void 0 : actionData.email), helpText: actionData == null ? void 0 : actionData.email }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-5 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", submit: true, variant: "default", children: "Reset Password" }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-5 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", variant: "default", onClick: () => navigation("/logIn"), children: "Log In" }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 102,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.forgotPassword.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.forgotPassword.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.forgotPassword.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.forgotPassword.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(ForgotPassword, "lAwi82SBItQXvvM4yPtzkol6Ytw=", false, function() {
  return [useNavigate, useActionData];
});
_c = ForgotPassword;
var _c;
$RefreshReg$(_c, "ForgotPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ForgotPassword as default
};
//# sourceMappingURL=/build/routes/_auth.forgotPassword-CYSGPPPR.js.map
