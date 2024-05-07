import {
  DropdownMenu,
  Table,
  TableSelectBottomBar
} from "/build/_shared/chunk-CAWG7ZMY.js";
import {
  CheckBox
} from "/build/_shared/chunk-HLLTIUOP.js";
import {
  CircularProgressBar
} from "/build/_shared/chunk-QVURBCHD.js";
import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor
} from "/build/_shared/chunk-77YRQQ4T.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import "/build/_shared/chunk-RBZICKJH.js";
import "/build/_shared/chunk-MCM7CJEI.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
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
  secondaryText,
  tableHeader
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  useNavigate,
  useOutletContext,
  useSubmit
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

// app/routes/_signedIn.$orgId._assetOverview.assetList.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._assetOverview.assetList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx"
  );
  import.meta.hot.lastModified = "1706454925352.5493";
}
function AssetList() {
  _s();
  const {
    assets,
    assetManageRole,
    imagePublicUrl,
    assetUsers
  } = useOutletContext();
  const [selectAll, setSelectAll] = (0, import_react2.useState)(false);
  const [displayAlert, setDisplayAlert] = (0, import_react2.useState)(false);
  const submit = useSubmit();
  const navigation = useNavigate();
  const [selectedRowsId, setSelectedRowsId] = (0, import_react2.useState)([]);
  const rowsToDisplay = assets.map((asset, index) => {
    var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const status = (_b = (_a = asset.properties.find((property) => property.categoryProperty.label === "Status")) == null ? void 0 : _a.stringValue) != null ? _b : "";
    const dateOptions = {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    };
    const createdDate = new Date((_d = (_c2 = asset.properties.find((property) => property.categoryProperty.label === "Created Date")) == null ? void 0 : _c2.stringValue) != null ? _d : "").toLocaleString("en-GB", dateOptions);
    const modifiedDate = new Date((_f = (_e = asset.properties.find((property) => property.categoryProperty.label === "Modified Date")) == null ? void 0 : _e.stringValue) != null ? _f : "").toLocaleString("en-GB", dateOptions);
    const assetNonInternalProperties = asset.properties.filter((property) => property.categoryProperty.type !== "INTERNAL");
    const totalNumberProperties = (_g = assetNonInternalProperties == null ? void 0 : assetNonInternalProperties.length) != null ? _g : -1;
    const numberPropertiesWithValues = (_h = assetNonInternalProperties == null ? void 0 : assetNonInternalProperties.filter((property) => property.stringValue || property.floatValue || property.integerValue || property.booleanValue || property.latitudeValue || property.longitudeValue || property.stringArrayValue.length !== 0).length) != null ? _h : -1;
    const percent = (numberPropertiesWithValues / totalNumberProperties * 100).toFixed(0);
    return {
      onClick: () => {
        navigation("../" + asset.id + "/viewAsset", {
          relative: "path"
        });
      },
      content: [{
        content: assetManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "all", checked: selectedRowsId.includes(asset.id), onChange: () => {
          setSelectedRowsId((currentSelectedAssets) => {
            setSelectAll(false);
            if (selectedRowsId.includes(asset.id)) {
              return currentSelectedAssets.filter((selectedAssetId) => selectedAssetId !== asset.id);
            } else {
              return [...currentSelectedAssets, asset.id];
            }
          });
        } }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 99,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          ((_i = asset.properties.find((property) => property.categoryProperty.label === "Photo Gallery")) == null ? void 0 : _i.stringArrayValue[0]) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-auto max-h-10 w-auto max-w-[2.5rem] pr-4 ", src: imagePublicUrl + ((_j = asset.properties.find((property) => property.categoryProperty.label === "Photo Gallery")) == null ? void 0 : _j.stringArrayValue[0]), alt: "" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 111,
            columnNumber: 127
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${importantText}`, children: (_k = asset.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _k.stringValue }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 110,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: (_l = asset.properties.find((property) => property.categoryProperty.label === "Asset ID")) == null ? void 0 : _l.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 117,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: (_m = asset.properties.find((property) => property.categoryProperty.label === "Number of Assets")) == null ? void 0 : _m.integerValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 121,
          columnNumber: 18
        }, this),
        align: "right"
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${status === "active" ? chipGreenColor : status === "inactive" ? chipGrayDarkColor : chipRedColor} ${chip}`, children: status.charAt(0).toUpperCase() + status.slice(1) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 126,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: asset.category.name }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 132,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-4", children: assetUsers[index].updatedUser.firstName + " " + assetUsers[index].updatedUser.lastName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: modifiedDate }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 134,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-4", children: assetUsers[index].createUser.firstName + " " + assetUsers[index].createUser.lastName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: createdDate }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 141,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-right", children: ((_n = asset.properties.find((property) => property.categoryProperty.label === "Value")) == null ? void 0 : _n.floatValue) ? "\xA3" + ((_o = asset.properties.find((property) => property.categoryProperty.label === "Value")) == null ? void 0 : _o.floatValue) : "" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 148,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircularProgressBar, { percent: parseInt(percent) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 152,
          columnNumber: 18
        }, this)
      }, {
        content: assetManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { triggerClassName: "w-7", trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "w-7", onClick: () => {
        }, icon: "threeDotsVertical" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 156,
          columnNumber: 82
        }, this), dropdownMenuContent: [{
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "edit", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
              lineNumber: 158,
              columnNumber: 23
            }, this),
            "Edit"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 157,
            columnNumber: 24
          }, this),
          onClick: () => {
            navigation("../" + asset.id + "/editAsset", {
              relative: "path"
            });
          }
        }, {
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "copy", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
              lineNumber: 168,
              columnNumber: 23
            }, this),
            "Duplicate"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 167,
            columnNumber: 24
          }, this),
          onClick: () => {
            navigation("../" + asset.id + "/duplicateAsset", {
              relative: "path"
            });
          }
        }, {
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "share", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
              lineNumber: 178,
              columnNumber: 23
            }, this),
            "Share"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 177,
            columnNumber: 24
          }, this),
          onClick: () => {
            const pureUrl = window.location.href.replace("assetList", "");
            navigator.clipboard.writeText(pureUrl + asset.id + "/viewAsset");
            setDisplayAlert(true);
            setTimeout(() => setDisplayAlert(false), 5e3);
          }
        }, {
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "bin", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
              lineNumber: 189,
              columnNumber: 23
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
            lineNumber: 188,
            columnNumber: 24
          }, this),
          onClick: () => {
            const formData = new FormData();
            formData.set("_action", "deleteAsset");
            formData.set("assetId", asset.id.toString());
            submit(formData, {
              method: "post"
            });
          }
        }] }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 156,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
          lineNumber: 200,
          columnNumber: 18
        }, this)
      }]
    };
  });
  const headers = [assetManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "all", checked: selectAll, onChange: (value) => {
    setSelectAll(value);
    setSelectedRowsId(value ? assets.map((row) => row.id) : []);
  } }, "all-checkbox", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 204,
    columnNumber: 38
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, "empty-div", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 11
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Asset Name" }, "asset-name", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 42
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Asset ID" }, "asset-id", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 113
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader} text-right`, children: "Count" }, "count", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 180
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader} pl-4`, children: "Status" }, "status", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 252
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Category" }, "category", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 320
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Last Update" }, "last-update", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 387
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Created" }, "created", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 460
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader} text-right`, children: "Value" }, "value", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 525
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Complete" }, "complete", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 597
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, "empty-div-2", false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 207,
    columnNumber: 664
  }, this)].filter((header) => header);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    displayAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "default", title: "Copied Link To Clipboard", onClose: () => {
      setDisplayAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
      lineNumber: 209,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { headers, rows: rowsToDisplay }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    selectedRowsId.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableSelectBottomBar, { numberSelected: selectedRowsId.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => {
      const formData = new FormData();
      formData.set("_action", "deleteManyAssets");
      formData.set("assetIds", selectedRowsId.join("\xA3"));
      submit(formData, {
        method: "post"
      });
      setSelectedRowsId([]);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "bin", className: "pr-2" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this),
      "Delete"
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
      lineNumber: 215,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
      lineNumber: 213,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.assetList.tsx",
    lineNumber: 208,
    columnNumber: 10
  }, this);
}
_s(AssetList, "YgCUxy0rnEQ6LsI4Cx/R1VEBdhc=", false, function() {
  return [useOutletContext, useSubmit, useNavigate];
});
_c = AssetList;
var _c;
$RefreshReg$(_c, "AssetList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AssetList as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._assetOverview.assetList-QAUXSO3K.js.map
