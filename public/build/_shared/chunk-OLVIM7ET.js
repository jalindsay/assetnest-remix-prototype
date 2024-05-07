import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
} from "/build/_shared/chunk-3YFQHQJO.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-PWXBGVB3.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-EGFG2AV4.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-BIAIJ7JX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-W3WU6QPT.js";
import {
  _extends,
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

// app/components/ui/shadUi/ui/tabs.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $69cb30bb0017df05$var$TABS_NAME = "Tabs";
var [$69cb30bb0017df05$var$createTabsContext, $69cb30bb0017df05$export$355f5bd209d7b13a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($69cb30bb0017df05$var$TABS_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $69cb30bb0017df05$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$69cb30bb0017df05$var$TabsProvider, $69cb30bb0017df05$var$useTabsContext] = $69cb30bb0017df05$var$createTabsContext($69cb30bb0017df05$var$TABS_NAME);
var $69cb30bb0017df05$export$b2539bed5023c21c = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return /* @__PURE__ */ (0, import_react.createElement)($69cb30bb0017df05$var$TabsProvider, {
    scope: __scopeTabs,
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    orientation,
    dir: direction,
    activationMode
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction,
    "data-orientation": orientation
  }, tabsProps, {
    ref: forwardedRef
  })));
});
var $69cb30bb0017df05$var$TAB_LIST_NAME = "TabsList";
var $69cb30bb0017df05$export$9712d22edc0d78c1 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, loop = true, ...listProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TAB_LIST_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  return /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation: context.orientation,
    dir: context.dir,
    loop
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "tablist",
    "aria-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  })));
});
var $69cb30bb0017df05$var$TRIGGER_NAME = "TabsTrigger";
var $69cb30bb0017df05$export$8114b9fdfdf9f3ba = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TRIGGER_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  return /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: isSelected
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": contentId,
    "data-state": isSelected ? "active" : "inactive",
    "data-disabled": disabled ? "" : void 0,
    disabled,
    id: triggerId
  }, triggerProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false)
        context.onValueChange(value);
      else
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if ([
        " ",
        "Enter"
      ].includes(event.key))
        context.onValueChange(value);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      const isAutomaticActivation = context.activationMode !== "manual";
      if (!isSelected && !disabled && isAutomaticActivation)
        context.onValueChange(value);
    })
  })));
});
var $69cb30bb0017df05$var$CONTENT_NAME = "TabsContent";
var $69cb30bb0017df05$export$bd905d70e8fd2ebb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$CONTENT_NAME, __scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = (0, import_react.useRef)(isSelected);
  (0, import_react.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || isSelected
    },
    ({ present }) => /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !present,
      id: contentId,
      tabIndex: 0
    }, contentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
      }
    }), present && children)
  );
});
function $69cb30bb0017df05$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $69cb30bb0017df05$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var $69cb30bb0017df05$export$be92b6f5f03c0fe9 = $69cb30bb0017df05$export$b2539bed5023c21c;
var $69cb30bb0017df05$export$54c2e3dc7acea9f5 = $69cb30bb0017df05$export$9712d22edc0d78c1;
var $69cb30bb0017df05$export$41fb9f06171c75f4 = $69cb30bb0017df05$export$8114b9fdfdf9f3ba;
var $69cb30bb0017df05$export$7c6e2c02157bb7d2 = $69cb30bb0017df05$export$bd905d70e8fd2ebb;

// app/components/ui/shadUi/ui/tabs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/tabs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/tabs.tsx"
  );
  import.meta.hot.lastModified = "1705519263367.5662";
}
var Tabs = $69cb30bb0017df05$export$be92b6f5f03c0fe9;
var TabsList = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$54c2e3dc7acea9f5, { ref, className: cn("inline-flex h-10 items-center justify-center rounded-md bg-gray-200 p-1 ", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/tabs.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c2 = TabsList;
TabsList.displayName = $69cb30bb0017df05$export$54c2e3dc7acea9f5.displayName;
var TabsTrigger = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$41fb9f06171c75f4, { ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-gray-700 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:text-gray-900 data-[state=active]:shadow-sm", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/tabs.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c4 = TabsTrigger;
TabsTrigger.displayName = $69cb30bb0017df05$export$41fb9f06171c75f4.displayName;
var TabsContent = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$7c6e2c02157bb7d2, { ref, className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/tabs.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c6 = TabsContent;
TabsContent.displayName = $69cb30bb0017df05$export$7c6e2c02157bb7d2.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "TabsList$React.forwardRef");
$RefreshReg$(_c2, "TabsList");
$RefreshReg$(_c3, "TabsTrigger$React.forwardRef");
$RefreshReg$(_c4, "TabsTrigger");
$RefreshReg$(_c5, "TabsContent$React.forwardRef");
$RefreshReg$(_c6, "TabsContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Tabs.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Tabs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Tabs.tsx"
  );
  import.meta.hot.lastModified = "1705519263365.3162";
}
function Tabs2({
  defaultValue,
  className,
  onValueChange,
  tabs,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs, { defaultValue, onValueChange, className, value, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsList, { children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabsTrigger, { value: item.value, children: item.valueLabel }, item.value, false, {
    fileName: "app/components/ui/Tabs.tsx",
    lineNumber: 31,
    columnNumber: 27
  }, this)) }, void 0, false, {
    fileName: "app/components/ui/Tabs.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/Tabs.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c7 = Tabs2;
var _c7;
$RefreshReg$(_c7, "Tabs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Tabs2 as Tabs
};
//# sourceMappingURL=/build/_shared/chunk-OLVIM7ET.js.map
