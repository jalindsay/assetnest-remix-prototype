import {
  CreateEditAsset
} from "/build/_shared/chunk-QPCZE6VR.js";
import "/build/_shared/chunk-A33ZQ7A5.js";
import "/build/_shared/chunk-MCM7CJEI.js";
import "/build/_shared/chunk-AQBS6DMO.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  getStorageClient
} from "/build/_shared/chunk-WQHIKOGJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import "/build/_shared/chunk-5M4FEYJV.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import "/build/_shared/chunk-EABXFNCQ.js";
import "/build/_shared/chunk-KIUIDWMV.js";
import "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  useActionData,
  useLoaderData
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

// app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx"
  );
  import.meta.hot.lastModified = "1706454925350.8892";
}
function EditAsset() {
  var _a, _b, _c2, _d, _e, _f;
  _s();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const storageClient = getStorageClient((_a = loaderData.STORAGE_URL) != null ? _a : "", (_b = loaderData.SUPABASE_SERVICE_ROLE_KEY) != null ? _b : "");
  const [assetPropertyValues, setAssetPropertyValues] = (0, import_react2.useState)((_c2 = loaderData.assetProperties) != null ? _c2 : {});
  const [selectedAssetCategoryId, setSelectedAssetCategoryId] = (0, import_react2.useState)(loaderData.assetCategoryId);
  const [imagesToDisplay, setImagesToDisplay] = (0, import_react2.useState)(loaderData.assetProperties["Photo Gallery"].map((image) => storageClient.from("assetnest").getPublicUrl("").data.publicUrl + image));
  const [imagesStoragePathData, setImagesStorageString] = (0, import_react2.useState)(loaderData.assetProperties["Photo Gallery"]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "self-start py-4 md:py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-gray-500", children: [
      "Asset / ",
      loaderData.assetProperties["Asset Name"],
      " /",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " font-semibold underline", children: "Duplicate Asset" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle} p-1`, children: "Duplicate Asset" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateEditAsset, { assetCategoriesData: loaderData.assetCategoriesData, assetNameError: (_d = actionData == null ? void 0 : actionData.assetNameError) != null ? _d : "", assetIDError: (_e = actionData == null ? void 0 : actionData.assetIDError) != null ? _e : "", assetPropertyValues, setAssetPropertyValues, setSelectedAssetCategoryId, selectedAssetCategoryId, imagesToDisplay, imagesStoragePathData, storageClient, setImagesStorageString, setImagesToDisplay, mapApiKey: (_f = loaderData.mapApiKey) != null ? _f : "" }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId.$assetId.duplicateAsset.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(EditAsset, "WdSOVNUEn8/d4kPXmpJofZHMmfY=", false, function() {
  return [useLoaderData, useActionData];
});
_c = EditAsset;
var _c;
$RefreshReg$(_c, "EditAsset");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditAsset as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId.$assetId.duplicateAsset-TBRWNXSS.js.map
