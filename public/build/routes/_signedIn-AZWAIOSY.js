import {
  Layout
} from "/build/_shared/chunk-3I6Z67A3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Z2WGMD7I.js";
import {
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Outlet,
  useLoaderData
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

// app/routes/_signedIn.tsx
var import_node = __toESM(require_node());

// app/assets/account.svg
var account_default = "/build/_assets/account-Q5OODYNJ.svg";

// app/routes/_signedIn.tsx
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.tsx"
  );
  import.meta.hot.lastModified = "1706454925362.472";
}
function shouldRevalidate({
  currentParams,
  nextParams,
  defaultShouldRevalidate
}) {
  if (currentParams.orgId !== nextParams.orgId) {
    return true;
  }
  return defaultShouldRevalidate;
}
var SignedIn = () => {
  var _a, _b, _c2, _d, _e, _f;
  _s();
  const loaderData = useLoaderData();
  const profileInitials = ((_c2 = (_b = (_a = loaderData == null ? void 0 : loaderData.firstName) == null ? void 0 : _a.at(0)) == null ? void 0 : _b.toUpperCase()) != null ? _c2 : "") + ((_f = (_e = (_d = loaderData == null ? void 0 : loaderData.lastName) == null ? void 0 : _d.at(0)) == null ? void 0 : _e.toUpperCase()) != null ? _f : "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { profileInitials: profileInitials === "" ? void 0 : profileInitials, profileImage: (loaderData == null ? void 0 : loaderData.profileImage) ? loaderData == null ? void 0 : loaderData.profileImage : profileInitials === "" ? account_default : profileInitials, organisationName: loaderData == null ? void 0 : loaderData.organisationName, organisationIcon: loaderData == null ? void 0 : loaderData.organisationIcon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_signedIn.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_s(SignedIn, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c = SignedIn;
var signedIn_default = SignedIn;
var _c;
$RefreshReg$(_c, "SignedIn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  signedIn_default as default,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/_signedIn-AZWAIOSY.js.map
