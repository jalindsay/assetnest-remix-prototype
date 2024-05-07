import {
  CircularProgressBar
} from "/build/_shared/chunk-QVURBCHD.js";
import {
  getTimeSinceDateInFormattedString
} from "/build/_shared/chunk-UADOJQYD.js";
import {
  Tabs
} from "/build/_shared/chunk-OLVIM7ET.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import {
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  importantText,
  pageTitle,
  secondaryText,
  subPageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
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

// app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx
var import_react2 = __toESM(require_react());
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx"
  );
  import.meta.hot.lastModified = "1706454925351.422";
}
function AssetView() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2;
  _s();
  const loaderData = useLoaderData();
  const [displayTab, setDisplayTab] = (0, import_react2.useState)("Details");
  const navigation = useNavigate();
  const assetNonInternalProperties = (_a = loaderData.asset) == null ? void 0 : _a.properties.filter((property) => property.categoryProperty.type !== "INTERNAL");
  const totalNumberProperties = (_b = assetNonInternalProperties == null ? void 0 : assetNonInternalProperties.length) != null ? _b : -1;
  const numberPropertiesWithValues = (_c2 = assetNonInternalProperties == null ? void 0 : assetNonInternalProperties.filter((property) => property.stringValue || property.floatValue || property.integerValue || property.booleanValue || property.latitudeValue || property.longitudeValue || property.stringArrayValue.length !== 0).length) != null ? _c2 : -1;
  const percent = (numberPropertiesWithValues / totalNumberProperties * 100).toFixed(0);
  const latitude = (_e = (_d = loaderData.asset) == null ? void 0 : _d.properties.find((property) => property.categoryProperty.label === "Latitude")) == null ? void 0 : _e.floatValue;
  const longitude = (_g = (_f = loaderData.asset) == null ? void 0 : _f.properties.find((property) => property.categoryProperty.label === "Longitude")) == null ? void 0 : _g.floatValue;
  const location = [{
    lat: latitude,
    lng: longitude
  }];
  const detailProperties = (_i = (_h = loaderData.asset) == null ? void 0 : _h.properties.filter((property) => !(property.categoryProperty.type === "COORDINATE" || property.categoryProperty.type === "IMAGE" || property.categoryProperty.label === "Asset Name" || property.categoryProperty.label === "Asset ID" || property.categoryProperty.label === "Description")).sort((a, b) => a.categoryProperty.label > b.categoryProperty.label ? 1 : -1)) != null ? _i : [];
  const [displayAlert, setDisplayAlert] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-gray-500", children: [
      "Asset /",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " font-semibold underline", children: (_k = (_j = loaderData.asset) == null ? void 0 : _j.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _k.stringValue }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    displayAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "default", title: "Copied Link To Clipboard", onClose: () => {
      setDisplayAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 80,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle} p-1`, children: "Asset" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex p-2 pb-4 md:w-[calc(100vw-120px)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto flex max-md:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: " w-44 ", variant: "outline", onClick: () => {
        var _a2;
        navigation("../" + ((_a2 = loaderData.asset) == null ? void 0 : _a2.id) + "/editAsset");
      }, children: "Edit" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: " w-44 ", onClick: () => {
        navigator.clipboard.writeText(window.location.href);
        setDisplayAlert(true);
        setTimeout(() => setDisplayAlert(false), 5e3);
      }, children: "Share" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full overflow-auto", children: (_l = loaderData.imagePaths) == null ? void 0 : _l.map((image, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-72 h-72 max-h-72 w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: " max-w-96 h-auto max-h-60  w-auto", src: image.data.publicUrl, alt: "" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 107,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this) }, index, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 105,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col py-2 pr-2 md:w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: subPageTitle, children: (_n = (_m = loaderData.asset) == null ? void 0 : _m.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _n.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
          "ID",
          " ",
          (_p = (_o = loaderData.asset) == null ? void 0 : _o.properties.find((property) => property.categoryProperty.label === "Asset ID")) == null ? void 0 : _p.stringValue
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center py-2 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircularProgressBar, { percent: parseInt(percent) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-2 ${secondaryText}`, children: " Complete" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: (_r = (_q = loaderData.asset) == null ? void 0 : _q.properties.find((property) => property.categoryProperty.label === "Description")) == null ? void 0 : _r.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-center space-x-4 p-2 pb-4 md:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: " flex  w-1/2  justify-center", variant: "outline", onClick: () => {
            var _a2;
            navigation("../" + ((_a2 = loaderData.asset) == null ? void 0 : _a2.id) + "/editAsset");
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "edit", className: "p-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
              lineNumber: 134,
              columnNumber: 15
            }, this),
            "Edit"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: " flex w-1/2 justify-center", onClick: () => {
            navigator.clipboard.writeText(window.location.href);
            setDisplayAlert(true);
            setTimeout(() => setDisplayAlert(false), 5e3);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "share3Dots", color: "white", className: "p-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
            " Share"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { defaultValue: "assetList", className: "w-full", onValueChange: (value) => setDisplayTab(value), value: displayTab, tabs: [{
            value: "Details",
            valueLabel: "Details"
          }, {
            value: "Linked Assets",
            valueLabel: "Linked Assets"
          }] }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-4 w-full", children: displayTab === "Details" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${importantText} pb-2 text-lg`, children: "Details" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
              lineNumber: 157,
              columnNumber: 19
            }, this),
            detailProperties.map((property, index) => {
              var _a2, _b2, _c3, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2;
              let value;
              if (property.categoryProperty.type === "STRING") {
                value = (_a2 = property.stringValue) != null ? _a2 : "";
              } else if (property.categoryProperty.type === "MONEY") {
                value = "\xA3" + property.floatValue;
              } else if (property.categoryProperty.type === "INTEGER") {
                value = (_b2 = property.integerValue) != null ? _b2 : "";
              } else if (property.categoryProperty.type === "LIST") {
                value = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: ((_d2 = (_c3 = property.stringValue) == null ? void 0 : _c3.charAt(0).toUpperCase()) != null ? _d2 : "") + ((_f2 = (_e2 = property.stringValue) == null ? void 0 : _e2.slice(1)) != null ? _f2 : "") }, index, false, {
                  fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
                  lineNumber: 167,
                  columnNumber: 27
                }, this);
              } else if (property.categoryProperty.label === "Modified By") {
                value = ((_g2 = loaderData.modifiedBy) == null ? void 0 : _g2.firstName) + " " + ((_h2 = loaderData.modifiedBy) == null ? void 0 : _h2.lastName);
              } else if (property.categoryProperty.label === "Created By") {
                value = ((_i2 = loaderData.createdBy) == null ? void 0 : _i2.firstName) + " " + ((_j2 = loaderData.createdBy) == null ? void 0 : _j2.lastName);
              } else if (property.categoryProperty.label === "Modified Date" || property.categoryProperty.label === "Created Date") {
                value = getTimeSinceDateInFormattedString(new Date((_k2 = property.stringValue) != null ? _k2 : ""));
              }
              if (value === "") {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
                  lineNumber: 178,
                  columnNumber: 26
                }, this);
              }
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-40 ${importantText}`, children: property.categoryProperty.label }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
                  lineNumber: 181,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-80", children: value }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
                  lineNumber: 184,
                  columnNumber: 25
                }, this)
              ] }, index, true, {
                fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
                lineNumber: 180,
                columnNumber: 24
              }, this);
            })
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 156,
            columnNumber: 43
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Coming Soon" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 187,
            columnNumber: 26
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      location[0].lat !== null || location[0].lng !== null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-auto min-h-[20rem] w-full max-md:grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapComponent, { apiKey: (_s2 = loaderData.mapApiKey) != null ? _s2 : "", markersCoordinates: location }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 191,
        columnNumber: 65
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center justify-center", children: [
        "No map location set",
        " "
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
        lineNumber: 193,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-9" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.$assetId.viewAsset.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(AssetView, "AuZby86NH59aQWSHGOoaYGBc+38=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = AssetView;
var _c;
$RefreshReg$(_c, "AssetView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AssetView as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.$assetId.viewAsset-RO5B2LP3.js.map
