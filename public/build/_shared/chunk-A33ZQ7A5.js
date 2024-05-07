import {
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-MCM7CJEI.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-PWXBGVB3.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-EGFG2AV4.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-BIAIJ7JX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-W3WU6QPT.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
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

// app/components/ui/shadUi/ui/hover-card.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-hover-card/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $cef8881cdc69808e$var$originalBodyUserSelect;
var $cef8881cdc69808e$var$HOVERCARD_NAME = "HoverCard";
var [$cef8881cdc69808e$var$createHoverCardContext, $cef8881cdc69808e$export$47b6998a836b7260] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cef8881cdc69808e$var$HOVERCARD_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cef8881cdc69808e$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cef8881cdc69808e$var$HoverCardProvider, $cef8881cdc69808e$var$useHoverCardContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$HOVERCARD_NAME);
var $cef8881cdc69808e$export$57a077cc9fbe653e = (props) => {
  const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const openTimerRef = (0, import_react.useRef)(0);
  const closeTimerRef = (0, import_react.useRef)(0);
  const hasSelectionRef = (0, import_react.useRef)(false);
  const isPointerDownOnContentRef = (0, import_react.useRef)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const handleOpen = (0, import_react.useCallback)(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(
      () => setOpen(true),
      openDelay
    );
  }, [
    openDelay,
    setOpen
  ]);
  const handleClose = (0, import_react.useCallback)(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current)
      closeTimerRef.current = window.setTimeout(
        () => setOpen(false),
        closeDelay
      );
  }, [
    closeDelay,
    setOpen
  ]);
  const handleDismiss = (0, import_react.useCallback)(
    () => setOpen(false),
    [
      setOpen
    ]
  );
  (0, import_react.useEffect)(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($cef8881cdc69808e$var$HoverCardProvider, {
    scope: __scopeHoverCard,
    open,
    onOpenChange: setOpen,
    onOpen: handleOpen,
    onClose: handleClose,
    onDismiss: handleDismiss,
    hasSelectionRef,
    isPointerDownOnContentRef
  }, /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, children));
};
var $cef8881cdc69808e$var$TRIGGER_NAME = "HoverCardTrigger";
var $cef8881cdc69808e$export$ef9f7fd8e4ba882f = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeHoverCard, ...triggerProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$TRIGGER_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  return /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-state": context.open ? "open" : "closed"
  }, triggerProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, context.onOpen),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onTouchStart: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onTouchStart,
      (event) => event.preventDefault()
    )
  })));
});
var $cef8881cdc69808e$var$PORTAL_NAME = "HoverCardPortal";
var [$cef8881cdc69808e$var$PortalProvider, $cef8881cdc69808e$var$usePortalContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cef8881cdc69808e$var$CONTENT_NAME = "HoverCardContent";
var $cef8881cdc69808e$export$aa4724a5938c586 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const portalContext = $cef8881cdc69808e$var$usePortalContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react.createElement)($cef8881cdc69808e$var$HoverCardContentImpl, _extends({
    "data-state": context.open ? "open" : "closed"
  }, contentProps, {
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    ref: forwardedRef
  })));
});
var $cef8881cdc69808e$var$HoverCardContentImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [containSelection, setContainSelection] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (containSelection) {
      const body = document.body;
      $cef8881cdc69808e$var$originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
        body.style.webkitUserSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
      };
    }
  }, [
    containSelection
  ]);
  (0, import_react.useEffect)(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          var _document$getSelectio;
          const hasSelection = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.toString()) !== "";
          if (hasSelection)
            context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [
    context.isPointerDownOnContentRef,
    context.hasSelectionRef
  ]);
  (0, import_react.useEffect)(() => {
    if (ref.current) {
      const tabbables = $cef8881cdc69808e$var$getTabbableNodes(ref.current);
      tabbables.forEach(
        (tabbable) => tabbable.setAttribute("tabindex", "-1")
      );
    }
  });
  return /* @__PURE__ */ (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onFocusOutside, (event) => {
      event.preventDefault();
    }),
    onDismiss: context.onDismiss
  }, /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, contentProps, {
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onPointerDown, (event) => {
      if (event.currentTarget.contains(event.target))
        setContainSelection(true);
      context.hasSelectionRef.current = false;
      context.isPointerDownOnContentRef.current = true;
    }),
    ref: composedRefs,
    style: {
      ...contentProps.style,
      userSelect: containSelection ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: containSelection ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function $cef8881cdc69808e$var$getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
var $cef8881cdc69808e$export$be92b6f5f03c0fe9 = $cef8881cdc69808e$export$57a077cc9fbe653e;
var $cef8881cdc69808e$export$41fb9f06171c75f4 = $cef8881cdc69808e$export$ef9f7fd8e4ba882f;
var $cef8881cdc69808e$export$7c6e2c02157bb7d2 = $cef8881cdc69808e$export$aa4724a5938c586;

// app/components/ui/shadUi/ui/hover-card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/hover-card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/hover-card.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.6401";
}
var HoverCardShad = $cef8881cdc69808e$export$be92b6f5f03c0fe9;
var HoverCardTriggerShad = $cef8881cdc69808e$export$41fb9f06171c75f4;
var HoverCardContentShad = React.forwardRef(_c = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cef8881cdc69808e$export$7c6e2c02157bb7d2, { ref, align, sideOffset, className: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/hover-card.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c2 = HoverCardContentShad;
HoverCardContentShad.displayName = $cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "HoverCardContentShad$React.forwardRef");
$RefreshReg$(_c2, "HoverCardContentShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/HoverCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/HoverCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/HoverCard.tsx"
  );
  import.meta.hot.lastModified = "1706454925344.2874";
}
var HoverCard = ({
  trigger,
  content
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HoverCardShad, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HoverCardTriggerShad, { children: trigger }, void 0, false, {
      fileName: "app/components/ui/HoverCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HoverCardContentShad, { children: content }, void 0, false, {
      fileName: "app/components/ui/HoverCard.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/HoverCard.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c3 = HoverCard;
var _c3;
$RefreshReg$(_c3, "HoverCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  HoverCard
};
//# sourceMappingURL=/build/_shared/chunk-A33ZQ7A5.js.map
