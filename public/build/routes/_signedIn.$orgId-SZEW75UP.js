import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  secondaryText
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Outlet,
  useLoaderData,
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_signedIn.$orgId.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.tsx"
  );
  import.meta.hot.lastModified = "1706454925360.7424";
}
function OrgWrapper() {
  _s();
  const loaderData = useLoaderData();
  const navigation = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full w-full flex-col overflow-y-scroll md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " relative flex h-[calc(100%-64px)] w-24 flex-col items-center  bg-white  max-md:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-20 items-center justify-center md:block md:h-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-5 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", className: "max-md:hidden", onClick: () => {
            navigation("/" + loaderData.orgId + "/assetList");
          }, noPadding: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "trophy" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Assets" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " py-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center  justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", className: "max-md:hidden", onClick: () => {
            navigation("/" + loaderData.orgId + "/inspections/list");
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "pasteClipboard" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Inspections" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center  justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", className: "max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "warning" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Defects" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center  justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", className: "max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "wrench" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Maintenance" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " hidden flex-col justify-end md:flex  md:h-1/2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full   p-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] bg-black" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " py-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center  justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { title: "Organisation Details", variant: "ghost", size: "icon", className: "max-md:hidden", onClick: () => {
            navigation("/" + loaderData.orgId + "/organisationDetails", {
              relative: "path"
            });
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "group" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Manage Organisation" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " py-5 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center p-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { title: "Logout", variant: "ghost", size: "icon", className: "max-md:hidden", onClick: () => {
            navigation("/organisationList");
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "exitDoor" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` text-sm ${secondaryText}`, children: "Organisations" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col  items-center justify-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full self-start overflow-auto p-5 md:h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[2rem] max-md:hidden" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[10rem] md:hidden" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 flex h-20 w-full items-center justify-center bg-white shadow-[0px_-4px_12px_0px_rgba(217,217,217,0.40)] md:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-1/4 justify-center p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", onClick: () => {
        navigation("/" + loaderData.orgId + "/assetList");
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "trophy" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-1/4 justify-center p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "pasteClipboard" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-1/4 justify-center p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "warning" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-1/4 justify-center p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "ghost", size: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " flex items-center justify-center p-1", icon: "wrench" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(OrgWrapper, "o6QhR3Be5EFBxEabjlAvrWvryBU=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = OrgWrapper;
var _c;
$RefreshReg$(_c, "OrgWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrgWrapper as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId-SZEW75UP.js.map
