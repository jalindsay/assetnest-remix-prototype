import {
  Popover
} from "/build/_shared/chunk-AJ6L6ZET.js";
import {
  Pagination
} from "/build/_shared/chunk-IWZRMDZZ.js";
import {
  ReactMultiEmail
} from "/build/_shared/chunk-ZHXCOOLH.js";
import {
  Dialog
} from "/build/_shared/chunk-MPSXSIKS.js";
import "/build/_shared/chunk-FGISBVNF.js";
import {
  DropdownMenu,
  Table,
  TableSelectBottomBar
} from "/build/_shared/chunk-CAWG7ZMY.js";
import {
  CheckBox
} from "/build/_shared/chunk-HLLTIUOP.js";
import {
  chip,
  chipBlueColor,
  chipGrayDarkColor,
  chipGrayLightColor,
  chipGreenColor,
  chipRedColor,
  filterChip
} from "/build/_shared/chunk-77YRQQ4T.js";
import "/build/_shared/chunk-3YFQHQJO.js";
import "/build/_shared/chunk-RBZICKJH.js";
import "/build/_shared/chunk-MCM7CJEI.js";
import {
  Card
} from "/build/_shared/chunk-M3MVC5IG.js";
import "/build/_shared/chunk-PWXBGVB3.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import "/build/_shared/chunk-Z3JU42I3.js";
import "/build/_shared/chunk-EGFG2AV4.js";
import {
  Avatar
} from "/build/_shared/chunk-Z2WGMD7I.js";
import {
  require_storage
} from "/build/_shared/chunk-OFBQ54HN.js";
import {
  Alert_default
} from "/build/_shared/chunk-EAUZC6PG.js";
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
  importantText,
  pageTitle,
  secondaryText,
  subPageTitle,
  tableHeader
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
  Form,
  useActionData,
  useLoaderData,
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

// app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx
var import_react4 = __toESM(require_react());

// app/components/page/inviteUser/inviteUser.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/inviteUser/inviteUser.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/inviteUser/inviteUser.tsx"
  );
  import.meta.hot.lastModified = "1706454925342.157";
}
function InviteUser({
  onCloseFunction
}) {
  _s();
  const loaderData = useLoaderData();
  const possibleRoleValues = loaderData.roles.map((role2) => {
    return {
      value: role2.roleName,
      valueLabel: role2.roleName
    };
  });
  const [emails, setEmails] = (0, import_react2.useState)([]);
  const [role, setRole] = (0, import_react2.useState)(possibleRoleValues[0].value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${pageTitle}`, children: "Invite User" }, void 0, false, {
      fileName: "app/components/page/inviteUser/inviteUser.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${secondaryText} py-4`, children: "Enter the email addresses of the users you wish to invite to this organisation." }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-s pb-1 pl-2 text-left font-semibold", children: "Email Addresses" }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReactMultiEmail, { className: "@apply tap-highlight-color-transparent leading-14 align-content-start relative left-2 m-0 flex max-w-full flex-1 flex-wrap items-center rounded-md border bg-white px-2 py-2 text-left text-black shadow outline-none transition duration-100 ease-in-out", placeholder: "Enter emails to invite", emailsInput: emails, onChange: (_emails) => {
        setEmails(_emails);
      }, autoFocus: true, getLabel: (email, index, removeEmail) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "@apply m-1 flex max-w-full items-center justify-start rounded-md border-transparent bg-gray-200 bg-none p-1.5 align-baseline text-sm font-semibold leading-4 text-gray-600 transition duration-100 ease-in-out", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-tag-item": "", className: "@apply max-w-full overflow-hidden", children: email }, void 0, false, {
            fileName: "app/components/page/inviteUser/inviteUser.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "data-tag-handle": "", className: "ml-2 cursor-pointer", onClick: () => removeEmail(index), children: "\xD7" }, void 0, false, {
            fileName: "app/components/page/inviteUser/inviteUser.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/components/page/inviteUser/inviteUser.tsx",
          lineNumber: 56,
          columnNumber: 18
        }, this);
      } }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { name: "role", label: "Role", valueCurrent: role, onChange: (value) => setRole(value), possibleValues: possibleRoleValues }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "ml-2 mr-4", variant: "outline", onClick: () => onCloseFunction(false), children: "Cancel" }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "mr-4", submit: true, children: "Invite" }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "inviteUser" }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "emails", value: emails }, void 0, false, {
        fileName: "app/components/page/inviteUser/inviteUser.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/inviteUser/inviteUser.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/inviteUser/inviteUser.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(InviteUser, "WEAbDsO1gUlzE/DYWWdiRtDalro=", false, function() {
  return [useLoaderData];
});
_c = InviteUser;
var _c;
$RefreshReg$(_c, "InviteUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx"
  );
  import.meta.hot.lastModified = "1706454925356.0059";
}
function Members() {
  _s2();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(0);
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] = (0, import_react4.useState)(10);
  const submit = useSubmit();
  const [selectedMembershipIds, setSelectedMembershipIds] = (0, import_react4.useState)([]);
  const [selectAll, setSelectAll] = (0, import_react4.useState)(false);
  const [inviteModalVisible, setInviteModalVisible] = (0, import_react4.useState)(false);
  const [displayAlert, setDisplayAlert] = (0, import_react4.useState)(false);
  const [newRoleId, setNewRoleId] = (0, import_react4.useState)(loaderData.roles[0].id);
  const [selectedRowMembershipId, setSelectedRowMembershipId] = (0, import_react4.useState)(-1);
  const [displayEditRoleDialog, setDisplayEditRoleDialog] = (0, import_react4.useState)(false);
  const [alertMessage, setAlertMessage] = (0, import_react4.useState)({
    message: "",
    type: "default"
  });
  (0, import_react4.useEffect)(() => {
    if ((actionData == null ? void 0 : actionData.inviteSuccess) === true) {
      setInviteModalVisible(false);
      setAlertMessage({
        message: "Users invited",
        type: "success"
      });
      setDisplayAlert(true);
      setTimeout(() => setDisplayAlert(false), 5e3);
    } else if ((actionData == null ? void 0 : actionData.inviteSuccess) === false) {
      const errorEmails = actionData.errorArray.map((item) => item.email);
      setAlertMessage({
        message: `Error inviting the following: ${errorEmails}`,
        type: "destructive"
      });
      setDisplayAlert(true);
      setTimeout(() => setDisplayAlert(false), 5e3);
    }
  }, [actionData]);
  const headers = [loaderData.userCanManageUsers ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: "all", checked: selectAll, onChange: (value) => {
    setSelectAll(value);
    setSelectedMembershipIds(value ? allRowsData.filter((membership) => membership.userEmail !== loaderData.currentUserEmail).map((row) => row.membershipId) : []);
  } }, "selectAllCheckbox", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 222,
    columnNumber: 52
  }, this) : false, /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${tableHeader}`, children: "Account" }, "accountHeader", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 225,
    columnNumber: 18
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${tableHeader}`, children: "Role" }, "roleHeader", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 227,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${tableHeader}`, children: "Email" }, "emailHeader", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 229,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${tableHeader} pl-4`, children: "Status" }, "statusHeader", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 231,
    columnNumber: 13
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, "emptyDiv", false, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 233,
    columnNumber: 13
  }, this)].filter((header) => header);
  const [filterRole, setFilterRole] = (0, import_react4.useState)({});
  const [filterStatus, setFilterStatus] = (0, import_react4.useState)({});
  const filterPopoverContent = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "ROLES" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, this),
      loaderData.roles.map((role) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "p-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: role.roleName, onChange: () => {
            setFilterRole((filter) => {
              const newValue = {
                ...filter
              };
              newValue[role.roleName] = !newValue[role.roleName];
              return newValue;
            });
          }, checked: filterRole[role.roleName], label: role.roleName }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          " "
        ] }, role.roleName, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 240,
          columnNumber: 16
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "STATUS" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: "ACTIVE", onChange: () => {
        setFilterStatus((filter) => {
          const newValue = {
            ...filter
          };
          newValue["ACTIVE"] = !newValue["ACTIVE"];
          return newValue;
        });
      }, checked: filterStatus["ACTIVE"], label: "Active" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: "INACTIVE", onChange: () => {
        setFilterStatus((filter) => {
          const newValue = {
            ...filter
          };
          newValue["INACTIVE"] = !newValue["INACTIVE"];
          return newValue;
        });
      }, checked: filterStatus["INACTIVE"], label: "Inactive" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: "PENDING", onChange: () => {
        setFilterStatus((filter) => {
          const newValue = {
            ...filter
          };
          newValue["PENDING"] = !newValue["PENDING"];
          return newValue;
        });
      }, checked: filterStatus["PENDING"], label: "Pending" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 236,
    columnNumber: 32
  }, this);
  const allRowsData = loaderData.membershipTableData.filter((membership) => {
    const searchTermClear = searchTerm.toLowerCase();
    if (!membership.userName.toLowerCase().includes(searchTermClear) && !membership.userEmail.toLowerCase().includes(searchTermClear)) {
      return false;
    }
    const filterRoleKeys = Object.keys(filterRole);
    let useRoleFilter = false;
    let membershipHasFilteredRole = false;
    filterRoleKeys.some((key) => {
      if (filterRole[key] && membership.roleName === key) {
        useRoleFilter = true;
        membershipHasFilteredRole = true;
        return true;
      }
      return false;
    });
    if (useRoleFilter && !membershipHasFilteredRole) {
      return false;
    }
    const filterStatusKeys = Object.keys(filterStatus);
    let useStatusFilter = false;
    let membershipHasFilteredStatus = false;
    filterStatusKeys.some((key) => {
      if (filterStatus[key]) {
        useStatusFilter = true;
        if (membership.membershipStatus === key) {
          membershipHasFilteredStatus = true;
          return true;
        }
      }
      return false;
    });
    return !(useStatusFilter && !membershipHasFilteredStatus);
  }).sort((aMembership, bMembership) => aMembership.userEmail > bMembership.userEmail ? 1 : -1);
  const allRowsDataElements = allRowsData.map((membership) => {
    const membershipPending = membership.membershipStatus === "PENDING";
    const userProfile = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Avatar, { className: "h-11 w-11 bg-primary", imageSrc: !membershipPending ? membership.userImage : "", fallbackText: !membershipPending ? membership.userInitials : "" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${importantText} max-w-xs overflow-hidden text-ellipsis whitespace-nowrap pl-2 md:max-w-md`, children: !membershipPending ? membership.userName : "" }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 326,
      columnNumber: 25
    }, this);
    return {
      onClick: () => {
      },
      content: [{
        content: loaderData.userCanManageUsers ? loaderData.currentUserEmail !== membership.userEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { uniqueName: membership.userEmail, checked: selectedMembershipIds.includes(membership.membershipId), onChange: () => {
          setSelectedMembershipIds((currentSelectedUsers) => {
            setSelectAll(false);
            if (selectedMembershipIds.includes(membership.membershipId)) {
              return currentSelectedUsers.filter((userEmail) => userEmail !== membership.membershipId);
            } else {
              return [...currentSelectedUsers, membership.membershipId];
            }
          });
        } }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 335,
          columnNumber: 105
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 344,
          columnNumber: 17
        }, this) : false
      }, {
        content: userProfile
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-xs overflow-hidden text-ellipsis whitespace-nowrap md:max-w-md", children: membership.roleName }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 348,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-xs overflow-hidden text-ellipsis whitespace-nowrap md:max-w-md", children: membership.userEmail }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 352,
          columnNumber: 18
        }, this)
      }, {
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${membership.membershipStatus === "ACTIVE" ? chipGreenColor : membership.membershipStatus === "PENDING" ? chipBlueColor : membership.membershipStatus === "PAUSED" ? chipGrayLightColor : membership.membershipStatus === "INACTIVE" ? chipGrayDarkColor : chipRedColor} ${chip}`, children: membership.membershipStatus }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 356,
          columnNumber: 18
        }, this)
      }, {
        content: loaderData.userCanManageUsers && loaderData.currentUserEmail !== membership.userEmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { triggerClassName: "w-7", trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "w-7", onClick: () => {
        }, icon: "threeDotsVertical" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 360,
          columnNumber: 152
        }, this), dropdownMenuContent: [{
          displayText: "Pause / unpause",
          onClick: () => {
            const formData = new FormData();
            formData.set("_action", "pauseUnpauseMembership");
            formData.set("membershipId", membership.membershipId.toString());
            submit(formData, {
              method: "post"
            });
          }
        }, {
          displayText: "Edit Role",
          onClick: () => {
            setDisplayEditRoleDialog(true);
            setSelectedRowMembershipId(membership.membershipId);
          }
        }, {
          displayText: "Delete",
          onClick: () => {
            const formData = new FormData();
            formData.set("_action", "deleteMembership");
            formData.set("membershipId", membership.membershipId.toString());
            submit(formData, {
              method: "post"
            });
          }
        }, {
          displayText: membership.membershipStatus === "PENDING" ? "Resend Invite" : "noDisplay",
          onClick: () => {
            const formData = new FormData();
            formData.set("_action", "resendInvite");
            formData.set("membershipId", membership.membershipId.toString());
            submit(formData, {
              method: "post"
            });
          }
        }].filter((item) => item.displayText !== "noDisplay") }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 360,
          columnNumber: 106
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 396,
          columnNumber: 67
        }, this)
      }].filter((header) => header.content)
    };
  });
  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage;
  const endCurrentPageIndex = startCurrentPageIndex + numberRecordsToDisplayOnPage;
  const rowsToDisplay = allRowsDataElements.slice(startCurrentPageIndex, endCurrentPageIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    displayAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Alert_default, { variant: alertMessage.type, title: alertMessage.message, onClose: () => {
      setDisplayAlert(false);
    } }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 404,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { open: displayEditRoleDialog, onClose: () => {
      setSelectedRowMembershipId(-1);
      setDisplayEditRoleDialog(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " max-md:w-64 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${subPageTitle} pb-2`, children: " Select a New Role " }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 412,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectInput, { possibleValues: loaderData.roles.map((role) => {
        return {
          value: role.id.toString(),
          valueLabel: role.roleName
        };
      }), onChange: (value) => {
        setNewRoleId(parseInt(value));
      }, valueCurrent: newRoleId.toString(), noPadding: true }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 413,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: " w-20 ", variant: "outline", onClick: () => {
          setDisplayEditRoleDialog(false);
          setSelectedRowMembershipId(-1);
        }, children: "Cancel" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 423,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 422,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-auto p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: " w-20", onClick: () => {
          const formData = new FormData();
          formData.set("_action", "changeMembersRole");
          formData.set("membershipIds", selectedRowMembershipId === -1 ? selectedMembershipIds.join(",") : selectedRowMembershipId.toString());
          formData.set("newRoleId", newRoleId.toString());
          submit(formData, {
            method: "post"
          });
          setSelectedRowMembershipId(-1);
          setDisplayEditRoleDialog(false);
          setNewRoleId(loaderData.roles[0].id);
        }, children: "Save" }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 430,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 421,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 411,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 407,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { onClose: () => setInviteModalVisible(false), open: inviteModalVisible, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InviteUser, { onCloseFunction: setInviteModalVisible }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col space-y-1.5  ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `ps-2  ${secondaryText}`, children: "Find all your team members and their associated roles here." }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 454,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full py-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-20 w-96 items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextInput, { value: searchTerm, placeholder: "Search Team", onChange: (newValue) => setSearchTerm(newValue) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 459,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 458,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex h-20 items-center pl-4 max-md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "  w-32", variant: "ghost", isPopoverTrigger: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "add" }, void 0, false, {
              fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
              lineNumber: 463,
              columnNumber: 21
            }, this),
            " Add Filter"
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 462,
            columnNumber: 33
          }, this), contentClassName: `w-[27rem]`, content: filterPopoverContent }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 462,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 461,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-1/3 pt-3 max-md:hidden lg:w-1/2", children: [
            Object.keys(filterRole).filter((key) => filterRole[key]).map((key, index) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-block p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${filterChip}`, onClick: () => {
                setFilterRole((filter) => {
                  const newValue = {
                    ...filter
                  };
                  newValue[key] = false;
                  return newValue;
                });
              }, children: [
                key,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "close" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                  lineNumber: 478,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                lineNumber: 469,
                columnNumber: 23
              }, this) }, `filterRole-${index}`, false, {
                fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                lineNumber: 468,
                columnNumber: 22
              }, this);
            }),
            Object.keys(filterStatus).filter((key) => filterStatus[key]).map((key, index) => {
              const lowerCase = key.toLowerCase();
              const formattedText = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-block p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${filterChip}`, onClick: () => {
                setFilterStatus((filter) => {
                  const newValue = {
                    ...filter
                  };
                  newValue[key] = false;
                  return newValue;
                });
              }, children: [
                formattedText,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "close" }, void 0, false, {
                  fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                  lineNumber: 495,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                lineNumber: 486,
                columnNumber: 23
              }, this) }, `filterStatus-${index}`, false, {
                fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
                lineNumber: 485,
                columnNumber: 22
              }, this);
            })
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 466,
            columnNumber: 13
          }, this),
          loaderData.userCanManageUsers && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-auto flex h-20 w-32 items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "", onClick: () => setInviteModalVisible(true), children: "Invite People" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 502,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 501,
            columnNumber: 47
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 457,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 py-1", children: [
          "Results: ",
          allRowsData.length
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 507,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center pb-4 pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex w-20 items-center p-2 md:w-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectInput, { valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
            setCurrentPage(0);
            setNumberRecordsToDisplayOnPage(parseInt(newValue));
          }, possibleValues: [{
            value: "10",
            valueLabel: "10"
          }, {
            value: "50",
            valueLabel: "50"
          }, {
            value: "100",
            valueLabel: "100"
          }], noPadding: true }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 509,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { noPadding: true, className: "w-12", onClick: () => {
          }, variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "filter" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 526,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 525,
            columnNumber: 33
          }, this), contentClassName: `w-[20rem]`, content: filterPopoverContent }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 525,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 524,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 508,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 453,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { outerClassName: "overflow-auto py-1", innerClassName: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { headers, rows: rowsToDisplay }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 532,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 531,
        columnNumber: 9
      }, this),
      Math.ceil(allRowsData.length / numberRecordsToDisplayOnPage) - 1 > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pagination, { totalNumberPages: Math.ceil(allRowsData.length / numberRecordsToDisplayOnPage) - 1, selectedPage: currentPage, onPrevClick: () => {
        setCurrentPage((currentValue) => currentValue === 0 ? 0 : currentValue - 1);
      }, onNextClick: () => {
        setCurrentPage((currentValue) => {
          return currentValue === Math.ceil(allRowsData.length / numberRecordsToDisplayOnPage) - 1 ? 0 : currentValue + 1;
        });
      }, goPage: (newPage) => {
        setCurrentPage(newPage);
      } }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 535,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 534,
        columnNumber: 82
      }, this),
      selectedMembershipIds.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableSelectBottomBar, { numberSelected: selectedMembershipIds.length, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: () => {
          const formData = new FormData();
          formData.set("_action", "pauseUnpauseManyMemberships");
          formData.set("membershipIds", selectedMembershipIds.join("\xA3"));
          submit(formData, {
            method: "post"
          });
        }, variant: "outline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "pause", className: "pr-2" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 555,
            columnNumber: 17
          }, this),
          "Pause"
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 547,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 546,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: () => setDisplayEditRoleDialog(true), variant: "outline", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "edit", className: "pr-2" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, this),
          "Edit Role"
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 560,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 559,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline", onClick: () => {
          const formData = new FormData();
          formData.set("_action", "deleteManyMemberships");
          formData.set("membershipIds", selectedMembershipIds.join("\xA3"));
          submit(formData, {
            method: "post"
          });
          setSelectedMembershipIds([]);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "bin", className: "pr-2" }, void 0, false, {
            fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, this),
          "Delete"
        ] }, void 0, true, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 566,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
          lineNumber: 565,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
        lineNumber: 545,
        columnNumber: 46
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
      lineNumber: 452,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.$orgId._editOrg.organisationMembers.tsx",
    lineNumber: 403,
    columnNumber: 10
  }, this);
}
_s2(Members, "nH3V+IyMwC/uQ3nJ6ydeD1QADE4=", false, function() {
  return [useLoaderData, useActionData, useSubmit];
});
_c2 = Members;
var _c2;
$RefreshReg$(_c2, "Members");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Members as default
};
//# sourceMappingURL=/build/routes/_signedIn.$orgId._editOrg.organisationMembers-SC74JXNZ.js.map
