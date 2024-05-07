import {
  Label
} from "/build/_shared/chunk-LTYRFPHA.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  cn
} from "/build/_shared/chunk-SALQIMS3.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/shadUi/ui/input.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/input.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.7632";
}
var InputShad = React.forwardRef(_c = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, className: cn(`
          flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary
          disabled:cursor-not-allowed disabled:opacity-50`, className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/input.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c2 = InputShad;
InputShad.displayName = "Input";
var _c;
var _c2;
$RefreshReg$(_c, "InputShad$React.forwardRef");
$RefreshReg$(_c2, "InputShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/TextInput.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/TextInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/TextInput.tsx"
  );
  import.meta.hot.lastModified = "1706454925347.292";
}
var TextInput = ({
  value,
  onChange,
  placeholder,
  label,
  helpText,
  error,
  password,
  disabled,
  name,
  noPadding,
  number,
  leadingText
}) => {
  _s();
  const [showPassword, setShowPassword] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex w-full flex-col ${noPadding ? "" : "p-1"} `, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: name, className: "text-s pb-1 pl-1 text-left font-semibold", children: label }, void 0, false, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `relative  rounded-md ${noPadding ? "" : "p-1"}
        ${disabled && "bg-neutral_200 text-neutral_500"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputShad, { id: name, name, value, type: number ? "number" : password && showPassword ? "password" : "text", placeholder, onChange: (value2) => onChange(value2.target.value), disabled, className: `${error && " border-destructive"}` }, void 0, false, {
        fileName: "app/components/ui/TextInput.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      leadingText && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 left-0 mr-2 flex h-full  items-center p-2", children: leadingText }, void 0, false, {
        fileName: "app/components/ui/TextInput.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      password && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { onClick: () => {
        setShowPassword(!showPassword);
      }, className: " absolute inset-y-0 right-0 mr-2 flex h-full cursor-pointer items-center", icon: showPassword ? "hide" : "show" }, void 0, false, {
        fileName: "app/components/ui/TextInput.tsx",
        lineNumber: 52,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    helpText && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `h-8 pl-1 pt-1 text-sm font-medium ${error && "text-destructive"}`, children: helpText }, void 0, false, {
      fileName: "app/components/ui/TextInput.tsx",
      lineNumber: 56,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/TextInput.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s(TextInput, "i5AbipRsumJPk3wMFjWgJyaat30=");
_c3 = TextInput;
var _c3;
$RefreshReg$(_c3, "TextInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TextInput
};
//# sourceMappingURL=/build/_shared/chunk-6V6MX5QH.js.map
