import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
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

// app/components/ui/shadUi/ui/button.tsx
var React = __toESM(require_react());

// node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// app/components/ui/shadUi/ui/button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/button.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.13";
}
var buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primaryHover",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructiveHover",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      outlineGreen: "border text-green-900 border-green-900 bg-green-100 hover:bg-accent hover:text-accent-foreground",
      outlineRed: "border text-rose-900 border-rose-900 bg-rose-100  hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var ButtonShad = React.forwardRef(_c = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/button.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
});
_c2 = ButtonShad;
ButtonShad.displayName = "Button";
var _c;
var _c2;
$RefreshReg$(_c, "ButtonShad$React.forwardRef");
$RefreshReg$(_c2, "ButtonShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Button.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Button.tsx"
  );
  import.meta.hot.lastModified = "1706454922349.4468";
}
var Button = ({
  variant,
  size,
  children,
  onClick,
  disabled = false,
  submit,
  className,
  noPadding,
  title,
  isPopoverTrigger
  // have to add this as adding event handlers to the button breaks the popover
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonShad, { title, variant, size, type: submit ? "submit" : "button", onClick: isPopoverTrigger ? onClick : (event) => {
    event == null ? void 0 : event.stopPropagation();
    onClick ? onClick() : void 0;
  }, disabled, className: `${className} ${noPadding ? `p-0` : ""}`, children }, void 0, false, {
    fileName: "app/components/ui/Button.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c3 = Button;
var Button_default = Button;
var _c3;
$RefreshReg$(_c3, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  cva,
  Button_default
};
//# sourceMappingURL=/build/_shared/chunk-NEMDLBSH.js.map
