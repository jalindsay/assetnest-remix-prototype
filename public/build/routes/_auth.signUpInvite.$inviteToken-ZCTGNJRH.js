import {
  require_passwordHashing
} from "/build/_shared/chunk-OGB5NMER.js";
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
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.signUpInvite.$inviteToken.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_passwordHashing = __toESM(require_passwordHashing());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.signUpInvite.$inviteToken.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.signUpInvite.$inviteToken.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.383";
}
function SignUp() {
  _s();
  const loaderData = useLoaderData();
  const email = loaderData.email;
  const [password, setPassword] = (0, import_react2.useState)("");
  const [repeatPassword, setRepeatPassword] = (0, import_react2.useState)("");
  const inviteToken = loaderData.inviteToken;
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-4", src: AssetNestLogoDark_default, alt: "assetnest logo" }, void 0, false, {
      fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Create your account" }, void 0, false, {
      fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "email", value: email, onChange: () => {
      }, placeholder: "Email", label: "Email", disabled: true }, void 0, false, {
        fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "password", onChange: (value) => {
        setPassword(value);
      }, value: password, placeholder: "Password", label: "Password", password: true, error: !!(actionData == null ? void 0 : actionData.password), helpText: actionData == null ? void 0 : actionData.password }, void 0, false, {
        fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "repeatPassword", onChange: (value) => {
        setRepeatPassword(value);
      }, value: repeatPassword, placeholder: "Repeat Password", label: "Repeat Password", password: true, error: !!(actionData == null ? void 0 : actionData.repeatPassword), helpText: actionData == null ? void 0 : actionData.repeatPassword }, void 0, false, {
        fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { hidden: true, name: "inviteToken", value: inviteToken, readOnly: true }, void 0, false, {
        fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", submit: true, variant: "default", children: "Create User" }, void 0, false, {
        fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
    lineNumber: 104,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.signUpInvite.$inviteToken.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s(SignUp, "yoZOCQ/3/bHi2cG2jnxqFulT8ao=", false, function() {
  return [useLoaderData, useActionData];
});
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/_auth.signUpInvite.$inviteToken-ZCTGNJRH.js.map
