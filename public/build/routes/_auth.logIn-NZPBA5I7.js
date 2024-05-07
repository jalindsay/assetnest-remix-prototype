import {
  require_passwordHashing
} from "/build/_shared/chunk-OGB5NMER.js";
import {
  Dialog
} from "/build/_shared/chunk-MPSXSIKS.js";
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
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  useActionData,
  useLoaderData,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/email.server
var require_email = __commonJS({
  "empty-module:~/utils/email.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_auth.logIn.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_passwordHashing = __toESM(require_passwordHashing());
var import_email = __toESM(require_email());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.logIn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.logIn.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.2136";
}
function Index() {
  var _a, _b, _c2, _d, _e;
  _s();
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const navigation = useNavigate();
  const loaderData = useLoaderData();
  const [displaySignUpModel, setDisplaySignUpModel] = (0, import_react.useState)(!!(loaderData == null ? void 0 : loaderData.signUpFlash));
  const actionData = useActionData();
  const emailResendRef = (0, import_react.useRef)(null);
  const [displayResetPasswordFlashAlert, setDisplayResetPasswordFlashAlert] = (0, import_react.useState)((_a = loaderData == null ? void 0 : loaderData.resetPasswordFlash) != null ? _a : false);
  (0, import_react.useEffect)(() => {
    var _a2;
    if (loaderData == null ? void 0 : loaderData.resetPasswordFlash) {
      setDisplayResetPasswordFlashAlert((_a2 = loaderData == null ? void 0 : loaderData.resetPasswordFlash) != null ? _a2 : false);
      setTimeout(() => setDisplayResetPasswordFlashAlert(false), 5e3);
    }
  }, [loaderData == null ? void 0 : loaderData.resetPasswordFlash]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col ", children: [
    displayResetPasswordFlashAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "success", title: "Password Reset Successfully" }, void 0, false, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 132,
      columnNumber: 44
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open: displaySignUpModel, onClose: () => setDisplaySignUpModel(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", ref: emailResendRef, className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "resendVerification", value: "true" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "email", value: (_c2 = (_b = loaderData.signUpFlash) == null ? void 0 : _b.email) != null ? _c2 : "" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "inviteToken", value: (_e = (_d = loaderData.signUpFlash) == null ? void 0 : _d.inviteToken) != null ? _e : "" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "email" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 139,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${pageTitle} p-2 text-center`, children: "Verification Email Sent" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-2 text-center text-gray-500`, children: "Please click the link in the email to activate your account. It may take a few moments to arrive." }, void 0, false, {
          fileName: "app/routes/_auth.logIn.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 text-center text-gray-500`, children: [
          "If you haven\u2019t received anything, you can",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { onClick: () => {
            var _a2;
            (_a2 = emailResendRef.current) == null ? void 0 : _a2.submit();
          }, className: " font-semibold text-gray-600 hover:cursor-pointer hover:underline  ", children: "Resend Email" }, void 0, false, {
            fileName: "app/routes/_auth.logIn.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.logIn.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Log in to your account" }, void 0, false, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "email", onChange: (value) => {
        setEmail(value);
      }, value: email, placeholder: "Email", label: "Email", error: !!(actionData == null ? void 0 : actionData.email), helpText: actionData == null ? void 0 : actionData.email }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "password", onChange: (value) => {
        setPassword(value);
      }, value: password, placeholder: "Password", label: "Password", password: true, error: !!(actionData == null ? void 0 : actionData.password), helpText: actionData == null ? void 0 : actionData.password }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => navigation("/forgotPassword"), className: "  hover:cursor-pointer hover:underline", children: "Forgotten your password?" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 173,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", submit: true, variant: "default", children: "Log In" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 179,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 178,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", onClick: () => navigation("/signUp"), variant: "outline", children: "Sign Up" }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 186,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 185,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.logIn.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 165,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.logIn.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.logIn.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.logIn.tsx",
    lineNumber: 130,
    columnNumber: 10
  }, this);
}
_s(Index, "S2JeZoEdHx/aW88zIt8vBJgt6Ac=", false, function() {
  return [useNavigate, useLoaderData, useActionData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_auth.logIn-NZPBA5I7.js.map
