import {
  DropdownMenu,
  Table,
  TableSelectBottomBar
} from "/build/_shared/chunk-CAWG7ZMY.js";
import {
  CheckBox
} from "/build/_shared/chunk-HLLTIUOP.js";
import {
  getInspectionInstanceStatusChip
} from "/build/_shared/chunk-IA5SHBWF.js";
import "/build/_shared/chunk-77YRQQ4T.js";
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

// app/routes/_signedIn.$orgId.inspections.list.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.inspections.list.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.inspections.list.tsx"
  );
  import.meta.hot.lastModified = "1706454925358.5217";
}
function InspectionList() {
  _s();
  const {
    inspections,
    inspectionManageRole,
    orgId
  } = useOutletContext();
  const [selectAll, setSelectAll] = (0, import_react2.useState)(false);
  const [selectedRowsId, setSelectedRowsId] = (0, import_react2.useState)([]);
  const submit = useSubmit();
  const [displayAlert, setDisplayAlert] = (0, import_react2.useState)(false);
  const navigation = useNavigate();
  const headers = [inspectionManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "all", checked: selectAll, onChange: (value) => {
    setSelectAll(value);
    setSelectedRowsId(value ? inspections.map((row) => {
      return row.id;
    }) : []);
  } }, "selectAllCheckbox", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 71,
    columnNumber: 43
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, "emptyDiv", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 76,
    columnNumber: 11
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Inspection Reference" }, "inspectionReferenceHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 76,
    columnNumber: 35
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "ID" }, "idHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 78,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Asset" }, "assetHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 80,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Status" }, "statusHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 82,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Category" }, "categoryHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 84,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Last Update" }, "lastUpdateHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 86,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Created" }, "createdHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 88,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Started" }, "startedHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 90,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${tableHeader}`, children: "Completed" }, "completedHeader", false, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 92,
    columnNumber: 13
  }, this)];
  const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  };
  const rowsToDisplay = inspections.map((inspection) => {
    var _a, _b, _c2, _d, _e, _f;
    const formattedUpdatedByName = inspection.updatedBy.firstName || inspection.updatedBy.lastName ? (inspection.updatedBy.firstName !== null ? inspection.updatedBy.firstName : "") + " " + (inspection.updatedBy.lastName !== null ? inspection.updatedBy.lastName : "") : inspection.updatedBy.email;
    const formattedCreatedByName = inspection.createdBy.firstName || inspection.createdBy.lastName ? (inspection.createdBy.firstName !== null ? inspection.createdBy.firstName : "") + " " + (inspection.createdBy.lastName !== null ? inspection.createdBy.lastName : "") : inspection.createdBy.email;
    const formattedStartedByName = inspection.startedBy ? inspection.startedBy.firstName || inspection.startedBy.lastName ? (inspection.startedBy.firstName !== null ? inspection.startedBy.firstName : "") + " " + (inspection.startedBy.lastName !== null ? inspection.startedBy.lastName : "") : inspection.startedBy.email : void 0;
    const formattedCompletedByName = inspection.completedBy ? inspection.completedBy.firstName || inspection.completedBy.lastName ? (inspection.completedBy.firstName !== null ? inspection.completedBy.firstName : "") + " " + (inspection.completedBy.lastName !== null ? inspection.completedBy.lastName : "") : inspection.completedBy.email : void 0;
    return {
      onClick: () => {
        switch (inspection.Status) {
          case "SCHEDULED":
            navigation("/" + orgId + "/" + inspection.id + "/unstartedInspectionInstance");
            break;
          case "STARTED":
            navigation("/" + orgId + "/" + inspection.id + "/doingInspectionInstance");
            break;
          default:
            break;
        }
      },
      content: [{
        content: inspectionManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { uniqueName: "all", checked: selectedRowsId.includes(inspection.id), onChange: () => {
          setSelectedRowsId((currentSelectedInspections) => {
            setSelectAll(false);
            if (selectedRowsId.includes(inspection.id)) {
              return currentSelectedInspections.filter((selectedAssetId) => selectedAssetId !== inspection.id);
            } else {
              return [...currentSelectedInspections, inspection.id];
            }
          });
        } }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 121,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: inspection.inspectionReference }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 132,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: inspection.InspectionOrgUniqueId }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 134,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: (_b = (_a = inspection.asset) == null ? void 0 : _a.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b.stringValue }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 136,
          columnNumber: 18
        }, this)
      }, {
        content: getInspectionInstanceStatusChip(inspection.Status)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: inspection.inspectionForm.name }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 142,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: formattedUpdatedByName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: new Date((_c2 = inspection.updatedAt) != null ? _c2 : "").toLocaleString("en-GB", dateOptions) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 144,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: formattedCreatedByName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: new Date((_d = inspection.createdAt) != null ? _d : "").toLocaleString("en-GB", dateOptions) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 151,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: formattedStartedByName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: formattedStartedByName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 160,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: new Date((_e = inspection.startedAt) != null ? _e : "").toLocaleString("en-GB", dateOptions) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 161,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 159,
          columnNumber: 42
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 158,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: formattedCompletedByName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: formattedCompletedByName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: new Date((_f = inspection.completedAt) != null ? _f : "").toLocaleString("en-GB", dateOptions) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 168,
          columnNumber: 44
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 167,
          columnNumber: 18
        }, this)
      }, {
        content: inspectionManageRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { triggerClassName: "w-7", trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "w-7", onClick: () => {
        }, icon: "threeDotsVertical" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 176,
          columnNumber: 87
        }, this), dropdownMenuContent: [{
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "copy", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
              lineNumber: 178,
              columnNumber: 23
            }, this),
            "Duplicate"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 177,
            columnNumber: 24
          }, this),
          onClick: () => {
            navigation("../../inspection/duplicate/" + inspection.id, {
              relative: "path"
            });
          }
        }, {
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "bin", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
              lineNumber: 188,
              columnNumber: 23
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 187,
            columnNumber: 24
          }, this),
          onClick: () => {
            const formData = new FormData();
            formData.set("_action", "deleteInspectionInstance");
            formData.set("inspectionInstanceId", inspection.id.toString());
            submit(formData, {
              method: "post"
            });
          }
        }, {
          displayText: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "share", className: "pr-2" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
              lineNumber: 201,
              columnNumber: 23
            }, this),
            "Share"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
            lineNumber: 200,
            columnNumber: 24
          }, this),
          onClick: () => {
            const pureUrl = window.location.href.replace("inspections/list", "");
            switch (inspection.Status) {
              case "SCHEDULED":
                navigator.clipboard.writeText(pureUrl + inspection.id + "/unstartedInspectionInstance");
                break;
              case "STARTED":
                navigator.clipboard.writeText(pureUrl + inspection.id + "/doingInspectionInstance");
                break;
              default:
                break;
            }
            setDisplayAlert(true);
            setTimeout(() => setDisplayAlert(false), 5e3);
          }
        }] }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 176,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
          lineNumber: 219,
          columnNumber: 18
        }, this)
      }]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    displayAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "default", title: "Copied Link To Clipboard", onClose: () => {
      setDisplayAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
      lineNumber: 224,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { headers, rows: rowsToDisplay }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this),
    selectedRowsId.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableSelectBottomBar, { numberSelected: selectedRowsId.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => {
      const formData = new FormData();
      formData.set("_action", "deleteManyInspectionInstances");
      formData.set("inspectionInstanceIds", selectedRowsId.join("\xA3"));
      submit(formData, {
        method: "post"
      });
      setSelectedRowsId([]);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "bin", className: "pr-2" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
        lineNumber: 239,
        columnNumber: 15
      }, this),
      "Delete"
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
      lineNumber: 230,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
      lineNumber: 229,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
      lineNumber: 228,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.inspections.list.tsx",
    lineNumber: 223,
    columnNumber: 10
  }, this);
}
_s(InspectionList, "kpQAlECHRo7P1XWWJTD/fzd47hQ=", false, function() {
  return [useOutletContext, useSubmit, useNavigate];
});
_c = InspectionList;
var _c;
$RefreshReg$(_c, "InspectionList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InspectionList as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.inspections.list-MGU57ILV.js.map
