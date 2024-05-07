import {
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
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

// app/components/ui/shadUi/ui/avatar.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react.useState)("idle");
  return /* @__PURE__ */ (0, import_react.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react.useState)(delayMs === void 0);
  (0, import_react.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react.useState)("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// app/components/ui/shadUi/ui/avatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/avatar.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.0042";
}
var AvatarShad = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$be92b6f5f03c0fe9, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/avatar.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c2 = AvatarShad;
AvatarShad.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
var AvatarImageShad = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$3e431a229df88919, { ref, className: cn("aspect-square h-full w-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/avatar.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c4 = AvatarImageShad;
AvatarImageShad.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
var AvatarFallbackShad = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$fb8d7f40caaeea67, { ref, className: cn("flex h-full w-full items-center justify-center rounded", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/avatar.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c6 = AvatarFallbackShad;
AvatarFallbackShad.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "AvatarShad$React.forwardRef");
$RefreshReg$(_c2, "AvatarShad");
$RefreshReg$(_c3, "AvatarImageShad$React.forwardRef");
$RefreshReg$(_c4, "AvatarImageShad");
$RefreshReg$(_c5, "AvatarFallbackShad$React.forwardRef");
$RefreshReg$(_c6, "AvatarFallbackShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Avatar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Avatar.tsx"
  );
  import.meta.hot.lastModified = "1705519263362.2974";
}
function Avatar({
  fallbackText,
  imageSrc,
  imageAltText,
  onClick,
  className,
  imageClassName
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarShad, { className, onClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarImageShad, { src: imageSrc, alt: imageAltText, className: imageClassName }, void 0, false, {
      fileName: "app/components/ui/Avatar.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarFallbackShad, { children: fallbackText }, void 0, false, {
      fileName: "app/components/ui/Avatar.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/Avatar.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c7 = Avatar;
var _c7;
$RefreshReg$(_c7, "Avatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Avatar
};
//# sourceMappingURL=/build/_shared/chunk-Z2WGMD7I.js.map
