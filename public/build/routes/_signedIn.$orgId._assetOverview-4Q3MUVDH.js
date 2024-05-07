import {
  Popover
} from "/build/_shared/chunk-AJ6L6ZET.js";
import {
  Pagination
} from "/build/_shared/chunk-IWZRMDZZ.js";
import {
  CheckBox
} from "/build/_shared/chunk-HLLTIUOP.js";
import {
  filterChip
} from "/build/_shared/chunk-77YRQQ4T.js";
import {
  Tabs
} from "/build/_shared/chunk-OLVIM7ET.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import "/build/_shared/chunk-RBZICKJH.js";
import "/build/_shared/chunk-MCM7CJEI.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_signedIn.$orgId._assetOverview.tsx
var import_react2 = __toESM(require_react());
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._assetOverview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._assetOverview.tsx"
  );
  import.meta.hot.lastModified = "1706454925353.9917";
}
function AssetOverview() {
  _s();
  const navigation = useNavigate();
  const loaderData = useLoaderData();
  const matches = useMatches();
  const currentTabFromRoute = matches[matches.length - 1].pathname.split("/")[2];
  const [filterAssetsStatus, setFilterAssetsStatus] = (0, import_react2.useState)({});
  const [searchText, setSearchText] = (0, import_react2.useState)("");
  const filterPopoverContent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Status" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "Active", onChange: () => {
      setFilterAssetsStatus((filter) => {
        const newValue = {
          ...filter
        };
        newValue["active"] = !newValue["active"];
        return newValue;
      });
    }, checked: filterAssetsStatus["active"], label: "Active" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, 1, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "inactive", onChange: () => {
      setFilterAssetsStatus((filter) => {
        const newValue = {
          ...filter
        };
        newValue["inactive"] = !newValue["inactive"];
        return newValue;
      });
    }, checked: filterAssetsStatus["inactive"], label: "Inactive" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this) }, 2, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
    lineNumber: 78,
    columnNumber: 32
  }, this);
  const assets = loaderData.assets;
  const activeAssetsLength = assets.filter((asset) => asset.properties.find((property) => property.categoryProperty.label === "Status" && property.stringValue === "active")).length;
  const assetsFiltered = assets.filter((asset) => {
    const filterAssetsStatusKeys = Object.keys(filterAssetsStatus);
    const hasSearchQueryInName = asset.properties.find((property) => {
      var _a;
      return property.categoryProperty.label === "Asset Name" && ((_a = property.stringValue) == null ? void 0 : _a.includes(searchText));
    });
    let isStatusInFilter = true;
    if (filterAssetsStatusKeys.filter((value) => filterAssetsStatus[value]).length !== 0) {
      const assetStatus = asset.properties.find((property) => property.categoryProperty.label === "Status");
      isStatusInFilter = !!filterAssetsStatusKeys.find((key) => filterAssetsStatus[key] && (assetStatus == null ? void 0 : assetStatus.stringValue) === key);
    }
    return hasSearchQueryInName && isStatusInFilter;
  });
  const [currentPage, setCurrentPage] = (0, import_react2.useState)(0);
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] = (0, import_react2.useState)(10);
  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage;
  const endCurrentPageIndex = startCurrentPageIndex + numberRecordsToDisplayOnPage;
  const assetsToDisplayOnList = assetsFiltered.slice(startCurrentPageIndex, endCurrentPageIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle}`, children: "Assets" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      " ",
      loaderData.assetManageRole && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto p-1 md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { noPadding: true, size: "icon", onClick: () => {
        navigation("../createAsset", {
          relative: "path"
        });
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "add", color: "white" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 125,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center py-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-auto md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-xl font-bold", children: assets.length }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Assets" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-auto md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-xl font-bold", children: activeAssetsLength }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Active" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-6 max-md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-xl font-bold", children: assets.length }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Assets" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " max-md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-xl font-bold", children: activeAssetsLength }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Active" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { value: searchText, onChange: (newValue) => {
        setSearchText(newValue);
      }, placeholder: "Search Assets", noPadding: true }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " pl-4 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-32", onClick: () => {
      }, variant: "outline", isPopoverTrigger: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "add" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, this),
        " Add Filter"
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 160,
        columnNumber: 29
      }, this), contentClassName: `w-[13rem]]`, content: filterPopoverContent }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-md:hidden", children: Object.keys(filterAssetsStatus).filter((key) => filterAssetsStatus[key]).map((key, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block p-2 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${filterChip}`, onClick: async () => {
          setFilterAssetsStatus((filter) => {
            const newValue = {
              ...filter
            };
            newValue[key] = false;
            return newValue;
          });
        }, children: [
          key.charAt(0).toUpperCase() + key.slice(1),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "close" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 167,
          columnNumber: 19
        }, this) }, index, false, {
          fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
          lineNumber: 166,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { noPadding: true, className: "w-12", onClick: () => {
      }, variant: "outline", isPopoverTrigger: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "filter" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 183,
        columnNumber: 29
      }, this), contentClassName: `w-[10rem]`, content: filterPopoverContent }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      loaderData.assetManageRole && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-auto max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => {
        navigation("/" + loaderData.orgId + "/createAsset", {
          relative: "path"
        });
      }, children: "Add New Asset" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 188,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center py-2", children: [
      currentTabFromRoute === "assetList" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-40 pr-3 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { noPadding: true, valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
        setCurrentPage(0);
        setNumberRecordsToDisplayOnPage(parseInt(newValue));
      }, possibleValues: [{
        value: "10",
        valueLabel: "10"
      }, {
        value: "50",
        valueLabel: "50"
      }, {
        value: "100",
        valueLabel: "100"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 200,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 199,
        columnNumber: 49
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Results: ",
        assetsFiltered.length
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { defaultValue: currentTabFromRoute, className: "w-full", onValueChange: (value) => navigation("/" + loaderData.orgId + "/" + value, {
        relative: "path"
      }), tabs: [{
        value: "assetList",
        valueLabel: "List View"
      }, {
        value: "assetMap",
        valueLabel: "Map View"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 pr-3 md:hidden ", children: currentTabFromRoute === "assetList" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { noPadding: true, valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
        setCurrentPage(0);
        setNumberRecordsToDisplayOnPage(parseInt(newValue));
      }, possibleValues: [{
        value: "10",
        valueLabel: "10"
      }, {
        value: "50",
        valueLabel: "50"
      }, {
        value: "100",
        valueLabel: "100"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 227,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
      assets: currentTabFromRoute === "assetList" ? assetsToDisplayOnList : assetsFiltered,
      imagePublicUrl: loaderData.imagePublicUrl,
      assetManageRole: loaderData.assetManageRole,
      assetUsers: loaderData.assetUsers
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, this),
    currentTabFromRoute === "assetList" && Math.ceil(assetsFiltered.length / numberRecordsToDisplayOnPage) - 1 > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { totalNumberPages: Math.ceil(assetsFiltered.length / numberRecordsToDisplayOnPage) - 1, selectedPage: currentPage, onPrevClick: () => {
      setCurrentPage((currentValue) => currentValue === 0 ? 0 : currentValue - 1);
    }, onNextClick: () => {
      setCurrentPage((currentValue) => {
        return currentValue === Math.ceil(assetsFiltered.length / numberRecordsToDisplayOnPage) - 1 ? 0 : currentValue + 1;
      });
    }, goPage: (newPage) => {
      setCurrentPage(newPage);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 251,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 250,
      columnNumber: 122
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-20" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._assetOverview.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
_s(AssetOverview, "Xf/7iXgIUhZ5AF5HdwU/m8AYifU=", false, function() {
  return [useNavigate, useLoaderData, useMatches];
});
_c = AssetOverview;
var _c;
$RefreshReg$(_c, "AssetOverview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AssetOverview as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._assetOverview-4Q3MUVDH.js.map
