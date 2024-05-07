import {
  emailValid
} from "/build/_shared/chunk-FGISBVNF.js";
import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/ReactMultiEmail.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/ReactMultiEmail.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/ReactMultiEmail.tsx"
  );
  import.meta.hot.lastModified = "1706454925344.6772";
}
function ReactMultiEmail({
  className,
  placeholder,
  emailsInput,
  onChange,
  autoFocus,
  getLabel,
  validateEmail
}) {
  _s();
  const emailInputRef = (0, import_react.useRef)(null);
  const [focused, setFocused] = (0, import_react.useState)(false);
  const [emails, setEmails] = (0, import_react.useState)([]);
  const [inputValue, setInputValue] = (0, import_react.useState)("");
  const [spinning, setSpinning] = (0, import_react.useState)(false);
  let delimiter = `[' ',;]`;
  const initialEmailAddress = (emails2) => {
    if (typeof emails2 === "undefined")
      return [];
    return emails2.filter((email) => emailValid(email));
  };
  const findEmailAddress = (0, import_react.useCallback)(async (value, isEnter) => {
    const validEmails = [];
    let inputValue2 = "";
    const re = new RegExp(delimiter, "g");
    const isEmail = validateEmail || emailValid;
    const addEmails = (email) => {
      validEmails.push(email);
      return true;
    };
    if (value !== "") {
      if (re.test(value)) {
        const setArr = new Set(value.split(re).filter((n) => n));
        const arr = [...setArr];
        do {
          const validateResult = emailValid("" + arr[0].trim());
          if (validateResult) {
            addEmails("" + arr.shift());
          } else {
            inputValue2 = "" + arr.shift();
          }
        } while (arr.length);
      } else {
        if (isEnter) {
          const validateResult = isEmail(value);
          if (typeof validateResult === "boolean") {
            if (validateResult) {
              addEmails(value);
            } else {
              inputValue2 = value;
            }
          } else {
            setSpinning(true);
            if (await (validateEmail == null ? void 0 : validateEmail(value)) === true) {
              addEmails(value);
              setSpinning(false);
            } else {
              inputValue2 = value;
            }
          }
        } else {
          inputValue2 = value;
        }
      }
    }
    setEmails([...emails, ...validEmails]);
    setInputValue(inputValue2);
    if (validEmails.length) {
      onChange == null ? void 0 : onChange([...emails, ...validEmails]);
    }
  }, [delimiter, emails, onChange, validateEmail]);
  const onChangeInputValue = (0, import_react.useCallback)(async (value) => {
    await findEmailAddress(value);
  }, [findEmailAddress]);
  const removeEmail = (0, import_react.useCallback)((index, isDisabled) => {
    if (isDisabled) {
      return;
    }
    const _emails = [...emails.slice(0, index), ...emails.slice(index + 1)];
    setEmails(_emails);
    onChange == null ? void 0 : onChange(_emails);
  }, [emails, onChange]);
  const handleOnKeydown = (0, import_react.useCallback)((e) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        break;
      case "Backspace":
        if (!e.currentTarget.value) {
          removeEmail(emails.length - 1, false);
        }
        break;
      default:
    }
  }, [emails.length, removeEmail]);
  const handleOnKeyup = (0, import_react.useCallback)(async (e) => {
    switch (e.key) {
      case "Enter":
        await findEmailAddress(e.currentTarget.value, true);
        break;
      default:
    }
  }, [findEmailAddress]);
  const handleOnChange = (0, import_react.useCallback)(async (e) => await onChangeInputValue(e.currentTarget.value), [onChangeInputValue]);
  const handleOnBlur = (0, import_react.useCallback)(async () => {
    setFocused(false);
  }, []);
  (0, import_react.useEffect)(() => {
    setEmails(initialEmailAddress(emailsInput));
  }, [emailsInput]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${className} w-full ${"react-multi-email"} ${focused ? "@apply border border-input bg-white" : ""} ${inputValue === "" && emails.length === 0 ? "empty" : ""}`, onClick: () => {
    var _a;
    return (_a = emailInputRef.current) == null ? void 0 : _a.focus();
  }, children: [
    placeholder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "data-placeholder": "", className: "@apply absolute left-2 top-1/3 hidden px-2 py-1 leading-4", children: placeholder }, void 0, false, {
      fileName: "app/components/ui/ReactMultiEmail.tsx",
      lineNumber: 141,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "data-labels", style: {
      opacity: spinning ? 0.45 : 1,
      display: "contents",
      flexWrap: "inherit"
    }, children: emails.map((email, index) => getLabel(email, index, removeEmail)) }, void 0, false, {
      fileName: "app/components/ui/ReactMultiEmail.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { style: {
      opacity: spinning ? 0.45 : 1
    }, ref: emailInputRef, type: "text", value: inputValue, onBlur: handleOnBlur, onChange: handleOnChange, onKeyDown: handleOnKeydown, onKeyUp: handleOnKeyup, autoFocus, className: "border-0 border-none outline-none focus:ring-0" }, void 0, false, {
      fileName: "app/components/ui/ReactMultiEmail.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/ReactMultiEmail.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s(ReactMultiEmail, "XpRqY+Jfs4ebtLMvLzPDrzugzEw=");
_c = ReactMultiEmail;
var _c;
$RefreshReg$(_c, "ReactMultiEmail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ReactMultiEmail
};
//# sourceMappingURL=/build/_shared/chunk-ZHXCOOLH.js.map
