import {
  CreateInspectionInstanceDetails,
  CreateInspectionInstanceMap,
  CreateInspectionInstanceProcedures
} from "/build/_shared/chunk-TEJOBHLB.js";
import "/build/_shared/chunk-RBZICKJH.js";
import "/build/_shared/chunk-A33ZQ7A5.js";
import "/build/_shared/chunk-MCM7CJEI.js";
import "/build/_shared/chunk-NJIHDZ66.js";
import "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-WQHIKOGJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-5M4FEYJV.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  v4_default
} from "/build/_shared/chunk-EABXFNCQ.js";
import "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle,
  subPageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_signedIn.$orgId.createInspectionInstance.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.createInspectionInstance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.createInspectionInstance.tsx"
  );
  import.meta.hot.lastModified = "1706454925358.053";
}
function CreateInspectionInstancePage() {
  var _a, _b, _c2, _d, _e, _f;
  _s();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const navigate = useNavigate();
  const [currentCategoryId, setCurrentCategoryId] = (0, import_react2.useState)(loaderData.publicInspectionForms[0].id.toString());
  const [platformID] = (0, import_react2.useState)(v4_default());
  const [inspectionReference, setInspectionReference] = (0, import_react2.useState)("");
  const [inspectionId, setInspectionId] = (0, import_react2.useState)("");
  const [selectAsset, setSelectAsset] = (0, import_react2.useState)();
  const [inspectionLng, setInspectionLng] = (0, import_react2.useState)();
  const [inspectionLat, setInspectionLat] = (0, import_react2.useState)();
  const [filesOnInstance, setFilesOnInstance] = (0, import_react2.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "self-start py-4 md:py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-gray-500", children: [
      "Inspections /",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " font-semibold underline", children: "New Inspection" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle} p-1`, children: "New Inspection" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { outerClassName: "overflow-auto py-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceDetails, { inspectionReferenceError: actionData == null ? void 0 : actionData.inspectionReferenceError, inspectionReference, setInspectionReference, publicInspectionForms: loaderData.publicInspectionForms, setCurrentCategoryId, currentCategoryId, assetError: actionData == null ? void 0 : actionData.assetError, orgsAssets: loaderData.orgsAssets, selectAsset: selectAsset != null ? selectAsset : void 0, inspectionIDError: actionData == null ? void 0 : actionData.inspectionIDError, inspectionId, setInspectionId, platformID, haveSelectedAAsset: (newId) => {
        var _a2, _b2, _c3, _d2;
        const selectedAsset = loaderData.orgsAssets.find((asset) => asset.id.toString() === newId);
        setSelectAsset(selectedAsset);
        if (selectedAsset) {
          setInspectionLat((_b2 = (_a2 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Latitude")) == null ? void 0 : _a2.floatValue) != null ? _b2 : void 0);
          setInspectionLng((_d2 = (_c3 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Longitude")) == null ? void 0 : _c3.floatValue) != null ? _d2 : void 0);
        }
      } }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle} py-4`, children: "Location" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceMap, { setInspectionLat, setInspectionLng, selectAsset: selectAsset != null ? selectAsset : void 0, inspectionLng, inspectionLat, mapsApiKey: (_a = loaderData.mapsApiKey) != null ? _a : "" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle} py-4`, children: " Procedures" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceProcedures, { setFilesOnInstance, filesOnInstance: filesOnInstance != null ? filesOnInstance : [], STORAGE_URL: (_b = loaderData.STORAGE_URL) != null ? _b : "", SUPABASE_SERVICE_ROLE_KEY: (_c2 = loaderData.SUPABASE_SERVICE_ROLE_KEY) != null ? _c2 : "" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden  flex-col md:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/5 p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle}`, children: "Details" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceDetails, { inspectionReferenceError: actionData == null ? void 0 : actionData.inspectionReferenceError, inspectionReference, setInspectionReference, publicInspectionForms: loaderData.publicInspectionForms, setCurrentCategoryId, currentCategoryId, assetError: actionData == null ? void 0 : actionData.assetError, orgsAssets: loaderData.orgsAssets, selectAsset: selectAsset != null ? selectAsset : void 0, inspectionIDError: actionData == null ? void 0 : actionData.inspectionIDError, inspectionId, setInspectionId, platformID, haveSelectedAAsset: (newId) => {
            var _a2, _b2, _c3, _d2;
            const selectedAsset = loaderData.orgsAssets.find((asset) => asset.id.toString() === newId);
            setSelectAsset(selectedAsset);
            if (selectedAsset) {
              setInspectionLat((_b2 = (_a2 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Latitude")) == null ? void 0 : _a2.floatValue) != null ? _b2 : void 0);
              setInspectionLng((_d2 = (_c3 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Longitude")) == null ? void 0 : _c3.floatValue) != null ? _d2 : void 0);
            }
          } }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-2/5 p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle}`, children: "Location" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-8 h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceMap, { setInspectionLat, setInspectionLng, selectAsset: selectAsset != null ? selectAsset : void 0, inspectionLng, inspectionLat, mapsApiKey: (_d = loaderData.mapsApiKey) != null ? _d : "" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle}`, children: " Procedures" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-8 h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateInspectionInstanceProcedures, { setFilesOnInstance, filesOnInstance: filesOnInstance != null ? filesOnInstance : [], STORAGE_URL: (_e = loaderData.STORAGE_URL) != null ? _e : "", SUPABASE_SERVICE_ROLE_KEY: (_f = loaderData.SUPABASE_SERVICE_ROLE_KEY) != null ? _f : "" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-40 text-left hover:underline", variant: "outline", onClick: () => navigate(-1), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { submit: true, className: "w-40", disabled: !!(filesOnInstance == null ? void 0 : filesOnInstance.find((file) => file.uploading === true)), children: "Save Inspection" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 183,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
      lineNumber: 149,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
    lineNumber: 127,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.$orgId.createInspectionInstance.tsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_s(CreateInspectionInstancePage, "tyfedAJhi9Wt14OlLAyfmwdEuvA=", false, function() {
  return [useLoaderData, useActionData, useNavigate];
});
_c = CreateInspectionInstancePage;
var _c;
$RefreshReg$(_c, "CreateInspectionInstancePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreateInspectionInstancePage as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.createInspectionInstance-Y57I4HKH.js.map
