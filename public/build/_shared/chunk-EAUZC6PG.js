import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  cva
} from "/build/_shared/chunk-NEMDLBSH.js";
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

// app/components/ui/shadUi/ui/alert.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/alert.tsx"
  );
  import.meta.hot.lastModified = "1705519263365.8477";
}
var alertVariants = cva("relative w-full rounded-lg border-2 p-2 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      success: "bg-background text-success border-success",
      destructive: "bg-background border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AlertShad = React.forwardRef(_c = ({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/alert.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c2 = AlertShad;
AlertShad.displayName = "Alert";
var AlertShadTitle = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/alert.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c4 = AlertShadTitle;
AlertShadTitle.displayName = "AlertTitle";
var AlertShadDescription = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/alert.tsx",
  lineNumber: 54,
  columnNumber: 12
}, this));
_c6 = AlertShadDescription;
AlertShadDescription.displayName = "AlertDescription";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "AlertShad$React.forwardRef");
$RefreshReg$(_c2, "AlertShad");
$RefreshReg$(_c3, "AlertShadTitle$React.forwardRef");
$RefreshReg$(_c4, "AlertShadTitle");
$RefreshReg$(_c5, "AlertShadDescription$React.forwardRef");
$RefreshReg$(_c6, "AlertShadDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Alert.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Alert.tsx"
  );
  import.meta.hot.lastModified = "1706454925343.9116";
}
var Alert = ({
  title,
  description,
  variant,
  onClose
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed left-0 top-0 z-50 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full content-center justify-center p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertShad, { className: "flex w-96 self-center", variant, children: [
    variant === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "justify-center p-1", icon: "success" }, void 0, false, {
      fileName: "app/components/ui/Alert.tsx",
      lineNumber: 32,
      columnNumber: 37
    }, this),
    variant === "destructive" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "justify-center p-1", icon: "warning" }, void 0, false, {
      fileName: "app/components/ui/Alert.tsx",
      lineNumber: 33,
      columnNumber: 41
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col justify-center", children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertShadTitle, { children: title }, void 0, false, {
        fileName: "app/components/ui/Alert.tsx",
        lineNumber: 35,
        columnNumber: 23
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertShadDescription, { children: description }, void 0, false, {
        fileName: "app/components/ui/Alert.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/Alert.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    onClose && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-row-reverse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { onClick: onClose, icon: "close" }, void 0, false, {
      fileName: "app/components/ui/Alert.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/ui/Alert.tsx",
      lineNumber: 38,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/Alert.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/Alert.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/Alert.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c7 = Alert;
var Alert_default = Alert;
var _c7;
$RefreshReg$(_c7, "Alert");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Alert_default
};
//# sourceMappingURL=/build/_shared/chunk-EAUZC6PG.js.map
