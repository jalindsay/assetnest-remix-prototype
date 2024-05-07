import {
  require_passwordHashing
} from "/build/_shared/chunk-OGB5NMER.js";
import "/build/_shared/chunk-FGISBVNF.js";
import {
  require_build
} from "/build/_shared/chunk-ZMBM2L6W.js";
import "/build/_shared/chunk-W6Q4MLZS.js";
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
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import "/build/_shared/chunk-3NTEQWJN.js";
import {
  pageTitle
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
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

// app/routes/_signedIn.profile.tsx
var import_react2 = __toESM(require_react());
var import_passwordHashing = __toESM(require_passwordHashing());
var import_react_signature_canvas = __toESM(require_build());
var import_storage = __toESM(require_storage());
var import_resizeImage = __toESM(require_resizeImage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.profile.tsx"
  );
  import.meta.hot.lastModified = "1706454925362.3398";
}
function Profile() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  _s();
  const navigation = useNavigation();
  const sigCanvas = (0, import_react2.useRef)(null);
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [displaySuccessAlert, setDisplaySuccessAlert] = (0, import_react2.useState)(false);
  const [firstName, setFirstName] = (0, import_react2.useState)((_a = loaderData == null ? void 0 : loaderData.firstName) != null ? _a : "");
  const [lastName, setLastName] = (0, import_react2.useState)((_b = loaderData == null ? void 0 : loaderData.lastName) != null ? _b : "");
  const [fileName] = (0, import_react2.useState)((_c2 = loaderData == null ? void 0 : loaderData.imageName) != null ? _c2 : "");
  const [email, setEmail] = (0, import_react2.useState)((_d = loaderData == null ? void 0 : loaderData.email) != null ? _d : "");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  const [image, setImage] = (0, import_react2.useState)((_e = loaderData == null ? void 0 : loaderData.image) != null ? _e : "");
  const [openCanvas, setOpenCanvas] = (0, import_react2.useState)(false);
  const [signatureFileName] = (0, import_react2.useState)((_f = loaderData == null ? void 0 : loaderData.signatureName) != null ? _f : "");
  const [signatureImage, setSignatureImage] = (0, import_react2.useState)((_g = loaderData == null ? void 0 : loaderData.signature) != null ? _g : "");
  const [formChanged, setFormChanged] = (0, import_react2.useState)(false);
  const [successMessage, setSuccessMessage] = (0, import_react2.useState)("");
  const submit = useSubmit();
  const fileInputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.emailSuccess) {
      setSuccessMessage("Verification Email Sent");
      setDisplaySuccessAlert(!!(actionData == null ? void 0 : actionData.emailSuccess));
      setTimeout(() => setDisplaySuccessAlert(false), 5e3);
    } else if (actionData == null ? void 0 : actionData.success) {
      setSuccessMessage("Profile Saved");
      setDisplaySuccessAlert(!!(actionData == null ? void 0 : actionData.success));
      setTimeout(() => setDisplaySuccessAlert(false), 5e3);
    }
  }, [actionData]);
  const createSignature = async () => {
    var _a2;
    const URL2 = (_a2 = sigCanvas == null ? void 0 : sigCanvas.current) == null ? void 0 : _a2.getCanvas().toDataURL("image/png");
    setSignatureImage(URL2 != null ? URL2 : "");
    setOpenCanvas(false);
    setFormChanged(true);
  };
  const initials = ((_i = (_h = loaderData == null ? void 0 : loaderData.firstName) == null ? void 0 : _h.charAt(0)) != null ? _i : "") + ((_k = (_j = loaderData == null ? void 0 : loaderData.lastName) == null ? void 0 : _j.charAt(0)) != null ? _k : "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed flex w-full flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed h-full w-full self-start overflow-scroll p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `${pageTitle} p-4`, children: "My Profile" }, void 0, false, {
      fileName: "app/routes/_signedIn.profile.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this),
    displaySuccessAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: "success", title: successMessage, onClose: () => {
      setDisplaySuccessAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.profile.tsx",
      lineNumber: 194,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col p-2 pb-12 md:w-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onChange: () => setFormChanged(true), onSubmit: () => setDisplaySuccessAlert(false), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "file", className: "w-full flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-grow justify-start px-2 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { fallbackText: initials, imageSrc: image, imageAltText: "avatar", className: "z-10 flex h-36 w-36 cursor-pointer items-center justify-center rounded-xl bg-primary text-6xl text-white" }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col justify-center pl-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "mb-4 p-2 text-red-500", variant: "outline", onClick: () => {
              setImage("");
              const formData = new FormData();
              formData.set("_action", "removeImage");
              submit(formData, {
                method: "post"
              });
            }, children: "Remove Image" }, void 0, false, {
              fileName: "app/routes/_signedIn.profile.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", isPopoverTrigger: true, className: "w-full p-2", onClick: () => {
              if (fileInputRef.current) {
                ;
                fileInputRef.current.click();
              }
            }, children: "Change Image" }, void 0, false, {
              fileName: "app/routes/_signedIn.profile.tsx",
              lineNumber: 217,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute w-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: fileInputRef, id: "file", type: "file", accept: ".png, .jpg", name: "imageData", onChange: async (e) => {
            if (e.target.files && e.target.files[0]) {
              setImage(URL.createObjectURL(e.target.files[0]));
            }
          }, className: "invisible h-24 w-24" }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { onChange: (value) => {
          if (value !== (loaderData == null ? void 0 : loaderData.email)) {
            setEmail(value);
            setShowPassword(true);
          } else {
            setEmail(value);
            setPassword("");
            setShowPassword(false);
          }
        }, name: "email", value: email, placeholder: "Email", label: "Email", error: !!(actionData == null ? void 0 : actionData.email), helpText: actionData == null ? void 0 : actionData.email }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        showPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { onChange: (value) => {
          setPassword(value);
        }, password: true, name: "password", value: password, placeholder: "Password", label: "Confirm Password", error: !!(actionData == null ? void 0 : actionData.password), helpText: actionData == null ? void 0 : actionData.password }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 246,
          columnNumber: 32
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "firstName", onChange: (value) => {
          setFirstName(value);
        }, value: firstName, placeholder: "First Name", label: "First Name", error: !!(actionData == null ? void 0 : actionData.firstName), helpText: (_l = actionData == null ? void 0 : actionData.firstName) != null ? _l : "" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "lastName", onChange: (value) => {
          setLastName(value);
        }, value: lastName, placeholder: "Last Name", label: "Last Name", error: !!(actionData == null ? void 0 : actionData.lastName), helpText: (_m = actionData == null ? void 0 : actionData.lastName) != null ? _m : "" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "fileName", value: fileName }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "signatureFileName", value: signatureFileName }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "signatureData", type: "hidden", name: "signatureData", value: signatureImage }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col p-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "signature", className: "text-s pb-1 pl-1 text-left font-semibold", children: "Signature" }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-52 w-full border", hidden: openCanvas || !signatureImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: signatureImage, alt: "signature", className: "max-h-52" }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 262,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this),
        openCanvas && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-auto h-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_signature_canvas.default, { penColor: "black", canvasProps: {
            className: "bg-white border border-gray-300 rounded-md h-full w-full"
          }, ref: sigCanvas }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 268,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4 py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", size: "sm", onClick: () => setOpenCanvas(false), children: "Cancel" }, void 0, false, {
              fileName: "app/routes/_signedIn.profile.tsx",
              lineNumber: 273,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", size: "sm", onClick: () => {
              var _a2;
              return (_a2 = sigCanvas == null ? void 0 : sigCanvas.current) == null ? void 0 : _a2.clear();
            }, children: "Clear" }, void 0, false, {
              fileName: "app/routes/_signedIn.profile.tsx",
              lineNumber: 276,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "default", size: "sm", onClick: createSignature, children: "Create" }, void 0, false, {
              fileName: "app/routes/_signedIn.profile.tsx",
              lineNumber: 279,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.profile.tsx",
            lineNumber: 272,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 266,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.profile.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-1 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", variant: "outline", onClick: () => setOpenCanvas(true), children: "Create Signature" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/changePassword", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-full", variant: "outline", onClick: () => {
        }, children: "Change Password" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 293,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 292,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 291,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-1 pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "w-1/2", submit: true, disabled: !formChanged, children: navigation.state === "submitting" ? "Saving" : "Save Changes" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 299,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 298,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signOut", className: "text-l p-1 text-center text-primary hover:underline", children: "Sign Out" }, void 0, false, {
          fileName: "app/routes/_signedIn.profile.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.profile.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.profile.tsx",
      lineNumber: 198,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.profile.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.profile.tsx",
    lineNumber: 192,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.profile.tsx",
    lineNumber: 191,
    columnNumber: 10
  }, this);
}
_s(Profile, "wIU8EWm9m2WRPYbohKbpcububCw=", false, function() {
  return [useNavigation, useLoaderData, useActionData, useSubmit];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/_signedIn.profile-YKWEJQXS.js.map
