import {
  getInspectionInstanceStatusChip
} from "/build/_shared/chunk-IA5SHBWF.js";
import "/build/_shared/chunk-77YRQQ4T.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  subPageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  useLoaderData,
  useNavigate,
  useOutletContext
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

// app/routes/_signedIn.$orgId.inspections.map.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.inspections.map.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.inspections.map.tsx"
  );
  import.meta.hot.lastModified = "1706454925358.6794";
}
function AssetMap() {
  var _a;
  _s();
  const {
    inspections
  } = useOutletContext();
  const navigation = useNavigate();
  const loaderData = useLoaderData();
  const [selectedInspectionInstance, setSelectedInspectionInstance] = (0, import_react2.useState)();
  const [possibleInspectionInstances, setPossibleInspectionInstances] = (0, import_react2.useState)();
  const uniqueMarkerCoordinates = inspections.map((inspection) => {
    const lat = inspection.LocationLat;
    const lng = inspection.LocationLng;
    if (!lat || !lng) {
      return void 0;
    }
    return {
      lat,
      lng,
      onClick: () => {
        setSelectedInspectionInstance(void 0);
        setPossibleInspectionInstances(inspections.filter((inspection2) => inspection2.LocationLat === lat && inspection2.LocationLng === lng));
      }
    };
  }).filter((valueA, index, array) => valueA !== void 0 && array.findIndex((valueB) => (valueB == null ? void 0 : valueB.lat) === valueA.lat && (valueB == null ? void 0 : valueB.lng) === valueA.lng) === index);
  const InspectionPopUp = () => {
    var _a2, _b, _c2;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col overflow-auto", children: selectedInspectionInstance ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle} py-2`, children: selectedInspectionInstance == null ? void 0 : selectedInspectionInstance.inspectionReference }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
        "Asset :",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " hover: text-sky-400 hover:cursor-pointer hover:underline", onClick: () => {
          var _a3;
          navigation("/" + loaderData.orgId + "/" + ((_a3 = selectedInspectionInstance == null ? void 0 : selectedInspectionInstance.asset) == null ? void 0 : _a3.id) + "/viewAsset");
        }, children: (_c2 = (_b = (_a2 = selectedInspectionInstance == null ? void 0 : selectedInspectionInstance.asset) == null ? void 0 : _a2.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b.stringValue) != null ? _c2 : "" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: getInspectionInstanceStatusChip(selectedInspectionInstance.Status) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full py-2", onClick: () => {
        switch (selectedInspectionInstance.Status) {
          case "SCHEDULED":
            navigation("/" + loaderData.orgId + "/" + selectedInspectionInstance.id + "/unstartedInspectionInstance");
            break;
          case "STARTED":
            navigation("/" + loaderData.orgId + "/" + selectedInspectionInstance.id + "/doingInspectionInstance");
            break;
          default:
            break;
        }
      }, children: "See Full Inspection Details" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 63,
      columnNumber: 39
    }, this) : possibleInspectionInstances == null ? void 0 : possibleInspectionInstances.map((inspectionInstance, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-border  p-2 hover:cursor-pointer hover:bg-authBackground", onClick: () => {
      setSelectedInspectionInstance(inspectionInstance);
    }, children: inspectionInstance.inspectionReference }, index, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 94,
      columnNumber: 81
    }, this)) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 61,
      columnNumber: 33
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${selectedInspectionInstance ? "h-[calc(85vh-430px)]" : "h-[calc(100vh-430px)]"} w-full flex-col md:h-[calc(100vh-350px)] md:flex-row`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapComponent, { doCluster: true, apiKey: (_a = loaderData.mapApiKey) != null ? _a : "", markersCoordinates: uniqueMarkerCoordinates }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      (selectedInspectionInstance || possibleInspectionInstances) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-96 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InspectionPopUp, {}, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 105,
        columnNumber: 111
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
        lineNumber: 105,
        columnNumber: 73
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    (selectedInspectionInstance || possibleInspectionInstances) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full  md:hidden ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InspectionPopUp, {}, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 108,
      columnNumber: 109
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
      lineNumber: 108,
      columnNumber: 71
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.inspections.map.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s(AssetMap, "Ic9wBObSivdyt8sBOGFReMG0RWE=", false, function() {
  return [useOutletContext, useNavigate, useLoaderData];
});
_c = AssetMap;
var _c;
$RefreshReg$(_c, "AssetMap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AssetMap as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.inspections.map-FQUFVUXM.js.map
