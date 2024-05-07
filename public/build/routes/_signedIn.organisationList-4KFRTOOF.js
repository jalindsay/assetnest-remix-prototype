import {
  Pagination
} from "/build/_shared/chunk-IWZRMDZZ.js";
import {
  chip,
  chipBlueColor,
  chipGrayDarkColor,
  chipGrayLightColor,
  chipGreenColor,
  chipRedColor
} from "/build/_shared/chunk-77YRQQ4T.js";
import {
  getTimeSinceDateInFormattedString
} from "/build/_shared/chunk-UADOJQYD.js";
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
import "/build/_shared/chunk-LTYRFPHA.js";
import "/build/_shared/chunk-BIAIJ7JX.js";
import "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  importantText,
  pageTitle,
  secondaryText
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import "/build/_shared/chunk-SALQIMS3.js";
import {
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

// app/routes/_signedIn.organisationList.tsx
var import_react2 = __toESM(require_react());
var import_storage = __toESM(require_storage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_signedIn.organisationList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_signedIn.organisationList.tsx"
  );
  import.meta.hot.lastModified = "1706454925362.1677";
}
function Profile() {
  _s();
  const navigation = useNavigate();
  const [typeOfRecordToDisplay, setTypeOfRecordToDisplay] = (0, import_react2.useState)("All");
  const loaderData = useLoaderData();
  const [numberRecordsToDisplayOnPage, setNumberRecordsToDisplayOnPage] = (0, import_react2.useState)(10);
  const [currentPage, setCurrentPage] = (0, import_react2.useState)(0);
  const submit = useSubmit();
  const membershipsAllValid = loaderData.memberships.filter((membership) => typeOfRecordToDisplay === "All" ? true : membership.status === typeOfRecordToDisplay).sort((membership1, membership2) => {
    return membership1.status === "PENDING" && membership2.status !== "PENDING" ? -1 : membership1.org.name > membership2.org.name ? 1 : -1;
  });
  const startCurrentPageIndex = currentPage * numberRecordsToDisplayOnPage;
  const endCurrentPageIndex = startCurrentPageIndex + numberRecordsToDisplayOnPage;
  const membershipsToDisplay = membershipsAllValid.slice(startCurrentPageIndex, endCurrentPageIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-h-screen w-full self-start overflow-auto p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-1/2 p-2 ${pageTitle}`, children: "Organisations" }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-1/2 flex-row-reverse p-1 pt-8", children: loaderData.memberships.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => navigation("/createOrganisation"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-md:hidden", children: " Create Organisation " }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:hidden", children: " + " }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 102,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.organisationList.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    loaderData.memberships.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-40 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { valueCurrent: typeOfRecordToDisplay, onChange: (newValue) => {
        setCurrentPage(0);
        setTypeOfRecordToDisplay(newValue);
      }, possibleValues: [{
        value: "All",
        valueLabel: "View All"
      }, {
        value: "PENDING",
        valueLabel: "Pending"
      }, {
        value: "ACTIVE",
        valueLabel: "Active"
      }, {
        value: "INACTIVE",
        valueLabel: "Inactive"
      }, {
        value: "PAUSED",
        valueLabel: "Paused"
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectInput, { valueCurrent: numberRecordsToDisplayOnPage.toString(), onChange: (newValue) => {
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
      }] }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.organisationList.tsx",
      lineNumber: 108,
      columnNumber: 49
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col items-center justify-center", children: [
      loaderData.memberships.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex-col rounded bg-white p-10 text-center md:flex md:h-[30rem] md:justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "flex justify-center p-4 text-center text-3xl font-bold md:text-4xl ", children: "Welcome to Organisations!" }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-5 md:pt-8", children: "Here, you can take control of all your assets across multiple groups. To get started, simply create a new organisation." }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-5 md:py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => navigation("/createOrganisation"), children: "Create Organisation" }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 147,
        columnNumber: 50
      }, this) : membershipsToDisplay.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col flex-nowrap gap-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col flex-nowrap justify-center rounded bg-white p-12 text-center sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " p-2 sm:mr-auto sm:p-0", children: "No results" }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " text-center text-primary hover:cursor-pointer hover:underline sm:ml-auto", onClick: () => {
          setTypeOfRecordToDisplay("All");
        }, children: "Show all Organisations" }, void 0, false, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 160,
        columnNumber: 58
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col flex-nowrap gap-y-1", children: membershipsToDisplay.map((membership) => {
        var _a, _b, _c2;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex w-full flex-nowrap rounded  p-2 hover:cursor-pointer hover:shadow ${membership.status === "PENDING" ? "bg-slate-50" : "bg-white"}`, onClick: () => {
          navigation(`/${membership.org.id}/orgPage`);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-15 flex items-center break-words p-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { className: "h-14 w-14", imageSrc: (_a = membership.org.icon) != null ? _a : "", fallbackText: membership.org.name[0] }, void 0, false, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 174,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            wordBreak: "break-word"
          }, className: `flex  items-center  p-1 text-left  max-md:hidden md:w-2/6 ${importantText}`, children: membership.org.name }, void 0, false, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center break-words p-1 text-center max-md:hidden md:w-1/6  ", children: membership.role.roleName }, void 0, false, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col  items-center truncate  sm:w-3/5 md:hidden ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `  w-full truncate break-words p-1 text-left ${importantText}`, children: membership.org.name }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full break-words p-1 text-left", children: membership.role.roleName }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 189,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 185,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-start text-left max-md:hidden md:w-1/4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${membership.status === "ACTIVE" ? chipGreenColor : membership.status === "PENDING" ? chipBlueColor : membership.status === "PAUSED" ? chipGrayLightColor : membership.status === "INACTIVE" ? chipGrayDarkColor : chipRedColor} ${chip}`, children: membership.status.charAt(0).toUpperCase() + membership.status.slice(1).toLowerCase() }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center p-2 pl-10 text-center ${secondaryText}`, children: [
              " ",
              membership.status === "PENDING" && getTimeSinceDateInFormattedString(new Date((_b = membership.inviteSentAt) != null ? _b : "")),
              " "
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 193,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `md:w-15 ml-auto flex items-center justify-center break-words p-1`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ` flex w-48 flex-row-reverse max-md:hidden`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex  ${membership.status !== "PENDING" && "hidden"}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline", onClick: () => {
                const formData = new FormData();
                formData.append("_action", "declineInvite");
                formData.append("membershipId", `${membership.id}`);
                submit(formData, {
                  method: "post"
                });
              }, children: "Decline" }, void 0, false, {
                fileName: "app/routes/_signedIn.organisationList.tsx",
                lineNumber: 206,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_signedIn.organisationList.tsx",
                lineNumber: 205,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-2 pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: () => {
                const formData = new FormData();
                formData.append("_action", "acceptInvite");
                formData.append("membershipId", `${membership.id}`);
                submit(formData, {
                  method: "post"
                });
              }, children: "Accept" }, void 0, false, {
                fileName: "app/routes/_signedIn.organisationList.tsx",
                lineNumber: 218,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_signedIn.organisationList.tsx",
                lineNumber: 217,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 204,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 203,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-7 w-24 flex-row-reverse  items-center justify-center md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: membership.status == "PENDING" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex flex-col ${secondaryText}`, children: [
              getTimeSinceDateInFormattedString(new Date((_c2 = membership.inviteSentAt) != null ? _c2 : "")),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "rounded-full border hover:cursor-pointer hover:bg-secondary", icon: "close", onClick: () => {
                } }, void 0, false, {
                  fileName: "app/routes/_signedIn.organisationList.tsx",
                  lineNumber: 237,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/_signedIn.organisationList.tsx",
                  lineNumber: 236,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "rounded-full border hover:cursor-pointer hover:bg-secondary", icon: "success", onClick: () => {
                } }, void 0, false, {
                  fileName: "app/routes/_signedIn.organisationList.tsx",
                  lineNumber: 240,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/_signedIn.organisationList.tsx",
                  lineNumber: 239,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_signedIn.organisationList.tsx",
                lineNumber: 235,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 233,
              columnNumber: 59
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${membership.status === "ACTIVE" ? chipGreenColor : membership.status === "PAUSED" ? chipGrayLightColor : membership.status === "INACTIVE" ? chipGrayDarkColor : chipRedColor} ${chip}`, children: membership.status.charAt(0).toUpperCase() + membership.status.slice(1).toLowerCase() }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 243,
              columnNumber: 36
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 232,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/_signedIn.organisationList.tsx",
              lineNumber: 231,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_signedIn.organisationList.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, this)
        ] }, membership.org.id, true, {
          fileName: "app/routes/_signedIn.organisationList.tsx",
          lineNumber: 170,
          columnNumber: 55
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 169,
        columnNumber: 22
      }, this),
      membershipsToDisplay.length !== 0 && membershipsAllValid.length - numberRecordsToDisplayOnPage > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-40 p-2 pt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { totalNumberPages: membershipsAllValid.length / numberRecordsToDisplayOnPage - 1, selectedPage: currentPage, onPrevClick: () => {
        setCurrentPage((currentValue) => currentValue === 0 ? 0 : currentValue - 1);
      }, onNextClick: () => {
        setCurrentPage((currentValue) => {
          return currentValue === membershipsAllValid.length / numberRecordsToDisplayOnPage - 1 ? 0 : currentValue + 1;
        });
      }, goPage: (newPage) => {
        setCurrentPage(newPage);
      } }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 251,
        columnNumber: 113
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-40" }, void 0, false, {
        fileName: "app/routes/_signedIn.organisationList.tsx",
        lineNumber: 261,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_signedIn.organisationList.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_signedIn.organisationList.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_signedIn.organisationList.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(Profile, "TY8CUDGTNjE2TbRtUC/xK4kV/dc=", false, function() {
  return [useNavigate, useLoaderData, useSubmit];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/_signedIn.organisationList-4KFRTOOF.js.map
