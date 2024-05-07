import {
  getInspectionInstanceStatusChip
} from "/build/_shared/chunk-IA5SHBWF.js";
import {
  chip,
  chipGrayDarkColor,
  chipGreenColor,
  chipRedColor
} from "/build/_shared/chunk-77YRQQ4T.js";
import {
  getTimeSinceDateInFormattedString
} from "/build/_shared/chunk-UADOJQYD.js";
import {
  downloadFile
} from "/build/_shared/chunk-7DI3ROMD.js";
import {
  Tabs
} from "/build/_shared/chunk-OLVIM7ET.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import {
  Spinner,
  formatBytes
} from "/build/_shared/chunk-NJIHDZ66.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  getStorageClient
} from "/build/_shared/chunk-WQHIKOGJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  v4_default
} from "/build/_shared/chunk-EABXFNCQ.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle,
  secondaryText,
  subPageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  useActionData,
  useLoaderData,
  useNavigate,
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

// app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx
var import_node = __toESM(require_node());
var import_react4 = __toESM(require_react());

// app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx"
  );
  import.meta.hot.lastModified = "1706454925342.5867";
}
var UnStartedInspectionInstanceOverviewPanel = ({
  inspectionInstance
}) => {
  var _a, _b, _c4;
  _s();
  const navigation = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-4 md:p-8  w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle}`, children: inspectionInstance == null ? void 0 : inspectionInstance.inspectionReference }, void 0, false, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
      "Asset:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " hover: text-sky-400 hover:cursor-pointer hover:underline", onClick: () => {
        var _a2;
        navigation("../" + ((_a2 = inspectionInstance == null ? void 0 : inspectionInstance.asset) == null ? void 0 : _a2.id) + "/viewAsset");
      }, children: (_c4 = (_b = (_a = inspectionInstance == null ? void 0 : inspectionInstance.asset) == null ? void 0 : _a.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b.stringValue) != null ? _c4 : "" }, void 0, false, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: inspectionInstance && getInspectionInstanceStatusChip(inspectionInstance.Status) }, void 0, false, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceOverviewPanel.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(UnStartedInspectionInstanceOverviewPanel, "7sZc5EvTsFMSo4mPTlyGC/0+rew=", false, function() {
  return [useNavigate];
});
_c = UnStartedInspectionInstanceOverviewPanel;
var _c;
$RefreshReg$(_c, "UnStartedInspectionInstanceOverviewPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx"
  );
  import.meta.hot.lastModified = "1706454925342.4055";
}
var UnStartedInspectionInstanceContentPanel = ({
  displayTab,
  setDisplayTab,
  inspectionInstance,
  filesOnInstance,
  storageClient,
  setFilesOnInstance,
  saveFilePathsToBackEnd
}) => {
  var _a, _b, _c4, _d, _e, _f, _g, _h;
  _s2();
  const inspectionAssetStatus = (_c4 = (_b = (_a = inspectionInstance == null ? void 0 : inspectionInstance.asset) == null ? void 0 : _a.properties.find((property) => property.categoryProperty.label === "Status")) == null ? void 0 : _b.stringValue) != null ? _c4 : "";
  const fileInputRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs, { defaultValue: displayTab, className: "w-full pt-4", onValueChange: (value) => setDisplayTab(value), value: displayTab, tabs: [{
      value: "Detail",
      valueLabel: "Detail"
    }, {
      value: "Procedures",
      valueLabel: "Procedures"
    }, {
      value: "Series",
      valueLabel: "Series"
    }] }, void 0, false, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { innerClassName: "p-4 w-full", children: displayTab === "Detail" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${subPageTitle}`, children: "Detail" }, void 0, false, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: "Platform ID :" }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " break-normal	", children: inspectionInstance == null ? void 0 : inspectionInstance.PlatformID }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: " Count : " }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        (_f = (_e = (_d = inspectionInstance == null ? void 0 : inspectionInstance.asset) == null ? void 0 : _d.properties.find((property) => property.categoryProperty.label === "Number of Assets")) == null ? void 0 : _e.integerValue) != null ? _f : 0
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: " Status : " }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${inspectionAssetStatus === "active" ? chipGreenColor : inspectionAssetStatus === "inactive" ? chipGrayDarkColor : chipRedColor} ${chip}`, children: inspectionAssetStatus.charAt(0).toUpperCase() + inspectionAssetStatus.slice(1) }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: " Category : " }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: inspectionInstance == null ? void 0 : inspectionInstance.inspectionForm.name }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: " Last Updated :" }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: (inspectionInstance == null ? void 0 : inspectionInstance.updatedBy.firstName) + " " + (inspectionInstance == null ? void 0 : inspectionInstance.updatedBy.lastName) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${secondaryText}`, children: getTimeSinceDateInFormattedString(new Date((_g = inspectionInstance == null ? void 0 : inspectionInstance.updatedAt) != null ? _g : "")) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: " Created :" }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: (inspectionInstance == null ? void 0 : inspectionInstance.createdBy.firstName) + " " + (inspectionInstance == null ? void 0 : inspectionInstance.createdBy.lastName) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${secondaryText}`, children: getTimeSinceDateInFormattedString(new Date((_h = inspectionInstance == null ? void 0 : inspectionInstance.createdAt) != null ? _h : "")) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: "Longitude : " }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        " ",
        inspectionInstance == null ? void 0 : inspectionInstance.LocationLng
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " w-44 font-semibold", children: "Latitude : " }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        " ",
        inspectionInstance == null ? void 0 : inspectionInstance.LocationLat
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
      lineNumber: 58,
      columnNumber: 36
    }, this) : displayTab === "Procedures" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${subPageTitle}`, children: "Procedures" }, void 0, false, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " ml-auto  ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: () => {
            if (fileInputRef.current) {
              ;
              fileInputRef.current.click();
            }
          }, variant: "outline", className: "flex w-full justify-start", children: [
            "Add Files ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "addFolder", className: "pl-2" }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 121,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: () => {
            if (fileInputRef.current) {
              ;
              fileInputRef.current.click();
            }
          }, variant: "outline", size: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "addFolder" }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 131,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref: fileInputRef, id: "file", type: "file", accept: ".png, .jpg, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx", name: "imageData", onChange: async (e) => {
          if (e.target.files) {
            const toSaveStoragePaths = [];
            const newFilesOnInstance = [];
            const allFiles = [];
            Array.from(e.target.files).map(async (file) => {
              const fileId = v4_default();
              const pathToImage = "files/" + fileId + "/" + file.name;
              newFilesOnInstance.push({
                name: file.name,
                size: formatBytes(file.size),
                savedPath: pathToImage,
                uploading: true
              });
              toSaveStoragePaths.push(pathToImage);
              allFiles.push(file);
            });
            setFilesOnInstance([...filesOnInstance, ...newFilesOnInstance]);
            const results = await Promise.all(newFilesOnInstance.map(async (file, index) => {
              if (file.uploading) {
                await storageClient.from("assetnest").upload(file.savedPath, allFiles[index]);
              }
              file.uploading = false;
              return file;
            }));
            saveFilePathsToBackEnd([...filesOnInstance, ...results]);
          }
        }, multiple: true, className: " invisible hover:cursor-pointer" }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this),
        filesOnInstance.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full items-center  p-1 ", id: "file" + index, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pr-2", children: file.uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner, {}, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 168,
            columnNumber: 39
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "Folder" }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 168,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: file.name }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${secondaryText}`, children: file.size }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-auto flex flex-row items-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: " hover:cursor-pointer", icon: "download", onClick: async () => {
              await downloadFile(storageClient, file.savedPath, file.name);
            } }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 176,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: " hover:cursor-pointer", icon: "bin", onClick: async () => {
              const newFilesOnInstance = [...filesOnInstance];
              newFilesOnInstance[index].uploading = true;
              setFilesOnInstance(newFilesOnInstance);
              await storageClient.from("assetnest").remove([file.savedPath]);
              const newerFilesOnInstance = [...newFilesOnInstance];
              newerFilesOnInstance.splice(index, 1);
              saveFilePathsToBackEnd(newerFilesOnInstance);
            } }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 181,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
          lineNumber: 166,
          columnNumber: 53
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
      lineNumber: 110,
      columnNumber: 50
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${subPageTitle}`, children: "Series" }, void 0, false, {
        fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this),
      " Coming Soon"
    ] }, void 0, true, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
      lineNumber: 195,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/unStartedInspectionInstance/UnStartedInspectionInstanceContentPanel.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s2(UnStartedInspectionInstanceContentPanel, "YQqvMxdmg33cmOXmQcOjJm+FLVI=");
_c2 = UnStartedInspectionInstanceContentPanel;
var _c2;
$RefreshReg$(_c2, "UnStartedInspectionInstanceContentPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx"
  );
  import.meta.hot.lastModified = "1706454925352.3325";
}
function UnStartedInspectionInstance() {
  var _a, _b, _c4, _d;
  _s3();
  const loaderData = useLoaderData();
  const submit = useSubmit();
  const actionData = useActionData();
  (0, import_react4.useEffect)(() => {
    var _a2, _b2;
    setInspectionInstance(loaderData.inspectionInstance);
    setFilesOnInstance((_b2 = (_a2 = loaderData.inspectionInstance) == null ? void 0 : _a2.SupportingFiles.map((file) => {
      const name = file.inspectionFileUrl.split("/")[file.inspectionFileUrl.split("/").length - 1];
      const savedPath = file.inspectionFileUrl;
      const fileSize = file.inspectionFileSize;
      return {
        name,
        savedPath,
        size: fileSize,
        uploading: false
      };
    })) != null ? _b2 : []);
  }, [loaderData]);
  (0, import_react4.useEffect)(() => {
    var _a2, _b2;
    if (actionData == null ? void 0 : actionData.inspectionInstance) {
      setInspectionInstance(actionData.inspectionInstance);
      setFilesOnInstance((_b2 = (_a2 = actionData.inspectionInstance) == null ? void 0 : _a2.SupportingFiles.map((file) => {
        const name = file.inspectionFileUrl.split("/")[file.inspectionFileUrl.split("/").length - 1];
        const savedPath = file.inspectionFileUrl;
        const fileSize = file.inspectionFileSize;
        return {
          name,
          savedPath,
          size: fileSize,
          uploading: false
        };
      })) != null ? _b2 : []);
    }
  }, [actionData]);
  const storageClient = getStorageClient(loaderData.STORAGE_URL, loaderData.SUPABASE_SERVICE_ROLE_KEY);
  const [inspectionInstance, setInspectionInstance] = (0, import_react4.useState)();
  const [displayTab, setDisplayTab] = (0, import_react4.useState)("Detail");
  const [filesOnInstance, setFilesOnInstance] = (0, import_react4.useState)();
  const navigation = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "self-start py-4 md:py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " text-gray-500", children: [
      "Inspections /",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: " font-semibold underline", children: inspectionInstance == null ? void 0 : inspectionInstance.inspectionReference }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: `${pageTitle} p-1`, children: "Inspections" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden justify-end md:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pr-8", children: loaderData.inspectionManage && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: " w-44", onClick: () => {
        navigation("../editInspectionInstance", {
          relative: "path"
        });
      }, children: "Edit" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 157,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: " w-44", onClick: () => {
        const formData = new FormData();
        formData.set("_action", "startInspection");
        submit(formData, {
          method: "post"
        });
      }, variant: "outline", children: "Start Inspection" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-end md:hidden", children: loaderData.inspectionManage && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline", size: "icon", onClick: () => {
      navigation("../editInspectionInstance", {
        relative: "path"
      });
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: "edit" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 181,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 176,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex w-full flex-col md:hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UnStartedInspectionInstanceOverviewPanel, { inspectionInstance: inspectionInstance != null ? inspectionInstance : null }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-96 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MapComponent, { apiKey: loaderData.mapApiKey, markersCoordinates: [{
        lng: (_a = inspectionInstance == null ? void 0 : inspectionInstance.LocationLng) != null ? _a : 0,
        lat: (_b = inspectionInstance == null ? void 0 : inspectionInstance.LocationLat) != null ? _b : 0
      }], stopMovingMap: true }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "default", className: "w-full ", onClick: () => {
      }, children: "Start Inspection" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UnStartedInspectionInstanceContentPanel, { displayTab, setDisplayTab, inspectionInstance: inspectionInstance != null ? inspectionInstance : null, filesOnInstance: filesOnInstance != null ? filesOnInstance : [], storageClient, saveFilePathsToBackEnd: (newFiles) => {
      }, setFilesOnInstance }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:flex ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UnStartedInspectionInstanceOverviewPanel, { inspectionInstance: inspectionInstance != null ? inspectionInstance : null }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 201,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 200,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:flex ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UnStartedInspectionInstanceContentPanel, { displayTab, setDisplayTab, inspectionInstance: inspectionInstance != null ? inspectionInstance : null, filesOnInstance: filesOnInstance != null ? filesOnInstance : [], storageClient, saveFilePathsToBackEnd: (newFiles) => {
        const filePaths = newFiles.map((file) => file.savedPath);
        const fileSizes = newFiles.map((file) => file.size);
        const formData = new FormData();
        formData.set("_action", "changeSupportingFiles");
        formData.set("newFilePaths", filePaths.join("////"));
        formData.set("newFileSizes", fileSizes.join("////"));
        submit(formData, {
          method: "post"
        });
      }, setFilesOnInstance }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/2 p-2 pt-[4.25rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-96 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MapComponent, { apiKey: loaderData.mapApiKey, markersCoordinates: [{
        lng: (_c4 = inspectionInstance == null ? void 0 : inspectionInstance.LocationLng) != null ? _c4 : 0,
        lat: (_d = inspectionInstance == null ? void 0 : inspectionInstance.LocationLat) != null ? _d : 0
      }], stopMovingMap: true }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_s3(UnStartedInspectionInstance, "B9pR6jRmFCgHABo/kCw0V7LvtBQ=", false, function() {
  return [useLoaderData, useSubmit, useActionData, useNavigate];
});
_c3 = UnStartedInspectionInstance;
var _c3;
$RefreshReg$(_c3, "UnStartedInspectionInstance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UnStartedInspectionInstance as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.$inspectionInstanceId.unstartedInspectionInstance-ML4LX7N3.js.map
