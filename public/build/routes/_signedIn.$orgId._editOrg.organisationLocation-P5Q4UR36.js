import {
  allCountries
} from "/build/_shared/chunk-WUT4HZNP.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
import {
  TextArea
} from "/build/_shared/chunk-KIUIDWMV.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  secondaryText
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx"
  );
  import.meta.hot.lastModified = "1706454925354.4226";
}
function Location() {
  var _a, _b, _c2, _d;
  _s();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [address, setAddress] = (0, import_react2.useState)((_a = loaderData == null ? void 0 : loaderData.address) != null ? _a : "");
  const [city, setCity] = (0, import_react2.useState)((_b = loaderData == null ? void 0 : loaderData.city) != null ? _b : "");
  const [country, setCountry] = (0, import_react2.useState)((_c2 = allCountries.find((country2) => country2.code === loaderData.country)) != null ? _c2 : {
    name: "",
    code: ""
  });
  const [postcode, setPostcode] = (0, import_react2.useState)((_d = loaderData == null ? void 0 : loaderData.postcode) != null ? _d : "");
  const [formChanged, setFormChanged] = (0, import_react2.useState)(false);
  const [displaySuccessAlert, setDisplaySuccessAlert] = (0, import_react2.useState)(false);
  const [successMessage, setSuccessMessage] = (0, import_react2.useState)("");
  const listOfCountries = allCountries.map((country2) => {
    return {
      value: country2.code,
      valueLabel: country2.name
    };
  });
  (0, import_react2.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      setSuccessMessage("Organisation Updated");
      setDisplaySuccessAlert(true);
      setTimeout(() => setDisplaySuccessAlert(false), 5e3);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col space-y-1.5 p-4 ", children: [
    displaySuccessAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "success", title: successMessage, onClose: () => {
      setDisplaySuccessAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
      lineNumber: 105,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `ps-2 ${secondaryText}`, children: "Make changes to your organisation here. Click save when you're done." }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onChange: () => setFormChanged(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArea, { name: "streetAddress", label: "Street Address", value: address, onChange: (value) => setAddress(value) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "city", label: "City", value: city, onChange: (value) => setCity(value) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { name: "country", label: "Country", valueCurrent: country.code, onChange: (newValue) => {
        var _a2;
        setCountry((_a2 = allCountries.find((country2) => country2.code === newValue)) != null ? _a2 : {
          name: "United Kingdom",
          code: "GB"
        });
      }, possibleValues: listOfCountries }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "postcode", label: "Postcode", value: postcode, onChange: (value) => setPostcode(value) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", submit: true, disabled: !formChanged, children: navigation.state === "submitting" ? "Saving" : "Save Changes" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationLocation.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_s(Location, "/Ka/chwgfbx2F9mmajZafGF0V84=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = Location;
var _c;
$RefreshReg$(_c, "Location");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Location as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._editOrg.organisationLocation-P5Q4UR36.js.map
