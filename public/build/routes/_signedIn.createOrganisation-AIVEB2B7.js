import {
  ReactMultiEmail
} from "/build/_shared/chunk-ZHXCOOLH.js";
import {
  Dialog
} from "/build/_shared/chunk-MPSXSIKS.js";
import "/build/_shared/chunk-FGISBVNF.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-PWXBGVB3.js";
import {
  allCountries
} from "/build/_shared/chunk-WUT4HZNP.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import {
  ChevronDown
} from "/build/_shared/chunk-Z3JU42I3.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-EGFG2AV4.js";
import {
  Avatar
} from "/build/_shared/chunk-Z2WGMD7I.js";
import {
  TextArea
} from "/build/_shared/chunk-KIUIDWMV.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import {
  Label
} from "/build/_shared/chunk-LTYRFPHA.js";
import {
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-BIAIJ7JX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  importantText,
  pageTitle,
  secondaryText,
  subPageTitle,
  tableHeader,
  textRegular
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends,
  cn
} from "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  Link,
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

// app/routes/_signedIn.createOrganisation.tsx
var import_node = __toESM(require_node());
var import_react6 = __toESM(require_react());

// app/components/ui/shadUi/ui/progress.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $67824d98245208a0$var$PROGRESS_NAME = "Progress";
var $67824d98245208a0$var$DEFAULT_MAX = 100;
var [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($67824d98245208a0$var$PROGRESS_NAME);
var [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
var $67824d98245208a0$export$b25a304ec7d746bb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeProgress, value: valueProp, max: maxProp, getValueLabel = $67824d98245208a0$var$defaultGetValueLabel, ...progressProps } = props;
  const max = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
  const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max) ? valueProp : null;
  const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max) : void 0;
  return /* @__PURE__ */ (0, import_react.createElement)($67824d98245208a0$var$ProgressProvider, {
    scope: __scopeProgress,
    value,
    max
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    "data-state": $67824d98245208a0$var$getProgressState(value, max),
    "data-value": value !== null && value !== void 0 ? value : void 0,
    "data-max": max
  }, progressProps, {
    ref: forwardedRef
  })));
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
  max(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue))
      return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
    return null;
  },
  value(props, propName, componentName) {
    const valueProp = props[propName];
    const strVal = String(valueProp);
    const max = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
    if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max))
      return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
    return null;
  }
};
var $67824d98245208a0$var$INDICATOR_NAME = "ProgressIndicator";
var $67824d98245208a0$export$2b776f7e7ee60dbd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  var _context$value;
  const { __scopeProgress, ...indicatorProps } = props;
  const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
    "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : void 0,
    "data-max": context.max
  }, indicatorProps, {
    ref: forwardedRef
  }));
});
function $67824d98245208a0$var$defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function $67824d98245208a0$var$isNumber(value) {
  return typeof value === "number";
}
function $67824d98245208a0$var$isValidMaxNumber(max) {
  return $67824d98245208a0$var$isNumber(max) && !isNaN(max) && max > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max) {
  return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
var $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;

// app/components/ui/shadUi/ui/progress.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/progress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/progress.tsx"
  );
  import.meta.hot.lastModified = "1705519263367.2095";
}
var ProgressShad = React.forwardRef(_c = ({
  className,
  value,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($67824d98245208a0$export$be92b6f5f03c0fe9, { ref, className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($67824d98245208a0$export$adb584737d712b70, { className: "h-full w-full flex-1 bg-primary transition-all", style: {
  transform: `translateX(-${100 - (value || 0)}%)`
} }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/progress.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/progress.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c2 = ProgressShad;
ProgressShad.displayName = $67824d98245208a0$export$be92b6f5f03c0fe9.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "ProgressShad$React.forwardRef");
$RefreshReg$(_c2, "ProgressShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/ProgressBar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/ProgressBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/ProgressBar.tsx"
  );
  import.meta.hot.lastModified = "1705519263364.6475";
}
var ProgressBar = ({
  progress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressShad, { value: progress }, void 0, false, {
    fileName: "app/components/ui/ProgressBar.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c3 = ProgressBar;
var _c3;
$RefreshReg$(_c3, "ProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/CreateOrgPageBaseInfo.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createOrg/CreateOrgPageBaseInfo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx"
  );
  import.meta.hot.lastModified = "1706454925339.3118";
}
var CreateOrgPageBaseInfo = ({
  name,
  setName,
  nameError,
  setDescription,
  description,
  descriptionError,
  setAddress,
  address,
  addressError,
  setCity,
  city,
  cityError,
  setCountry,
  country,
  setPostcode,
  postcode,
  postcodeError
}) => {
  const listOfCountries = allCountries.map((country2) => {
    return {
      value: country2.code,
      valueLabel: country2.name
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextInput, { name: "name", onChange: (value) => {
        if (value.length < 250) {
          setName(value);
        }
      }, value: name, placeholder: "Name", label: "Give your organisation a name", error: !!nameError, helpText: nameError != null ? nameError : "", noPadding: true }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextArea, { name: "description", onChange: (value) => {
        if (value.length < 250) {
          setDescription(value);
        }
      }, value: description, placeholder: "Description", label: "Add a short description about your organisation", error: !!descriptionError, helpText: descriptionError != null ? descriptionError : "", noPadding: true }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: `${subPageTitle} py-2`, children: "Location" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextArea, { name: "address", onChange: (value) => {
      if (value.length < 250) {
        setAddress(value);
      }
    }, value: address, placeholder: "Street Address", label: "Street Address", error: !!addressError, helpText: addressError != null ? addressError : "", noPadding: true }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextInput, { name: "city", onChange: (value) => {
      if (value.length < 250) {
        setCity(value);
      }
    }, value: city, placeholder: "City", label: "City", error: !!cityError, helpText: cityError != null ? cityError : "", noPadding: true }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectInput, { name: "country", label: "Country", valueCurrent: country.code, onChange: (newValue) => {
      var _a;
      setCountry((_a = allCountries.find((country2) => country2.code === newValue)) != null ? _a : {
        name: "United Kingdom",
        code: "GB"
      });
    }, possibleValues: listOfCountries, noPadding: true }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-32 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextInput, { name: "postcode", onChange: (value) => {
      if (value.length < 250) {
        setPostcode(value);
      }
    }, value: postcode, placeholder: "Postcode", label: "Postcode", error: !!postcodeError, helpText: postcodeError != null ? postcodeError : "", noPadding: true }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createOrg/CreateOrgPageBaseInfo.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
};
_c4 = CreateOrgPageBaseInfo;
var _c4;
$RefreshReg$(_c4, "CreateOrgPageBaseInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/CreateOrgPageLogo.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createOrg/CreateOrgPageLogo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createOrg/CreateOrgPageLogo.tsx"
  );
  import.meta.hot.lastModified = "1706454925339.8757";
}
var CreateOrgPageLogo = ({
  updateOrgIconImage,
  iconPathLocal: imageIconPathLocal
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: `${subPageTitle}`, children: "Icon" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Adding an icon will help to identify your organisation. This is especially useful if you have more than one." }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${textRegular} py-4`, children: [
      "Some tips on choosing your icon:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: " list-disc pl-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Use a graphical logo or image rather than text." }, void 0, false, {
          fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Upload an image that is 320 px square or larger." }, void 0, false, {
          fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Use the tools to resize and crop your logo to fit.(Feature to be added in future)" }, void 0, false, {
          fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " py-2 text-sm font-bold", children: "Upload an icon" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " py-4 text-xs", children: "File types: jpeg, png" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative pb-4 hover:cursor-pointer hover:underline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "file", name: "icon", accept: "image/png, image/jpeg", onChange: updateOrgIconImage, className: "absolute  opacity-0" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-primary", children: "Choose file" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    imageIconPathLocal && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "h-52 w-52 object-cover ", src: imageIconPathLocal, alt: "" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-1 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "outline", onClick: () => updateOrgIconImage(""), children: "Remove Icon" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
      lineNumber: 50,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createOrg/CreateOrgPageLogo.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c5 = CreateOrgPageLogo;
var _c5;
$RefreshReg$(_c5, "CreateOrgPageLogo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/CreateOrgPageInviteUsers.tsx
var import_react4 = __toESM(require_react());

// app/components/ui/shadUi/ui/accordion.tsx
var React2 = __toESM(require_react());

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $409067139f391064$var$COLLAPSIBLE_NAME = "Collapsible";
var [$409067139f391064$var$createCollapsibleContext, $409067139f391064$export$952b32dcbe73087a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($409067139f391064$var$COLLAPSIBLE_NAME);
var [$409067139f391064$var$CollapsibleProvider, $409067139f391064$var$useCollapsibleContext] = $409067139f391064$var$createCollapsibleContext($409067139f391064$var$COLLAPSIBLE_NAME);
var $409067139f391064$export$6eb0f7ddcda6131f = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react2.createElement)($409067139f391064$var$CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenToggle: (0, import_react2.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    )
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(open),
    "data-disabled": disabled ? "" : void 0
  }, collapsibleProps, {
    ref: forwardedRef
  })));
});
var $409067139f391064$var$TRIGGER_NAME = "CollapsibleTrigger";
var $409067139f391064$export$c135dce7b15bbbdc = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$TRIGGER_NAME, __scopeCollapsible);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    disabled: context.disabled
  }, triggerProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $409067139f391064$var$CONTENT_NAME = "CollapsibleContent";
var $409067139f391064$export$aadde00976f34151 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, props.__scopeCollapsible);
  return /* @__PURE__ */ (0, import_react2.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || context.open
    },
    ({ present }) => /* @__PURE__ */ (0, import_react2.createElement)($409067139f391064$var$CollapsibleContentImpl, _extends({}, contentProps, {
      ref: forwardedRef,
      present
    }))
  );
});
var $409067139f391064$var$CollapsibleContentImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = (0, import_react2.useState)(present);
  const ref = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const heightRef = (0, import_react2.useRef)(0);
  const height = heightRef.current;
  const widthRef = (0, import_react2.useRef)(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = (0, import_react2.useRef)(isOpen);
  const originalStylesRef = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [
    context.open,
    present
  ]);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    id: context.contentId,
    hidden: !isOpen
  }, contentProps, {
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
      ...props.style
    }
  }), isOpen && children);
});
function $409067139f391064$var$getState(open) {
  return open ? "open" : "closed";
}
var $409067139f391064$export$be92b6f5f03c0fe9 = $409067139f391064$export$6eb0f7ddcda6131f;
var $409067139f391064$export$41fb9f06171c75f4 = $409067139f391064$export$c135dce7b15bbbdc;
var $409067139f391064$export$7c6e2c02157bb7d2 = $409067139f391064$export$aadde00976f34151;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var $1bf158f521e1b1b4$var$ACCORDION_NAME = "Accordion";
var $1bf158f521e1b1b4$var$ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var [$1bf158f521e1b1b4$var$Collection, $1bf158f521e1b1b4$var$useCollection, $1bf158f521e1b1b4$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$createAccordionContext, $1bf158f521e1b1b4$export$9748edc328a73be1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1bf158f521e1b1b4$var$ACCORDION_NAME, [
  $1bf158f521e1b1b4$var$createCollectionScope,
  $409067139f391064$export$952b32dcbe73087a
]);
var $1bf158f521e1b1b4$var$useCollapsibleScope = $409067139f391064$export$952b32dcbe73087a();
var $1bf158f521e1b1b4$export$a766cd26d0d69044 = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$Collection.Provider, {
    scope: props.__scopeAccordion
  }, type === "multiple" ? /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionImplMultiple, _extends({}, multipleProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionImplSingle, _extends({}, singleProps, {
    ref: forwardedRef
  })));
});
$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    if (props.type && ![
      "single",
      "multiple"
    ].includes(props.type))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.");
    if (props.type === "multiple" && typeof value === "string")
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.");
    if (props.type === "single" && Array.isArray(value))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.");
    return null;
  }
};
var [$1bf158f521e1b1b4$var$AccordionValueProvider, $1bf158f521e1b1b4$var$useAccordionValueContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var [$1bf158f521e1b1b4$var$AccordionCollapsibleProvider, $1bf158f521e1b1b4$var$useAccordionCollapsibleContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, {
  collapsible: false
});
var $1bf158f521e1b1b4$var$AccordionImplSingle = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, collapsible = false, ...accordionSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [
      value
    ] : [],
    onItemOpen: setValue,
    onItemClose: import_react3.default.useCallback(
      () => collapsible && setValue(""),
      [
        collapsible,
        setValue
      ]
    )
  }, /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible
  }, /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionSingleProps, {
    ref: forwardedRef
  }))));
});
var $1bf158f521e1b1b4$var$AccordionImplMultiple = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...accordionMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleItemOpen = import_react3.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleItemClose = import_react3.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value1,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose
  }, /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends({}, accordionMultipleProps, {
    ref: forwardedRef
  }))));
});
var [$1bf158f521e1b1b4$var$AccordionImplProvider, $1bf158f521e1b1b4$var$useAccordionContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
var $1bf158f521e1b1b4$var$AccordionImpl = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = import_react3.default.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(accordionRef, forwardedRef);
  const getItems = $1bf158f521e1b1b4$var$useCollection(__scopeAccordion);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
    var _triggerCollection$cl;
    if (!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => {
      var _item$ref$current;
      return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
    });
    const triggerIndex = triggerCollection.findIndex(
      (item) => item.ref.current === target
    );
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex)
        nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex)
        nextIndex = endIndex;
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            moveNext();
          else
            movePrev();
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical")
          moveNext();
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            movePrev();
          else
            moveNext();
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical")
          movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
  });
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation
  }, /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$Collection.Slot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react3.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, accordionProps, {
    "data-orientation": orientation,
    ref: composedRefs,
    onKeyDown: disabled ? void 0 : handleKeyDown
  }))));
});
var $1bf158f521e1b1b4$var$ITEM_NAME = "AccordionItem";
var [$1bf158f521e1b1b4$var$AccordionItemProvider, $1bf158f521e1b1b4$var$useAccordionItemContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME);
var $1bf158f521e1b1b4$export$d99097c13d4dac9f = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const valueContext = $1bf158f521e1b1b4$var$useAccordionValueContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  const triggerId = $1746a345f3d73bb7$export$f680877a34711e37();
  const open1 = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open1,
    disabled,
    triggerId
  }, /* @__PURE__ */ import_react3.default.createElement($409067139f391064$export$be92b6f5f03c0fe9, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(open1)
  }, collapsibleScope, accordionItemProps, {
    ref: forwardedRef,
    disabled,
    open: open1,
    onOpenChange: (open) => {
      if (open)
        valueContext.onItemOpen(value);
      else
        valueContext.onItemClose(value);
    }
  })));
});
var $1bf158f521e1b1b4$var$HEADER_NAME = "AccordionHeader";
var $1bf158f521e1b1b4$export$5e3e5deaaf81ee41 = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ import_react3.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h3, _extends({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0
  }, headerProps, {
    ref: forwardedRef
  }));
});
var $1bf158f521e1b1b4$var$TRIGGER_NAME = "AccordionTrigger";
var $1bf158f521e1b1b4$export$94e939b1f85bdd73 = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleContext = $1bf158f521e1b1b4$var$useAccordionCollapsibleContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react3.default.createElement($1bf158f521e1b1b4$var$Collection.ItemSlot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ import_react3.default.createElement($409067139f391064$export$41fb9f06171c75f4, _extends({
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId
  }, collapsibleScope, triggerProps, {
    ref: forwardedRef
  })));
});
var $1bf158f521e1b1b4$var$CONTENT_NAME = "AccordionContent";
var $1bf158f521e1b1b4$export$985b9a77379b54a0 = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$CONTENT_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ import_react3.default.createElement($409067139f391064$export$7c6e2c02157bb7d2, _extends({
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation
  }, collapsibleScope, contentProps, {
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  }));
});
function $1bf158f521e1b1b4$var$getState(open) {
  return open ? "open" : "closed";
}
var $1bf158f521e1b1b4$export$be92b6f5f03c0fe9 = $1bf158f521e1b1b4$export$a766cd26d0d69044;
var $1bf158f521e1b1b4$export$6d08773d2e66f8f2 = $1bf158f521e1b1b4$export$d99097c13d4dac9f;
var $1bf158f521e1b1b4$export$8b251419efc915eb = $1bf158f521e1b1b4$export$5e3e5deaaf81ee41;
var $1bf158f521e1b1b4$export$41fb9f06171c75f4 = $1bf158f521e1b1b4$export$94e939b1f85bdd73;
var $1bf158f521e1b1b4$export$7c6e2c02157bb7d2 = $1bf158f521e1b1b4$export$985b9a77379b54a0;

// app/components/ui/shadUi/ui/accordion.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/accordion.tsx"
  );
  import.meta.hot.lastModified = "1705519263365.7402";
}
var AccordionShad = $1bf158f521e1b1b4$export$be92b6f5f03c0fe9;
var AccordionItemShad = React2.forwardRef(_c6 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$6d08773d2e66f8f2, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/accordion.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = AccordionItemShad;
AccordionItemShad.displayName = "AccordionItem";
var AccordionTriggerShad = React2.forwardRef(_c32 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$8b251419efc915eb, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$41fb9f06171c75f4, { ref, className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/accordion.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/shadUi/ui/accordion.tsx",
  lineNumber: 37,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/accordion.tsx",
  lineNumber: 36,
  columnNumber: 12
}, this));
_c42 = AccordionTriggerShad;
AccordionTriggerShad.displayName = $1bf158f521e1b1b4$export$41fb9f06171c75f4.displayName;
var AccordionContentShad = React2.forwardRef(_c52 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$7c6e2c02157bb7d2, { ref, className: cn("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pb-4 pt-0", children }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/accordion.tsx",
  lineNumber: 49,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/accordion.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c62 = AccordionContentShad;
AccordionContentShad.displayName = $1bf158f521e1b1b4$export$7c6e2c02157bb7d2.displayName;
var _c6;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
$RefreshReg$(_c6, "AccordionItemShad$React.forwardRef");
$RefreshReg$(_c22, "AccordionItemShad");
$RefreshReg$(_c32, "AccordionTriggerShad$React.forwardRef");
$RefreshReg$(_c42, "AccordionTriggerShad");
$RefreshReg$(_c52, "AccordionContentShad$React.forwardRef");
$RefreshReg$(_c62, "AccordionContentShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/Accordion.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Accordion.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Accordion.tsx"
  );
  import.meta.hot.lastModified = "1706454925342.808";
}
function Accordion({
  rows
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AccordionShad, { type: "single", collapsible: true, className: "w-full", children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AccordionItemShad, { value: "item-" + index, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AccordionTriggerShad, { children: row.trigger }, void 0, false, {
      fileName: "app/components/ui/Accordion.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AccordionContentShad, { children: row.content }, void 0, false, {
      fileName: "app/components/ui/Accordion.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/components/ui/Accordion.tsx",
    lineNumber: 26,
    columnNumber: 33
  }, this)) }, void 0, false, {
    fileName: "app/components/ui/Accordion.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c7 = Accordion;
var _c7;
$RefreshReg$(_c7, "Accordion");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/OrgRolesDialog.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createOrg/OrgRolesDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createOrg/OrgRolesDialog.tsx"
  );
  import.meta.hot.lastModified = "1705519263361.1746";
}
var OrgRolesDialog = ({
  openDialog,
  setOpenDialog
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Dialog, { open: openDialog, onClose: () => setOpenDialog(false), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: `${tableHeader}`, children: "Roles" }, void 0, false, {
      fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `${secondaryText}`, children: "Roles help set up permissions in a consistent way, which helps keep your workspace secure and compliant. Each role has read-only access to features not listed below." }, void 0, false, {
      fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Accordion, { rows: [{
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Organisation Owner" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 36,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc pl-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Full access to organisation" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 37,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Organisation Admin" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 41,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to update the organisation details (icon and name)." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to manage user\u2019s status and roles." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 42,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Asset Manager" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 49,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to assets." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to manage assets (create, update and delete)." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 50,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Inspection Admin" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 55,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to inspections." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "Ability to manage inspections (create, edit templates and delete templates).",
          " "
        ] }, void 0, true, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 56,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Inspector" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 64,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to inspections." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to carry out inspections." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 65,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Defect Admin" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 70,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to defects." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to configure, raise, and review defects." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 71,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Maintenance Manager" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 76,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to maintenance." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to allocate maintenance tasks." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 77,
        columnNumber: 16
      }, this)
    }, {
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Maintenance Engineer" }, void 0, false, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 82,
        columnNumber: 16
      }, this),
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "list-disc	pl-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Access to maintenance." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to carry out maintenance." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ability to close out defects." }, void 0, false, {
          fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
        lineNumber: 83,
        columnNumber: 16
      }, this)
    }] }, void 0, false, {
      fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createOrg/OrgRolesDialog.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c8 = OrgRolesDialog;
var _c8;
$RefreshReg$(_c8, "OrgRolesDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/CreateOrgPageInviteUsers.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createOrg/CreateOrgPageInviteUsers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx"
  );
  import.meta.hot.lastModified = "1706454925339.639";
}
var CreateOrgPageInviteUsers = ({
  setMemberEmails,
  setMembersRoles,
  emailInvites,
  possibleRoles,
  addNewEmailRole
}) => {
  _s();
  const [openHelpDialog, setOpenHelpDialog] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(OrgRolesDialog, { openDialog: openHelpDialog, setOpenDialog: setOpenHelpDialog }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: `${subPageTitle} `, children: "Team Members" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `${textRegular} pb-2`, children: "Share the workload by adding team members to your organisation and assigning them a role." }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `${textRegular} `, children: "They will create an account linked to the email address given below." }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { variant: "ghost", noPadding: true, onClick: () => setOpenHelpDialog(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: " flex items-center underline hover:font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Icon, { className: "p-1 ", icon: "help" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "User Roles Explained" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    emailInvites.map((emailInvite, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-52  py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectInput, { name: "createdMemberRoles[]", label: "Role", valueCurrent: emailInvite.roleId, onChange: (newValue) => setMembersRoles(newValue, index), possibleValues: possibleRoles, noPadding: true }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { className: "text-s pb-1 pl-1 text-left font-semibold", children: "Add team members by email" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "createdMemberEmails[]", value: emailInvite.emails.join("\xA3") }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ReactMultiEmail, { className: "tap-highlight-color-transparent leading-14 align-content-start relative flex  flex-1 flex-wrap items-center rounded-md border border-input bg-white px-2 py-2  text-left text-black shadow outline-none transition duration-100 ease-in-out", placeholder: "Enter emails to invite", emailsInput: emailInvite.emails, onChange: (_emails) => {
        setMemberEmails(_emails, index);
      }, getLabel: (email, index2, removeEmail) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "@apply m-1 flex max-w-full items-center justify-start rounded-md border-transparent bg-gray-200 bg-none p-1.5 align-baseline text-sm font-semibold leading-4 text-gray-600 transition duration-100 ease-in-out", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { "data-tag-item": "", className: "@apply max-w-full overflow-hidden", children: email }, void 0, false, {
            fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { "data-tag-handle": "", className: "ml-2 cursor-pointer", onClick: () => removeEmail(index2), children: "\xD7" }, void 0, false, {
            fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, index2, true, {
          fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
          lineNumber: 66,
          columnNumber: 16
        }, this);
      } }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, index, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 55,
      columnNumber: 49
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { onClick: () => {
      const newEmailInvites = [...emailInvites];
      newEmailInvites.push({
        roleId: possibleRoles[0].value,
        emails: []
      });
      addNewEmailRole(newEmailInvites);
    }, className: "w-full", variant: "outline", children: "Add More" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createOrg/CreateOrgPageInviteUsers.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s(CreateOrgPageInviteUsers, "Siwl1iZHL7YA93R5yvi3xLlGbiY=");
_c9 = CreateOrgPageInviteUsers;
var _c9;
$RefreshReg$(_c9, "CreateOrgPageInviteUsers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createOrg/CreateOrgPageOverview.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createOrg/CreateOrgPageOverview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createOrg/CreateOrgPageOverview.tsx"
  );
  import.meta.hot.lastModified = "1705519263360.9976";
}
var CreateOrgPageOverview = ({
  name,
  description,
  goPage,
  imagePathLocal,
  emails
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `${subPageTitle}`, children: "Preview" }, void 0, false, {
      fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center py-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Avatar, { className: "h-14 w-14", imageSrc: imagePathLocal, fallbackText: name[0] }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `${importantText}`, children: name }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative mt-8 h-24 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextArea, { name: "demoDescription", disabled: true, onChange: () => {
      }, label: "Description", value: description, noPadding: true, className: "absolute " }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-row-reverse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { className: "absolute  mt-[-1.2rem] h-8 w-8 ", variant: "outline", noPadding: true, onClick: () => {
        goPage(0);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { className: " h-4 w-4", icon: "edit" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative mt-8 h-24 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextArea, { name: "demoDescription", disabled: true, onChange: () => {
      }, label: "Invited Team Members", value: emails.join(","), noPadding: true, className: "absolute " }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex w-full flex-row-reverse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { className: "absolute mt-[-1.2rem] h-8 w-8", variant: "outline", noPadding: true, onClick: () => {
        goPage(2);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { className: " h-4 w-4", icon: "edit" }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createOrg/CreateOrgPageOverview.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c10 = CreateOrgPageOverview;
var _c10;
$RefreshReg$(_c10, "CreateOrgPageOverview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_signedIn.createOrganisation.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.createOrganisation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.createOrganisation.tsx"
  );
  import.meta.hot.lastModified = "1706454925361.9922";
}
function CreateOrg() {
  _s2();
  const [page, setPage] = (0, import_react6.useState)(0);
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [showCloseModal, setShowCloseModal] = (0, import_react6.useState)(false);
  const [name, setName] = (0, import_react6.useState)("");
  const [description, setDescription] = (0, import_react6.useState)("");
  const [address, setAddress] = (0, import_react6.useState)("");
  const [city, setCity] = (0, import_react6.useState)("");
  const [postcode, setPostcode] = (0, import_react6.useState)("");
  const [country, setCountry] = (0, import_react6.useState)({
    name: "United Kingdom",
    code: "GB"
  });
  const [iconPathLocal, setIconPathLocal] = (0, import_react6.useState)("");
  const [emailInvites, setEmailInvites] = (0, import_react6.useState)([{
    roleId: loaderData.roles[0].id.toString(),
    emails: []
  }]);
  const updateOrgIcon = async (event) => {
    if (event === "") {
      setIconPathLocal("");
      return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
      setIconPathLocal(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const canGoNextPage = () => {
    if (page === 0) {
      return name.length !== 0;
    } else if (page === 1) {
      return true;
    } else if (page === 2) {
      return true;
    } else if (page === 3) {
      return true;
    }
  };
  const progress = (page + 1) * 25;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "self-start py-4 md:py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { innerClassName: "p-4 md:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { id: "top" }, void 0, false, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ProgressBar, { progress: progress > 100 ? 100 : progress }, void 0, false, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 133,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-8 w-full items-center justify-end py-2 text-end", children: (page === 1 || page === 2) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-fit text-primary hover:cursor-pointer hover:underline", onClick: () => setPage((page2) => page2 + 1), children: "Skip" }, void 0, false, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 136,
      columnNumber: 42
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-full flex-col p-2 md:w-[45rem] lg:w-[50rem] ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: `${pageTitle} py-4`, children: "Create a new organisation" }, void 0, false, {
        fileName: "app/routes/_signedIn.createOrganisation.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: page === 0 ? "" : " hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreateOrgPageBaseInfo, { name, setName, nameError: actionData == null ? void 0 : actionData.name, setDescription, description, descriptionError: actionData == null ? void 0 : actionData.description, setAddress, address, addressError: actionData == null ? void 0 : actionData.address, setCity, city, cityError: actionData == null ? void 0 : actionData.city, setCountry, country, setPostcode, postcode, postcodeError: actionData == null ? void 0 : actionData.postcode }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: page === 1 ? "" : " hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreateOrgPageLogo, { updateOrgIconImage: updateOrgIcon, iconPathLocal }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: page === 2 ? "" : " hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreateOrgPageInviteUsers, { possibleRoles: loaderData.roles.map((role) => {
          return {
            value: role.id.toString(),
            valueLabel: role.roleName
          };
        }), emailInvites, setMemberEmails: (value, index) => {
          setEmailInvites((oldValue) => {
            const tempValue = [...oldValue];
            tempValue[index].emails = value;
            return [...tempValue];
          });
        }, setMembersRoles: (value, index) => {
          setEmailInvites((oldValue) => {
            const tempValue = [...oldValue];
            tempValue[index].roleId = value;
            return [...tempValue];
          });
        }, addNewEmailRole: (newEmailInvites) => {
          setEmailInvites(newEmailInvites);
        } }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: page === 3 ? "" : " hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CreateOrgPageOverview, { name, description, goPage: (number) => setPage(number), imagePathLocal: iconPathLocal, emails: emailInvites.reduce((currentTotal, emailInvite) => {
          return [...currentTotal, ...emailInvite.emails];
        }, []) }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " flex w-full p-1 pt-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-1 pl-10", children: page === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { onClick: () => setShowCloseModal(true), variant: "outline", className: "w-full", children: "Cancel" }, void 0, false, {
              fileName: "app/routes/_signedIn.createOrganisation.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Dialog, { open: showCloseModal, onClose: () => {
              setShowCloseModal(false);
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col items-center justify-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Icon, { className: "h-11 w-11", icon: "warning" }, void 0, false, {
                fileName: "app/routes/_signedIn.createOrganisation.tsx",
                lineNumber: 189,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `${subPageTitle} p-2`, children: "Are you sure you want to cancel?" }, void 0, false, {
                fileName: "app/routes/_signedIn.createOrganisation.tsx",
                lineNumber: 190,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `${secondaryText} py-2`, children: "Any content created will be deleted." }, void 0, false, {
                fileName: "app/routes/_signedIn.createOrganisation.tsx",
                lineNumber: 193,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex py-5", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link, { to: "/organisationList", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { variant: "destructive", children: "Yes, delete" }, void 0, false, {
                  fileName: "app/routes/_signedIn.createOrganisation.tsx",
                  lineNumber: 199,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/_signedIn.createOrganisation.tsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/_signedIn.createOrganisation.tsx",
                  lineNumber: 197,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { variant: "ghost", onClick: () => setShowCloseModal(false), children: "No, keep editing" }, void 0, false, {
                  fileName: "app/routes/_signedIn.createOrganisation.tsx",
                  lineNumber: 203,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/_signedIn.createOrganisation.tsx",
                  lineNumber: 202,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.createOrganisation.tsx",
                lineNumber: 196,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.createOrganisation.tsx",
              lineNumber: 188,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.createOrganisation.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.createOrganisation.tsx",
            lineNumber: 181,
            columnNumber: 31
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { variant: "outline", className: "w-full", onClick: () => {
            var _a;
            (_a = document.getElementById("top")) == null ? void 0 : _a.scrollIntoView();
            setPage((page2) => page2 - 1);
          }, submit: false, children: "Back" }, void 0, false, {
            fileName: "app/routes/_signedIn.createOrganisation.tsx",
            lineNumber: 210,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.createOrganisation.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " ml-auto p-1 pr-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { className: `w-full ${page !== 3 && "hidden"}`, disabled: !canGoNextPage(), submit: true, children: "Finish" }, void 0, false, {
              fileName: "app/routes/_signedIn.createOrganisation.tsx",
              lineNumber: 218,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, { className: `w-full ${page === 3 && "hidden"}`, onClick: () => {
              var _a;
              (_a = document.getElementById("top")) == null ? void 0 : _a.scrollIntoView();
              setPage((page2) => page2 === 3 ? page2 : page2 + 1);
            }, disabled: !canGoNextPage(), children: "Next" }, void 0, false, {
              fileName: "app/routes/_signedIn.createOrganisation.tsx",
              lineNumber: 222,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.createOrganisation.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.createOrganisation.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.createOrganisation.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.createOrganisation.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.createOrganisation.tsx",
    lineNumber: 128,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.createOrganisation.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s2(CreateOrg, "an7LMd52HdPaVkWXsf4DnehK7Ys=", false, function() {
  return [useLoaderData, useActionData];
});
_c11 = CreateOrg;
var _c11;
$RefreshReg$(_c11, "CreateOrg");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreateOrg as default
};
//# sourceMappingURL=/build/routes/_signedIn.createOrganisation-AIVEB2B7.js.map
