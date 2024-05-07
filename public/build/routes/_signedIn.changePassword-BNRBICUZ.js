import {
  require_passwordHashing
} from "/build/_shared/chunk-OGB5NMER.js";
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

// app/routes/_signedIn.changePassword.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.changePassword.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.changePassword.tsx"
  );
  import.meta.hot.lastModified = "1706454925361.0266";
}
function Profile() {
  var _a, _b, _c2;
  _s();
  const navigation = useNavigate();
  const [oldPassword, setOldPassword] = (0, import_react2.useState)("");
  const [newPassword, setNewPassword] = (0, import_react2.useState)("");
  const [newPasswordRepeat, setNewPasswordRepeat] = (0, import_react2.useState)("");
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-96 flex-col p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " text-l text-brand_Teal p-1 text-center font-bold", children: "Change Password" }, void 0, false, {
      fileName: "app/routes/_signedIn.changePassword.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { onChange: (value) => {
          setOldPassword(value);
        }, name: "oldPassword", value: oldPassword, placeholder: "Current Password", label: "Current Password", helpText: (_a = actionData == null ? void 0 : actionData.oldPassword) != null ? _a : "", error: !!(actionData == null ? void 0 : actionData.oldPassword), password: true }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "newPassword", onChange: (value) => {
          setNewPassword(value);
        }, value: newPassword, placeholder: "New Password", label: "New Password", helpText: (_b = actionData == null ? void 0 : actionData.newPassword) != null ? _b : "", error: !!(actionData == null ? void 0 : actionData.newPassword), password: true }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "newPasswordRepeat", onChange: (value) => {
          setNewPasswordRepeat(value);
        }, value: newPasswordRepeat, placeholder: "New Password Repeat", label: "New Password Repeat", helpText: (_c2 = actionData == null ? void 0 : actionData.newPasswordRepeat) != null ? _c2 : "", error: !!(actionData == null ? void 0 : actionData.newPasswordRepeat), password: true }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.changePassword.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex w-1/2 justify-center self-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => navigation("/logIn"), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex w-1/2 justify-center self-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { submit: true, onClick: () => {
        }, children: "Confirm" }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.changePassword.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.changePassword.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.changePassword.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.changePassword.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.changePassword.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s(Profile, "ezRqP6+07E12IuR1H5zlIVVgI1k=", false, function() {
  return [useNavigate, useActionData];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/_signedIn.changePassword-BNRBICUZ.js.map
