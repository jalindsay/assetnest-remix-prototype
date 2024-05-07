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
  useLocation,
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

// app/routes/_signedIn.$orgId.inspections.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.inspections.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.inspections.tsx"
  );
  import.meta.hot.lastModified = "1706454925360.483";
}
function InspectionOverview() {
  var _a;
  _s();
  const navigation = useNavigate();
  const location = useLocation();
  const defaultValue = (_a = location.pathname.split("/").pop()) != null ? _a : "";
  const loaderData = useLoaderData();
  const inspections = loaderData.inspections;
  const orgId = loaderData.orgId;
  const inspectionManageRole = loaderData.inspectionManageRole;
  const [searchText, setSearchText] = (0, import_react2.useState)("");
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] = (0, import_react2.useState)(10);
  const [currentPage, setCurrentPage] = (0, import_react2.useState)(0);
  const [filterInspectionStatus, setFilterInspectionStatus] = (0, import_react2.useState)({});
  const matches = useMatches();
  const currentTabFromRoute = matches[matches.length - 1].pathname.split("/")[3];
  const totalInspections = inspections.length;
  const completedInspections = inspections.filter((inspection) => {
    return inspection.Status.toLowerCase() === "completed";
  }).length;
  const filteredBySearchInspections = inspections.filter((inspection) => {
    var _a2, _b, _c2;
    return (_c2 = (_b = (_a2 = inspection.asset) == null ? void 0 : _a2.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b.stringValue) == null ? void 0 : _c2.toLowerCase().includes(searchText.toLowerCase());
  });
  const filteredByStatusInspections = filteredBySearchInspections.filter((inspection) => {
    const filterInspectionStatusKeys = Object.keys(filterInspectionStatus);
    let isStatusInFilter = true;
    if (filterInspectionStatusKeys.filter((value) => filterInspectionStatus[value]).length !== 0) {
      isStatusInFilter = filterInspectionStatus[inspection.Status.toLowerCase()] === true;
    }
    return isStatusInFilter;
  });
  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage;
  const endCurrentPageIndex = startCurrentPageIndex + numberRecordsToDisplayOnPage;
  const inspectionsToDisplay = filteredByStatusInspections.slice(startCurrentPageIndex, endCurrentPageIndex);
  const filterPopoverContent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Status" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "scheduled", onChange: () => {
      setFilterInspectionStatus((filter) => {
        const newValue = {
          ...filter
        };
        newValue["scheduled"] = !newValue["scheduled"];
        return newValue;
      });
    }, checked: filterInspectionStatus["scheduled"], label: "Scheduled" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, 1, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "started", onChange: () => {
      setFilterInspectionStatus((filter) => {
        const newValue = {
          ...filter
        };
        newValue["started"] = !newValue["started"];
        return newValue;
      });
    }, checked: filterInspectionStatus["started"], label: "Started" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, 2, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "completed", onChange: () => {
      setFilterInspectionStatus((filter) => {
        const newValue = {
          ...filter
        };
        newValue["completed"] = !newValue["completed"];
        return newValue;
      });
    }, checked: filterInspectionStatus["completed"], label: "Completed" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, 3, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
    lineNumber: 93,
    columnNumber: 32
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle}`, children: "Inspection Overview" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center py-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-auto md:mr-0 md:pr-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-xl font-bold", children: totalInspections }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Inspections" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto md:ml-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold", children: completedInspections }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Total Completed" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { value: searchText, onChange: (newValue) => {
        setSearchText(newValue);
      }, placeholder: "Search Inspections", noPadding: true }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-4 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-32", onClick: () => {
      }, variant: "outline", isPopoverTrigger: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "add" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, this),
        "Add Filter"
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 150,
        columnNumber: 29
      }, this), contentClassName: `w-[13rem]`, content: filterPopoverContent }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-md:hidden", children: Object.keys(filterInspectionStatus).filter((key) => filterInspectionStatus[key]).map((key, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block p-2 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${filterChip}`, onClick: async () => {
          setFilterInspectionStatus((filter) => {
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
            fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
            lineNumber: 168,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 158,
          columnNumber: 19
        }, this) }, index, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
          lineNumber: 157,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ml-auto max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => {
        navigation("/" + loaderData.orgId + "/createInspectionInstance", {});
      }, children: "Create New Inspection" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center py-2", children: [
      currentTabFromRoute === "list" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-40 pr-3 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { noPadding: true, valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
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
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 182,
        columnNumber: 44
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        "Results: ",
        filteredByStatusInspections.length
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { defaultValue, className: "w-full py-4", onValueChange: (value) => navigation("/" + loaderData.orgId + "/inspections/" + value, {
        relative: "path"
      }), tabs: [{
        value: "list",
        valueLabel: "List View"
      }, {
        value: "map",
        valueLabel: "Map View"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 pr-3 md:hidden ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { noPadding: true, valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
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
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
      inspections: currentTabFromRoute === "list" ? inspectionsToDisplay : filteredByStatusInspections,
      searchText,
      filterInspectionStatus,
      inspectionManageRole,
      orgId
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 226,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    currentTabFromRoute === "list" && Math.ceil(filteredByStatusInspections.length / numberRecordsToDisplayOnPage) > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { totalNumberPages: Math.ceil(filteredByStatusInspections.length / numberRecordsToDisplayOnPage) - 1, selectedPage: currentPage, onPrevClick: () => {
      setCurrentPage((currentValue) => currentValue === 0 ? 0 : currentValue - 1);
    }, onNextClick: () => {
      setCurrentPage((currentValue) => {
        return currentValue === Math.ceil(filteredByStatusInspections.length / numberRecordsToDisplayOnPage) - 1 ? 0 : currentValue + 1;
      });
    }, goPage: (newPage) => {
      setCurrentPage(newPage);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 236,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 235,
      columnNumber: 126
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-20" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.inspections.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_s(InspectionOverview, "PwdYodyHbPkYYNQk8bIBWUK5iC0=", false, function() {
  return [useNavigate, useLocation, useLoaderData, useMatches];
});
_c = InspectionOverview;
var _c;
$RefreshReg$(_c, "InspectionOverview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InspectionOverview as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.inspections-HQ33YXZV.js.map
