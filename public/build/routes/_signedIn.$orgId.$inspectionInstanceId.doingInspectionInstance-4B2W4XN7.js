import {
  require_build
} from "/build/_shared/chunk-ZMBM2L6W.js";
import "/build/_shared/chunk-W6Q4MLZS.js";
import {
  downloadFile
} from "/build/_shared/chunk-7DI3ROMD.js";
import {
  Tabs
} from "/build/_shared/chunk-OLVIM7ET.js";
import "/build/_shared/chunk-3YFQHQJO.js";
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
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import {
  v4_default
} from "/build/_shared/chunk-EABXFNCQ.js";
import {
  TextArea
} from "/build/_shared/chunk-KIUIDWMV.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
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

// app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_react_signature_canvas = __toESM(require_build());
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx"
  );
  import.meta.hot.lastModified = "1706454925351.7822";
}
function UnStartedInspectionInstance() {
  var _a, _b, _c2, _d, _e, _f;
  _s();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  (0, import_react2.useEffect)(() => {
    var _a2;
    setSignatureUrl((_a2 = actionData == null ? void 0 : actionData.newSignatureUrl) != null ? _a2 : void 0);
  }, [actionData == null ? void 0 : actionData.newSignatureUrl]);
  const [displayTab, setDisplayTab] = (0, import_react2.useState)("Inspection");
  const [filesOnInstance, setFilesOnInstance] = (0, import_react2.useState)();
  const navigation = useNavigate();
  const storageClient = getStorageClient(loaderData.STORAGE_URL, loaderData.SUPABASE_SERVICE_ROLE_KEY);
  const [imagesToDisplay, setImagesToDisplay] = (0, import_react2.useState)([]);
  const [passFail, setPassFail] = (0, import_react2.useState)();
  const [comment, setComment] = (0, import_react2.useState)("");
  const [imagesStoragePathData, setImagesStorageString] = (0, import_react2.useState)([]);
  const [openCanvas, setOpenCanvas] = (0, import_react2.useState)(false);
  const sigCanvas = (0, import_react2.useRef)(null);
  const [signatureUrl, setSignatureUrl] = (0, import_react2.useState)(loaderData.signatureImg);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "self-start py-4 md:py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hover:cursor-pointer hover:underline", onClick: () => {
      navigation("../inspections/list");
    }, children: "Close" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-4 md:p-8  w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${subPageTitle}`, children: (_a = loaderData.inspectionInstance) == null ? void 0 : _a.inspectionReference }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2", children: [
          "Asset:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-sky-400 hover:cursor-pointer hover:underline", onClick: () => {
            var _a2, _b2;
            navigation("../" + ((_b2 = (_a2 = loaderData.inspectionInstance) == null ? void 0 : _a2.asset) == null ? void 0 : _b2.id) + "/viewAsset");
          }, children: (_e = (_d = (_c2 = (_b = loaderData.inspectionInstance) == null ? void 0 : _b.asset) == null ? void 0 : _c2.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _d.stringValue) != null ? _e : "" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { defaultValue: "assetList", className: "w-full", onValueChange: (value) => setDisplayTab(value), value: displayTab, tabs: [{
        value: "Inspection",
        valueLabel: "Inspection"
      }, {
        value: "Defects",
        valueLabel: "Defects"
      }, {
        value: "Procedures",
        valueLabel: "Procedures"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      displayTab === "Inspection" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        ((_f = loaderData.inspectionInstance) == null ? void 0 : _f.inspectionForm.inspectionFormQuestion.find((question) => question.questionType === "PassFail")) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-4 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col md:w-80", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full pb-2  md:w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", variant: passFail ? "outlineGreen" : "outline", onClick: () => {
            setPassFail(true);
          }, children: "Pass" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 197,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", variant: passFail === false ? "outlineRed" : "outline", onClick: () => {
            setPassFail(false);
          }, children: "Fail" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 204,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 203,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 195,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 194,
          columnNumber: 141
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-4 w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: subPageTitle, children: "Media" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: secondaryText, children: "Add images of your inspection here. Defects should be reported under the defect tab." }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-0 w-full justify-center rounded border-2 hover:cursor-pointer  md:w-80 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "file", className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex w-full flex-row items-center justify-center p-1 hover:cursor-pointer", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "addMediaImage", className: "p-1" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 222,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Add Photos" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 223,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 221,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 220,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invisible absolute rounded bg-slate-300 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "file", type: "file", accept: ".png, .jpg", name: "imageData", onChange: async (e) => {
                if (e.target.files) {
                  const toSaveDisplay = [];
                  const toSaveStoragePaths = [];
                  await Promise.all(Array.from(e.target.files).map(async (file) => {
                    const newUrl = URL.createObjectURL(file);
                    toSaveDisplay.push(newUrl);
                    const imageID = v4_default();
                    const pathToImage = "inspectionInstance/" + imageID;
                    await storageClient.from("assetnest").upload(pathToImage, file);
                    toSaveStoragePaths.push(pathToImage);
                  }));
                  setImagesStorageString([...imagesStoragePathData, ...toSaveStoragePaths]);
                  setImagesToDisplay([...imagesToDisplay, ...toSaveDisplay]);
                }
              }, multiple: true, className: " invisible hover:cursor-pointer" }, void 0, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 227,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 219,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:flex max-sm:flex-wrap max-sm:justify-center", children: imagesToDisplay.map((imageToDisplay, index) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex flex-wrap  p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-0  h-20  w-20 cursor-pointer justify-center rounded border sm:h-40 sm:w-40", onClick: () => {
                const indexToRemove = index;
                const newImagesStoragePathData = [...imagesStoragePathData];
                const newImagesToDisplay = [...imagesToDisplay];
                const pathToImage = newImagesStoragePathData[indexToRemove];
                newImagesStoragePathData.splice(indexToRemove, 1);
                newImagesToDisplay.splice(indexToRemove, 1);
                storageClient.from("assetnest").remove([pathToImage]);
                setImagesStorageString([...newImagesStoragePathData]);
                setImagesToDisplay([...newImagesToDisplay]);
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "images[]", className: " hidden ", value: imagesStoragePathData[index] }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 259,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-full w-full", src: imageToDisplay, alt: "" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 260,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 248,
                columnNumber: 25
              }, this) }, index, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 247,
                columnNumber: 24
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  md:w-80", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: subPageTitle, children: "Comments" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 267,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArea, { noPadding: true, onChange: (newValue) => {
              setComment(newValue);
            }, value: comment }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 268,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: subPageTitle, children: "Signature" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: secondaryText, children: "To verify your identity, add your signature below. This will be saved to your profile and allow for more efficient inspections." }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 274,
              columnNumber: 17
            }, this),
            signatureUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-52 w-full  border md:w-80 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: signatureUrl, alt: "signature", className: "max-h-52" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 280,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 279,
              columnNumber: 33
            }, this) : openCanvas ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full  md:w-80", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " h-52 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_signature_canvas.default, { penColor: "black", canvasProps: {
                className: "bg-white border border-gray-300 rounded-md h-full w-full"
              }, ref: sigCanvas }, void 0, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 283,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 282,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4 py-8", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", size: "sm", onClick: () => setOpenCanvas(false), children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 288,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", size: "sm", onClick: () => {
                  var _a2;
                  return (_a2 = sigCanvas == null ? void 0 : sigCanvas.current) == null ? void 0 : _a2.clear();
                }, children: "Clear" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 291,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "default", size: "sm", onClick: () => {
                  var _a2;
                  const URL2 = (_a2 = sigCanvas == null ? void 0 : sigCanvas.current) == null ? void 0 : _a2.getCanvas().toDataURL("image/png");
                  const formData = new FormData();
                  formData.set("_action", "newSignature");
                  formData.set("signatureData", URL2 != null ? URL2 : "");
                  submit(formData, {
                    method: "post"
                  });
                }, children: "Create" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                  lineNumber: 294,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
                lineNumber: 287,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 281,
              columnNumber: 41
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  h-52 w-full items-center justify-center border md:w-80 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => setOpenCanvas(true), children: "Create Signature" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 307,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
              lineNumber: 306,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 193,
        columnNumber: 41
      }, this),
      displayTab === "Defects" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "Defects Coming Soon" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 314,
        columnNumber: 38
      }, this),
      displayTab === "Procedures" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { innerClassName: "p-8 w-full", children: filesOnInstance && filesOnInstance.length > 0 ? filesOnInstance == null ? void 0 : filesOnInstance.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center  p-1  md:w-80", id: "file" + index, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "Folder" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 318,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 317,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: file.name }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 321,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText}`, children: file.size }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
            lineNumber: 322,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 320,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto flex flex-row items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: " hover:cursor-pointer", icon: "download", onClick: async () => {
          await downloadFile(storageClient, file.savedPath, file.name);
        } }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 326,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 325,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
          lineNumber: 324,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 316,
        columnNumber: 100
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center  p-1  md:w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "No files attached to this inspection" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 332,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 331,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
        lineNumber: 315,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { disabled: passFail === void 0, className: " w-full md:w-80", onClick: () => {
      var _a2;
      const formData = new FormData();
      formData.set("_action", "completeInspection");
      formData.set("passFail", (_a2 = passFail == null ? void 0 : passFail.toString()) != null ? _a2 : "");
      formData.set("comment", comment);
      imagesStoragePathData.forEach((imageStoragePath) => {
        formData.set("images[]", imageStoragePath);
      });
      submit(formData, {
        method: "post"
      });
    }, children: "Complete Inspection" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
      lineNumber: 337,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
      lineNumber: 336,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance.tsx",
    lineNumber: 159,
    columnNumber: 10
  }, this);
}
_s(UnStartedInspectionInstance, "I8McOvb02z93BQ9kmtlFbMXhDLU=", false, function() {
  return [useLoaderData, useActionData, useSubmit, useNavigate];
});
_c = UnStartedInspectionInstance;
var _c;
$RefreshReg$(_c, "UnStartedInspectionInstance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UnStartedInspectionInstance as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.$inspectionInstanceId.doingInspectionInstance-4B2W4XN7.js.map
