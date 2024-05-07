import {
  chip,
  chipBlueColor,
  chipGreenColor,
  chipYellowColor
} from "/build/_shared/chunk-77YRQQ4T.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/utils/getInpectionInstanceStatusChip.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/getInpectionInstanceStatusChip.tsx"
  );
  import.meta.hot.lastModified = "1706454925364.8354";
}
var getInspectionInstanceStatusChip = (status) => {
  switch (status) {
    case "COMPLETED":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${chipGreenColor} ${chip} w-fit`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "success", className: "pr-2" }, void 0, false, {
          fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        "Completed"
      ] }, void 0, true, {
        fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this);
    case "SCHEDULED":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${chipBlueColor} ${chip} w-fit `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "clock", className: "pr-2" }, void 0, false, {
          fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        "Scheduled"
      ] }, void 0, true, {
        fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this);
    case "STARTED":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${chipYellowColor} ${chip} w-fit`, children: "Started" }, void 0, false, {
        fileName: "app/utils/getInpectionInstanceStatusChip.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this);
  }
};

export {
  getInspectionInstanceStatusChip
};
//# sourceMappingURL=/build/_shared/chunk-IA5SHBWF.js.map
