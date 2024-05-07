import {
  Tabs
} from "/build/_shared/chunk-OLVIM7ET.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  pageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Outlet,
  useLoaderData,
  useMatches,
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

// app/routes/_signedIn.$orgId._editOrg.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._editOrg.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._editOrg.tsx"
  );
  import.meta.hot.lastModified = "1706454925357.3923";
}
function EditOrganisation() {
  _s();
  const navigation = useNavigate();
  const matches = useMatches();
  const loaderData = useLoaderData();
  const currentTabFromRoute = matches[matches.length - 1].pathname.split("/organisation")[1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle} p-1`, children: "Edit Your Organisation" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { defaultValue: currentTabFromRoute, className: "w-full", onValueChange: (value) => navigation("/" + loaderData.orgId + "/organisation" + value, {
      relative: "path"
    }), tabs: [{
      value: "Details",
      valueLabel: "Details"
    }, {
      value: "Location",
      valueLabel: "Location"
    }, {
      value: "Members",
      valueLabel: "Team Members"
    }] }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { outerClassName: currentTabFromRoute === "Members" ? "overflow-auto py-1" : void 0, innerClassName: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-20" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(EditOrganisation, "akq2ouWceAxd4wcHnPqatR/glIg=", false, function() {
  return [useNavigate, useMatches, useLoaderData];
});
_c = EditOrganisation;
var _c;
$RefreshReg$(_c, "EditOrganisation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditOrganisation as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._editOrg-AJX5UMO4.js.map
