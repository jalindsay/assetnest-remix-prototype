import {
  require_resizeImage
} from "/build/_shared/chunk-BFNOOC4X.js";
import {
  Avatar
} from "/build/_shared/chunk-Z2WGMD7I.js";
import {
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import "/build/_shared/chunk-EABXFNCQ.js";
import {
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
import {
  TextArea
} from "/build/_shared/chunk-KIUIDWMV.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import {
  Label
} from "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
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

// app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx
var import_react2 = __toESM(require_react());
var import_storage = __toESM(require_storage());
var import_resizeImage = __toESM(require_resizeImage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx"
  );
  import.meta.hot.lastModified = "1706454925354.2332";
}
function EditOrgDetails() {
  var _a, _b, _c2, _d, _e;
  _s();
  const loaderData = useLoaderData();
  const [organisationName, setOrganisationName] = (0, import_react2.useState)((_a = loaderData == null ? void 0 : loaderData.organisationName) != null ? _a : "");
  const [description, setDescription] = (0, import_react2.useState)((_b = loaderData == null ? void 0 : loaderData.description) != null ? _b : "");
  const [orgPicture, setOrgPicture] = (0, import_react2.useState)((_c2 = loaderData == null ? void 0 : loaderData.orgPicture) != null ? _c2 : "");
  const [displaySuccessAlert, setDisplaySuccessAlert] = (0, import_react2.useState)(false);
  const actionData = useActionData();
  (0, import_react2.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      setDisplaySuccessAlert(!!(actionData == null ? void 0 : actionData.success));
      setTimeout(() => setDisplaySuccessAlert(false), 5e3);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col space-y-1.5 p-4 ", children: [
    displaySuccessAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "success", title: "Organisation Details Saved", onClose: () => {
      setDisplaySuccessAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
      lineNumber: 120,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `ps-2 ${secondaryText}`, children: "Make changes to your organisation here. Click save when you're done." }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-s pb-1 pl-1 text-left font-semibold", children: "Organisation Icon" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "file", className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { fallbackText: (_e = (_d = organisationName == null ? void 0 : organisationName.at(0)) == null ? void 0 : _d.toUpperCase()) != null ? _e : "", imageSrc: orgPicture, imageAltText: "Organisation Image", className: "z-10 flex h-36 w-36 cursor-pointer items-center justify-center rounded-xl bg-primary text-6xl text-white" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bottom-6 left-28 z-20 flex h-6 w-6 cursor-pointer items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "pointer-events-none absolute z-10 mt-[-1.2rem] h-8 w-8", variant: "outline", noPadding: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "edit", className: " h-5 w-6" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "file", type: "file", accept: ".png, .jpg", name: "orgPicture", onChange: async (e) => {
              if (e.target.files && e.target.files[0]) {
                setOrgPicture(URL.createObjectURL(e.target.files[0]));
              }
            }, className: "hidden  h-24 w-24" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "removeOrgPicture", value: orgPicture === "" ? "true" : "false", className: "hidden  h-24 w-24" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      orgPicture && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 pb-4 pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => setOrgPicture(""), children: "Remove Icon" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 153,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 152,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "organisationName", onChange: (value) => {
        setOrganisationName(value);
      }, value: organisationName, placeholder: "Organisation Name", label: "Organisation Name", error: !!(actionData == null ? void 0 : actionData.orgNameError), helpText: actionData == null ? void 0 : actionData.orgNameError, disabled: !(loaderData == null ? void 0 : loaderData.updatePermission) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArea, { name: "description", onChange: (value) => {
        setDescription(value);
      }, value: description, placeholder: "Description", label: "Description", disabled: !(loaderData == null ? void 0 : loaderData.updatePermission) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "btn btn-primary ms-2", submit: true, disabled: !(loaderData == null ? void 0 : loaderData.updatePermission), children: "Save Changes" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationDetails.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_s(EditOrgDetails, "MqTYQoBrXzoB3S6iRHJ6QwV81Zo=", false, function() {
  return [useLoaderData, useActionData];
});
_c = EditOrgDetails;
var _c;
$RefreshReg$(_c, "EditOrgDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditOrgDetails as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._editOrg.organisationDetails-LXZ7I4NF.js.map
