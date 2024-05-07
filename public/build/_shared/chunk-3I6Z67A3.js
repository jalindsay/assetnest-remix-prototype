import {
  Avatar
} from "/build/_shared/chunk-Z2WGMD7I.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  useNavigate
} from "/build/_shared/chunk-PCSBLE76.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/assets/Logos/AssetNestLogo.svg
var AssetNestLogo_default = "/build/_assets/AssetNestLogo-EQJBVHY6.svg";

// app/assets/Logos/IconLogo.svg
var IconLogo_default = "/build/_assets/IconLogo-TXRZD52A.svg";

// app/components/ui/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Layout.tsx"
  );
  import.meta.hot.lastModified = "1706454922351.0698";
}
var Layout = ({
  nonAuth,
  children,
  profileImage,
  profileInitials,
  organisationName,
  organisationIcon
}) => {
  var _a;
  _s();
  const navigation = useNavigate();
  return nonAuth ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed flex h-full w-full items-center justify-center bg-gradient-to-r from-primary to-secondary", children }, void 0, false, {
    fileName: "app/components/ui/Layout.tsx",
    lineNumber: 37,
    columnNumber: 20
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed z-50 h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-50 flex h-16 items-center bg-authToolbar ", children: [
      organisationName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center p-2 pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { fallbackText: (_a = organisationName.at(0)) != null ? _a : "", imageSrc: organisationIcon, imageAltText: "Organisation Logo", className: "bg-primary hover:cursor-pointer", onClick: () => navigation("/organisationList") }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` p-2 pl-4  text-xl font-semibold text-white max-md:hidden`, children: organisationName }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/Layout.tsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 p-1 pl-6 hover:cursor-pointer max-md:hidden", src: AssetNestLogo_default, alt: "assetnest logo", onClick: () => navigation("/organisationList") }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 p-1 pl-6 hover:cursor-pointer md:hidden", src: IconLogo_default, alt: "assetnest logo", onClick: () => navigation("/organisationList") }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/Layout.tsx",
        lineNumber: 46,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-auto flex items-center p-1 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex p-1 pr-9 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { color: "white", className: "hover:cursor-pointer hover:underline ", onClick: () => navigation("/deadLink2"), icon: "map" }, void 0, false, {
            fileName: "app/components/ui/Layout.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 text-white hover:cursor-pointer hover:underline max-md:hidden", children: "Map" }, void 0, false, {
            fileName: "app/components/ui/Layout.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex p-1 pr-9", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { color: "white", className: "hover:cursor-pointer hover:underline  ", onClick: () => navigation("/deadLink2"), icon: "calendar" }, void 0, false, {
            fileName: "app/components/ui/Layout.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 text-white hover:cursor-pointer hover:underline max-md:hidden", children: "Calender" }, void 0, false, {
            fileName: "app/components/ui/Layout.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " pr-5  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { className: "hover:cursor-pointer", onClick: () => navigation("/profile"), fallbackText: profileInitials != null ? profileInitials : "", imageSrc: profileImage, imageAltText: "profile Image", imageClassName: "bg-zinc-100" }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/ui/Layout.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/Layout.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/Layout.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full w-full items-center justify-center bg-gray-100", children }, void 0, false, {
      fileName: "app/components/ui/Layout.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/Layout.tsx",
    lineNumber: 39,
    columnNumber: 14
  }, this);
};
_s(Layout, "7sZc5EvTsFMSo4mPTlyGC/0+rew=", false, function() {
  return [useNavigate];
});
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-3I6Z67A3.js.map
