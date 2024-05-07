import {
  HoverCard
} from "/build/_shared/chunk-A33ZQ7A5.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import {
  v4_default
} from "/build/_shared/chunk-EABXFNCQ.js";
import {
  TextArea
} from "/build/_shared/chunk-KIUIDWMV.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  importantText,
  secondaryText,
  subPageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import {
  Form,
  useNavigate
} from "/build/_shared/chunk-PCSBLE76.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/page/createEditAsset/CreateEditAssetInputs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createEditAsset/CreateEditAssetInputs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createEditAsset/CreateEditAssetInputs.tsx"
  );
  import.meta.hot.lastModified = "1706454925336.9656";
}
var CreateAssetInputs = ({
  property,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues
}) => {
  var _a, _b, _c6, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  switch (property.type) {
    case "STRING":
      let errorText = "";
      if (property.label === "Asset Name") {
        errorText = assetNameError != null ? assetNameError : "";
      } else if (property.label === "Asset ID") {
        errorText = assetIDError != null ? assetIDError : "";
      }
      if (property.label === "Platform ID") {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: property.label, placeholder: (_a = property.placeholder) != null ? _a : "", label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-2", children: property.label }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoverCard, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "help" }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
            lineNumber: 45,
            columnNumber: 37
          }, this), content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${importantText} text-base`, children: "Platform ID" }, void 0, false, {
              fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
              lineNumber: 46,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText} font-normal leading-5`, children: "Each asset is automatically assigned a unique alphanumeric code. This identifier ensure that no two assets are confused, even if they have similar names or characteristics." }, void 0, false, {
              fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
              lineNumber: 49,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
            lineNumber: 45,
            columnNumber: 68
          }, this) }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
          lineNumber: 43,
          columnNumber: 97
        }, this), value: (_c6 = (_b = assetPropertyValues[property.label]) == null ? void 0 : _b.toString()) != null ? _c6 : "", onChange: () => {
        }, error: !!errorText, helpText: errorText }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
          lineNumber: 43,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: property.label, placeholder: (_d = property.placeholder) != null ? _d : "", label: property.label, value: (_f = (_e = assetPropertyValues[property.label]) == null ? void 0 : _e.toString()) != null ? _f : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps[property.label] = newValue;
        setAssetPropertyValues(newAssetProps);
      }, error: !!errorText, helpText: errorText }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
        lineNumber: 58,
        columnNumber: 14
      }, this);
    case "INTEGER":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: property.label, placeholder: (_g = property.placeholder) != null ? _g : "", number: true, label: property.label, value: (_i = (_h = assetPropertyValues[property.label]) == null ? void 0 : _h.toString()) != null ? _i : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        const numericRegex = /[^0-9]/g;
        newAssetProps[property.label] = newValue.replace(numericRegex, "");
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
        lineNumber: 66,
        columnNumber: 14
      }, this);
    case "STRINGLONG":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArea, { name: property.label, placeholder: (_j = property.placeholder) != null ? _j : "", label: property.label, value: (_l = (_k = assetPropertyValues[property.label]) == null ? void 0 : _k.toString()) != null ? _l : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps[property.label] = newValue;
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
        lineNumber: 75,
        columnNumber: 14
      }, this);
    case "LIST":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { name: property.label, label: property.label, valueCurrent: (_n = (_m = assetPropertyValues[property.label]) == null ? void 0 : _m.toString()) != null ? _n : property.options[0], possibleValues: property.options.map((option) => {
        return {
          value: option,
          valueLabel: option.charAt(0).toUpperCase() + option.slice(1)
        };
      }), onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps[property.label] = newValue;
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
        lineNumber: 83,
        columnNumber: 14
      }, this);
    case "MONEY":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { leadingText: "\xA3", name: property.label, placeholder: (_o = property.placeholder) != null ? _o : "", number: true, label: property.label, value: (_q = (_p = assetPropertyValues[property.label]) == null ? void 0 : _p.toString()) != null ? _q : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps[property.label] = newValue;
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetInputs.tsx",
        lineNumber: 96,
        columnNumber: 14
      }, this);
    default:
      break;
  }
};
_c = CreateAssetInputs;
var _c;
$RefreshReg$(_c, "CreateAssetInputs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx"
  );
  import.meta.hot.lastModified = "1706454925337.1096";
}
var CreateAssetDetailsSection = ({
  assetCategoriesData,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues,
  setSelectedAssetCategoryId,
  selectedAssetCategoryId
}) => {
  var _a, _b;
  const getSortValue = (label) => {
    switch (label) {
      case "Asset Name":
        return 1;
      case "Number of Assets":
        return 2;
      case "Asset ID":
        return 3;
      case "Platform ID":
        return 4;
      case "Value":
        return 5;
      case "Status":
        return 6;
      case "Description":
        return 7;
      default:
        return 1e3;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: [
    (_a = assetCategoriesData.find((assetCategoryData) => assetCategoryData.id === selectedAssetCategoryId)) == null ? void 0 : _a.categoryProperties.filter((property) => property.type === "STRING" || property.type === "INTEGER" || property.type === "MONEY" || property.type === "LIST" || property.type === "STRINGLONG").sort((a, b) => {
      const aSortValue = getSortValue(a.label);
      const bSortValue = getSortValue(b.label);
      return aSortValue > bSortValue ? 1 : -1;
    }).map((property, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreateAssetInputs, { property, assetNameError, assetIDError, assetPropertyValues, setAssetPropertyValues }, index, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx",
        lineNumber: 58,
        columnNumber: 14
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectInput, { name: "Category", onChange: (value) => {
      setSelectedAssetCategoryId(parseInt(value));
    }, label: "Category", valueCurrent: (_b = selectedAssetCategoryId == null ? void 0 : selectedAssetCategoryId.toString()) != null ? _b : "", possibleValues: assetCategoriesData.map((assetCategory) => {
      return {
        value: assetCategory.id.toString(),
        valueLabel: assetCategory.name
      };
    }) }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createEditAsset/CreateEditAssetSectionDetails.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_c2 = CreateAssetDetailsSection;
var _c2;
$RefreshReg$(_c2, "CreateAssetDetailsSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx"
  );
  import.meta.hot.lastModified = "1706454925337.2534";
}
var CreateAssetImageInput = ({
  imagesToDisplay,
  imagesStoragePathData,
  storageClient,
  setImagesStorageString,
  setImagesToDisplay
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-sm:flex max-sm:flex-wrap max-sm:justify-center", children: [
    imagesToDisplay.map((imageToDisplay, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inline-flex flex-wrap  p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "z-0  h-20  w-20 cursor-pointer justify-center rounded border sm:h-40 sm:w-40", onClick: () => {
        const indexToRemove = index;
        const newImagesStoragePathData = [...imagesStoragePathData];
        const newImagesToDisplay = [...imagesToDisplay];
        newImagesStoragePathData.splice(indexToRemove, 1);
        newImagesToDisplay.splice(indexToRemove, 1);
        setImagesStorageString([...newImagesStoragePathData]);
        setImagesToDisplay([...newImagesToDisplay]);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "images[]", className: " hidden ", value: imagesStoragePathData[index] }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "h-full w-full", src: imageToDisplay, alt: "" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, index, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 32,
        columnNumber: 14
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inline-flex  justify-center p-2 align-bottom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "z-0 h-20  w-20  justify-center rounded border bg-slate-300 hover:cursor-pointer sm:h-40 sm:w-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "file", className: "flex h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " flex w-full flex-col items-center justify-center hover:cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { icon: "add", className: "h-10 w-10 p-1" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Add More" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invisible absolute rounded bg-slate-300 hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "file", type: "file", accept: ".png, .jpg", name: "imageData", onChange: async (e) => {
        if (e.target.files) {
          const toSaveDisplay = [];
          const toSaveStoragePaths = [];
          await Promise.all(Array.from(e.target.files).map(async (file) => {
            const newUrl = URL.createObjectURL(file);
            toSaveDisplay.push(newUrl);
            const imageID = v4_default();
            const pathToImage = "asset/" + imageID;
            await storageClient.from("assetnest").upload(pathToImage, file);
            toSaveStoragePaths.push(pathToImage);
          }));
          setImagesStorageString([...imagesStoragePathData, ...toSaveStoragePaths]);
          setImagesToDisplay([...imagesToDisplay, ...toSaveDisplay]);
        }
      }, multiple: true, className: " invisible hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createEditAsset/CreateEditAssetSectionImage.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c3 = CreateAssetImageInput;
var _c3;
$RefreshReg$(_c3, "CreateAssetImageInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx"
  );
  import.meta.hot.lastModified = "1705519263359.6475";
}
var CreateAssetMapSection = ({
  assetPropertyValues,
  setAssetPropertyValues,
  mapApiKey
}) => {
  var _a, _b, _c6, _d, _e, _f;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-96 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MapComponent, { apiKey: mapApiKey, markersCoordinates: assetPropertyValues["Latitude"] ? [{
      lat: (_a = assetPropertyValues["Latitude"]) != null ? _a : void 0,
      lng: (_b = assetPropertyValues["Longitude"]) != null ? _b : void 0
    }] : [], onClick: (event) => {
      var _a2, _b2;
      const lat = (_a2 = event.latLng) == null ? void 0 : _a2.lat();
      const lng = (_b2 = event.latLng) == null ? void 0 : _b2.lng();
      const newAssetProps = {
        ...assetPropertyValues
      };
      newAssetProps["Longitude"] = lng != null ? lng : "";
      newAssetProps["Latitude"] = lat != null ? lat : "";
      setAssetPropertyValues(newAssetProps);
    } }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextInput, { number: true, name: "Longitude", label: "Longitude", value: (_d = (_c6 = assetPropertyValues["Longitude"]) == null ? void 0 : _c6.toString()) != null ? _d : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps["Longitude"] = newValue;
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextInput, { number: true, name: "Latitude", label: "Latitude", value: (_f = (_e = assetPropertyValues["Latitude"]) == null ? void 0 : _e.toString()) != null ? _f : "", onChange: (newValue) => {
        const newAssetProps = {
          ...assetPropertyValues
        };
        newAssetProps["Latitude"] = newValue;
        setAssetPropertyValues(newAssetProps);
      } }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createEditAsset/CreateEditAssetSectionMap.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c4 = CreateAssetMapSection;
var _c4;
$RefreshReg$(_c4, "CreateAssetMapSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createEditAsset/CreateEditAsset.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createEditAsset/CreateEditAsset.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createEditAsset/CreateEditAsset.tsx"
  );
  import.meta.hot.lastModified = "1706454925336.7893";
}
var CreateEditAsset = ({
  assetCategoriesData,
  assetNameError,
  assetIDError,
  assetPropertyValues,
  setAssetPropertyValues,
  setSelectedAssetCategoryId,
  selectedAssetCategoryId,
  imagesToDisplay,
  imagesStoragePathData,
  storageClient,
  setImagesStorageString,
  setImagesToDisplay,
  mapApiKey
}) => {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onSubmit: () => {
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-3/5 p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Details" }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { innerClassName: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetDetailsSection, { assetCategoriesData, assetNameError, assetIDError, assetPropertyValues, setAssetPropertyValues, setSelectedAssetCategoryId, selectedAssetCategoryId }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Image Gallery" }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { innerClassName: "p-8 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetImageInput, { imagesToDisplay, imagesStoragePathData, storageClient, setImagesStorageString, setImagesToDisplay }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " w-2/5 p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Location" }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { innerClassName: "p-8 h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetMapSection, { assetPropertyValues, setAssetPropertyValues, mapApiKey }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "w-40 text-left hover:underline", variant: "outline", onClick: () => navigate(-1), children: "Cancel" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { submit: true, className: "w-40", children: "Save Asset" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card, { innerClassName: "p-4 md:p-8 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Details" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetDetailsSection, { assetCategoriesData, assetNameError: assetNameError != null ? assetNameError : "", assetIDError: assetIDError != null ? assetIDError : "", assetPropertyValues, setAssetPropertyValues, setSelectedAssetCategoryId, selectedAssetCategoryId }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Image Gallery" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetImageInput, { imagesToDisplay, imagesStoragePathData, storageClient, setImagesStorageString, setImagesToDisplay }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `${subPageTitle} p-1`, children: "Location" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CreateAssetMapSection, { assetPropertyValues, setAssetPropertyValues, mapApiKey }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { className: "w-28 text-left hover:underline sm:w-24", variant: "outline", onClick: () => navigate(-1), children: "Cancel" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { submit: true, className: "w-28", children: "Save Asset" }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createEditAsset/CreateEditAsset.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s(CreateEditAsset, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c5 = CreateEditAsset;
var _c5;
$RefreshReg$(_c5, "CreateEditAsset");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CreateEditAsset
};
//# sourceMappingURL=/build/_shared/chunk-QPCZE6VR.js.map
