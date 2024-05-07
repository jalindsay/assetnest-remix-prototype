import {
  Label
} from "/build/_shared/chunk-LTYRFPHA.js";
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

// app/components/ui/shadUi/ui/textarea.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/textarea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/textarea.tsx"
  );
  import.meta.hot.lastModified = "1705519263367.6504";
}
var TextareaShad = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: cn(`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary
          disabled:cursor-not-allowed disabled:opacity-50`, className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/textarea.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c2 = TextareaShad;
TextareaShad.displayName = "Textarea";
var _c;
var _c2;
$RefreshReg$(_c, "TextareaShad$React.forwardRef");
$RefreshReg$(_c2, "TextareaShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/TextArea.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/TextArea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/TextArea.tsx"
  );
  import.meta.hot.lastModified = "1705519263365.445";
}
var TextArea = ({
  value,
  onChange,
  placeholder,
  label,
  helpText,
  error,
  disabled,
  name,
  noPadding,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `left-0 top-0 flex w-full flex-col ${noPadding ? "" : "p-1"} ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: name, className: "text-s pb-1 pl-1 text-left font-semibold", children: label }, void 0, false, {
      fileName: "app/components/ui/TextArea.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `relative  rounded-md ${noPadding ? "" : "p-1"}
       
        ${disabled && "bg-neutral_200 text-neutral_500"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextareaShad, { id: name, name, value, placeholder, onChange: (value2) => onChange(value2.target.value), disabled, className: `${error && " border-destructive"} resize-none` }, void 0, false, {
      fileName: "app/components/ui/TextArea.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ui/TextArea.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    helpText && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `h-8 pl-1 pt-1 text-sm font-medium ${error && "text-destructive"}`, children: helpText }, void 0, false, {
      fileName: "app/components/ui/TextArea.tsx",
      lineNumber: 44,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/TextArea.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c3 = TextArea;
var _c3;
$RefreshReg$(_c3, "TextArea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TextArea
};
//# sourceMappingURL=/build/_shared/chunk-KIUIDWMV.js.map
