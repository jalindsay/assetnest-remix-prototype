import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor
} from "/build/_shared/chunk-77YRQQ4T.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  secondaryText,
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

// app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx"
  );
  import.meta.hot.lastModified = "1706454925352.7222";
}
function AssetMap() {
  var _a, _b, _c2;
  _s();
  const {
    assets,
    imagePublicUrl
  } = useOutletContext();
  const loaderData = useLoaderData();
  const [selectedAsset, setSelectedAsset] = (0, import_react2.useState)();
  const markerCoordinates = assets.map((asset) => {
    var _a2, _b2;
    const lat = (_a2 = asset.properties.find((property) => property.categoryProperty.label === "Latitude")) == null ? void 0 : _a2.floatValue;
    const lng = (_b2 = asset.properties.find((property) => property.categoryProperty.label === "Longitude")) == null ? void 0 : _b2.floatValue;
    if (!lat || !lng) {
      return void 0;
    }
    return {
      lat,
      lng,
      onClick: () => {
        setSelectedAsset(asset);
      }
    };
  }).filter((coordinates) => coordinates !== void 0);
  const navigation = useNavigate();
  const selectedAssetStatus = (_b = (_a = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Status")) == null ? void 0 : _a.stringValue) != null ? _b : "";
  const AssetPopUp = () => {
    var _a2, _b2, _c3, _d, _e, _f;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full overflow-auto", children: (_a2 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Photo Gallery")) == null ? void 0 : _a2.stringArrayValue.map((image, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32  md:w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-auto max-h-32 w-auto max-w-xs md:max-h-60  md:max-w-sm", src: imagePublicUrl + image, alt: "" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this) }, index, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 61,
          columnNumber: 16
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle} py-2`, children: (_b2 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b2.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
          "ID :",
          " ",
          (_c3 = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Asset ID")) == null ? void 0 : _c3.stringValue
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${selectedAssetStatus === "active" ? chipGreenColor : selectedAssetStatus === "inactive" ? chipGrayDarkColor : chipRedColor} ${chip}  text-xs`, children: selectedAssetStatus.charAt(0).toUpperCase() + selectedAssetStatus.slice(1) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText} py-2`, children: [
          "Updated :",
          " ",
          new Date((_e = (_d = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Modified Date")) == null ? void 0 : _d.stringValue) != null ? _e : "").toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
          })
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: (_f = selectedAsset == null ? void 0 : selectedAsset.properties.find((property) => property.categoryProperty.label === "Description")) == null ? void 0 : _f.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full py-2", onClick: () => {
          var _a3;
          return navigation("../" + ((_a3 = selectedAsset == null ? void 0 : selectedAsset.id) != null ? _a3 : "-1") + "/viewAsset", {
            relative: "path"
          });
        }, children: "See Full Asset Details" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
      lineNumber: 58,
      columnNumber: 28
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${selectedAsset ? "h-[calc(85vh-430px)]" : "h-[calc(100vh-430px)]"} w-full flex-col md:h-[calc(100vh-350px)] md:flex-row`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapComponent, { doCluster: true, apiKey: (_c2 = loaderData.mapApiKey) != null ? _c2 : "", markersCoordinates: markerCoordinates }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      selectedAsset && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-96 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AssetPopUp, {}, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
        lineNumber: 103,
        columnNumber: 65
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
        lineNumber: 103,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    selectedAsset && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full  md:hidden ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AssetPopUp, {}, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
      lineNumber: 106,
      columnNumber: 63
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
      lineNumber: 106,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetMap.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(AssetMap, "9AcwK8fHp7XCLY8NEJBB4c3wN0o=", false, function() {
  return [useOutletContext, useLoaderData, useNavigate];
});
_c = AssetMap;
var _c;
$RefreshReg$(_c, "AssetMap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AssetMap as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._assetOverview.assetMap-MTQEVK43.js.map
