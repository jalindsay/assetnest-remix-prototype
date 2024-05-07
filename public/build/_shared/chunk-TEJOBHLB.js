import {
  $d3863c46a17e8a28$export$20e40289641fbbb6
} from "/build/_shared/chunk-RBZICKJH.js";
import {
  HoverCard
} from "/build/_shared/chunk-A33ZQ7A5.js";
import {
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $f1701beae083dbae$export$602eac185826482c
} from "/build/_shared/chunk-MCM7CJEI.js";
import {
  Spinner,
  formatBytes
} from "/build/_shared/chunk-NJIHDZ66.js";
import {
  MapComponent
} from "/build/_shared/chunk-AQBS6DMO.js";
import {
  getStorageClient
} from "/build/_shared/chunk-WQHIKOGJ.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-PWXBGVB3.js";
import {
  SelectInput
} from "/build/_shared/chunk-5M4FEYJV.js";
import {
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  Combination_default,
  RemoveScrollBar,
  Search,
  X,
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  hideOthers,
  styleSingleton,
  useMergeRefs,
  zeroRightClassName
} from "/build/_shared/chunk-Z3JU42I3.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-EGFG2AV4.js";
import {
  v4_default
} from "/build/_shared/chunk-EABXFNCQ.js";
import {
  TextInput
} from "/build/_shared/chunk-6V6MX5QH.js";
import {
  Label
} from "/build/_shared/chunk-LTYRFPHA.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $c512c27ab02ef895$export$fd42f52fd3ae1109
} from "/build/_shared/chunk-BIAIJ7JX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-W3WU6QPT.js";
import {
  Icon
} from "/build/_shared/chunk-3NTEQWJN.js";
import {
  importantText,
  secondaryText
} from "/build/_shared/chunk-KE5S4PDE.js";
import {
  Button_default
} from "/build/_shared/chunk-NEMDLBSH.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends,
  cn
} from "/build/_shared/chunk-SALQIMS3.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/command-score/index.js
var require_command_score = __commonJS({
  "node_modules/command-score/index.js"(exports, module) {
    var SCORE_CONTINUE_MATCH = 1;
    var SCORE_WORD_JUMP = 0.9;
    var SCORE_CHARACTER_JUMP = 0.3;
    var SCORE_TRANSPOSITION = 0.1;
    var SCORE_LONG_JUMP = 0;
    var PENALTY_SKIPPED = 0.999;
    var PENALTY_CASE_MISMATCH = 0.9999;
    var PENALTY_NOT_COMPLETE = 0.99;
    var IS_GAP_REGEXP = /[\\\/\-_+.# \t"@\[\(\{&]/;
    var COUNT_GAPS_REGEXP = /[\\\/\-_+.# \t"@\[\(\{&]/g;
    function commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex) {
      if (abbreviationIndex === abbreviation.length) {
        if (stringIndex === string.length) {
          return SCORE_CONTINUE_MATCH;
        }
        return PENALTY_NOT_COMPLETE;
      }
      var abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
      var index = lowerString.indexOf(abbreviationChar, stringIndex);
      var highScore = 0;
      var score, transposedScore, wordBreaks;
      while (index >= 0) {
        score = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1);
        if (score > highScore) {
          if (index === stringIndex) {
            score *= SCORE_CONTINUE_MATCH;
          } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
            score *= SCORE_WORD_JUMP;
            wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
            if (wordBreaks && stringIndex > 0) {
              score *= Math.pow(PENALTY_SKIPPED, wordBreaks.length);
            }
          } else if (IS_GAP_REGEXP.test(string.slice(stringIndex, index - 1))) {
            score *= SCORE_LONG_JUMP;
            if (stringIndex > 0) {
              score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
            }
          } else {
            score *= SCORE_CHARACTER_JUMP;
            if (stringIndex > 0) {
              score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
            }
          }
          if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
            score *= PENALTY_CASE_MISMATCH;
          }
        }
        if (score < SCORE_TRANSPOSITION && lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) && lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
          transposedScore = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2);
          if (transposedScore * SCORE_TRANSPOSITION > score) {
            score = transposedScore * SCORE_TRANSPOSITION;
          }
        }
        if (score > highScore) {
          highScore = score;
        }
        index = lowerString.indexOf(abbreviationChar, index + 1);
      }
      return highScore;
    }
    function commandScore(string, abbreviation) {
      return commandScoreInner(string, abbreviation, string.toLowerCase(), abbreviation.toLowerCase(), 0, 0);
    }
    module.exports = commandScore;
  }
});

// app/components/ui/SearchableSelect.tsx
var React6 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var import_react14 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff102(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d052(...refs) {
  return (0, import_react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/cmdk/node_modules/@radix-ui/react-context/dist/index.module.js
var import_react2 = __toESM(require_react());
function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react2.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext2(consumerName) {
    const context = (0, import_react2.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext2
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c12(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11093(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react2.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react2.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11093,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react3 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react3.useLayoutEffect : () => {
};

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e372(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react5 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react4 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react4.useRef)(callback);
  (0, import_react4.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react4.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c32({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react5.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react5.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react5.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react5.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react9 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react7 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react6 = __toESM(require_react());
var $5e63c961fc1ce211$export$8c6ed5c666ac13602 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react6.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react6.Children.count(newElement) > 1)
          return import_react6.Children.only(null);
        return /* @__PURE__ */ (0, import_react6.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react6.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react6.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react6.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react6.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac13602.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react6.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react6.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return import_react6.Children.count(children) > 1 ? import_react6.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react6.createElement)(import_react6.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react6.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d0342 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac13602 : node;
    (0, import_react7.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react7.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react8 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react8.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown
  ]);
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react9.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f222 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react9.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react9.useState)(null);
  const [, force] = (0, import_react9.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  });
  (0, import_react9.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        document.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react9.useRef)(false);
  const handleClickRef = (0, import_react9.useRef)(() => {
  });
  (0, import_react9.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          document.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var import_react10 = __toESM(require_react());
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb62 = /* @__PURE__ */ (0, import_react10.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react10.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react10.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react10.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react10.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react10.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react10.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react10.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react11 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var $f1701beae083dbae$export$602eac185826482c2 = /* @__PURE__ */ (0, import_react11.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom2.default.createPortal(/* @__PURE__ */ (0, import_react11.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/cmdk/node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react12 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react12.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b2 = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react12.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react12.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b2.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react12.useState)();
  const stylesRef = (0, import_react12.useRef)({});
  const prevPresentRef = (0, import_react12.useRef)(present);
  const prevAnimationNameRef = (0, import_react12.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react12.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom3.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react12.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-guards/dist/index.module.js
var import_react13 = __toESM(require_react());
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c2() {
  (0, import_react13.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React3 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var React = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React.forwardRef(function(props, parentRef) {
  var ref = React.useRef(null);
  var _a = React.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React.createElement(
    React.Fragment,
    null,
    enabled && React.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React.cloneElement(React.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React2 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y) {
  return x2[0] === y[0] && x2[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React2.useRef([]);
  var touchStartRef = React2.useRef([0, 0]);
  var activeAxis = React2.useRef();
  var id = React2.useState(idCounter++)[0];
  var Style = React2.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React2.useRef(props);
  React2.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React2.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React2.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React2.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React2.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React2.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React2.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React2.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React2.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React2.createElement(
    React2.Fragment,
    null,
    inert ? React2.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React2.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
  return React3.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c12($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react14.useRef)(null);
  const contentRef = (0, import_react14.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c32({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e372(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e372(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e372(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react14.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react14.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react14.createElement)($f1701beae083dbae$export$602eac185826482c2, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react14.createElement)(Combination_default2, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac13602,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b2, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(forwardedRef, context.contentRef, contentRef);
  (0, import_react14.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff102(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff102(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react14.useRef)(false);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented)
        hasInteractedOutsideRef.current = true;
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d052(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c2();
  return /* @__PURE__ */ (0, import_react14.createElement)(import_react14.Fragment, null, /* @__PURE__ */ (0, import_react14.createElement)($d3863c46a17e8a28$export$20e40289641fbbb62, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react14.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f222, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae11092($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var import_command_score = __toESM(require_command_score(), 1);
var ue = '[cmdk-list-sizer=""]';
var M = '[cmdk-group=""]';
var N = '[cmdk-group-items=""]';
var de = '[cmdk-group-heading=""]';
var ee = '[cmdk-item=""]';
var Z = `${ee}:not([aria-disabled="true"])`;
var z = "cmdk-item-select";
var S = "data-value";
var fe = (n, a) => (0, import_command_score.default)(n, a);
var te = t.createContext(void 0);
var k = () => t.useContext(te);
var re = t.createContext(void 0);
var U = () => t.useContext(re);
var ne = t.createContext(void 0);
var oe = t.forwardRef((n, a) => {
  let r = t.useRef(null), o = x(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), u = x(() => /* @__PURE__ */ new Set()), l = x(() => /* @__PURE__ */ new Map()), p = x(() => /* @__PURE__ */ new Map()), f = x(() => /* @__PURE__ */ new Set()), d = ae(n), { label: v, children: E, value: R, onValueChange: w, filter: O, shouldFilter: ie, ...D } = n, F = t.useId(), g = t.useId(), A = t.useId(), y = ye();
  L(() => {
    if (R !== void 0) {
      let e = R.trim().toLowerCase();
      o.current.value = e, y(6, W), h.emit();
    }
  }, [R]);
  let h = t.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => o.current, setState: (e, c, i) => {
    var s, m, b;
    if (!Object.is(o.current[e], c)) {
      if (o.current[e] = c, e === "search")
        j(), G(), y(1, V);
      else if (e === "value")
        if (((s = d.current) == null ? void 0 : s.value) !== void 0) {
          (b = (m = d.current).onValueChange) == null || b.call(m, c);
          return;
        } else
          i || y(5, W);
      h.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), K = t.useMemo(() => ({ value: (e, c) => {
    c !== p.current.get(e) && (p.current.set(e, c), o.current.filtered.items.set(e, B(c)), y(2, () => {
      G(), h.emit();
    }));
  }, item: (e, c) => (u.current.add(e), c && (l.current.has(c) ? l.current.get(c).add(e) : l.current.set(c, /* @__PURE__ */ new Set([e]))), y(3, () => {
    j(), G(), o.current.value || V(), h.emit();
  }), () => {
    p.current.delete(e), u.current.delete(e), o.current.filtered.items.delete(e), y(4, () => {
      j(), V(), h.emit();
    });
  }), group: (e) => (l.current.has(e) || l.current.set(e, /* @__PURE__ */ new Set()), () => {
    p.current.delete(e), l.current.delete(e);
  }), filter: () => d.current.shouldFilter, label: v || n["aria-label"], listId: F, inputId: A, labelId: g }), []);
  function B(e) {
    var i;
    let c = ((i = d.current) == null ? void 0 : i.filter) ?? fe;
    return e ? c(e, o.current.search) : 0;
  }
  function G() {
    if (!r.current || !o.current.search || d.current.shouldFilter === false)
      return;
    let e = o.current.filtered.items, c = [];
    o.current.filtered.groups.forEach((s) => {
      let m = l.current.get(s), b = 0;
      m.forEach((P) => {
        let ce = e.get(P);
        b = Math.max(ce, b);
      }), c.push([s, b]);
    });
    let i = r.current.querySelector(ue);
    I().sort((s, m) => {
      let b = s.getAttribute(S), P = m.getAttribute(S);
      return (e.get(P) ?? 0) - (e.get(b) ?? 0);
    }).forEach((s) => {
      let m = s.closest(N);
      m ? m.appendChild(s.parentElement === m ? s : s.closest(`${N} > *`)) : i.appendChild(s.parentElement === i ? s : s.closest(`${N} > *`));
    }), c.sort((s, m) => m[1] - s[1]).forEach((s) => {
      let m = r.current.querySelector(`${M}[${S}="${s[0]}"]`);
      m == null || m.parentElement.appendChild(m);
    });
  }
  function V() {
    let e = I().find((i) => !i.ariaDisabled), c = e == null ? void 0 : e.getAttribute(S);
    h.setState("value", c || void 0);
  }
  function j() {
    if (!o.current.search || d.current.shouldFilter === false) {
      o.current.filtered.count = u.current.size;
      return;
    }
    o.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let c of u.current) {
      let i = p.current.get(c), s = B(i);
      o.current.filtered.items.set(c, s), s > 0 && e++;
    }
    for (let [c, i] of l.current)
      for (let s of i)
        if (o.current.filtered.items.get(s) > 0) {
          o.current.filtered.groups.add(c);
          break;
        }
    o.current.filtered.count = e;
  }
  function W() {
    var c, i, s;
    let e = _();
    e && (((c = e.parentElement) == null ? void 0 : c.firstChild) === e && ((s = (i = e.closest(M)) == null ? void 0 : i.querySelector(de)) == null || s.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function _() {
    return r.current.querySelector(`${ee}[aria-selected="true"]`);
  }
  function I() {
    return Array.from(r.current.querySelectorAll(Z));
  }
  function q(e) {
    let i = I()[e];
    i && h.setState("value", i.getAttribute(S));
  }
  function $(e) {
    var b;
    let c = _(), i = I(), s = i.findIndex((P) => P === c), m = i[s + e];
    (b = d.current) != null && b.loop && (m = s + e < 0 ? i[i.length - 1] : s + e === i.length ? i[0] : i[s + e]), m && h.setState("value", m.getAttribute(S));
  }
  function J(e) {
    let c = _(), i = c == null ? void 0 : c.closest(M), s;
    for (; i && !s; )
      i = e > 0 ? Se(i, M) : Ce(i, M), s = i == null ? void 0 : i.querySelector(Z);
    s ? h.setState("value", s.getAttribute(S)) : $(e);
  }
  let Q = () => q(I().length - 1), X2 = (e) => {
    e.preventDefault(), e.metaKey ? Q() : e.altKey ? J(1) : $(1);
  }, Y = (e) => {
    e.preventDefault(), e.metaKey ? q(0) : e.altKey ? J(-1) : $(-1);
  };
  return t.createElement("div", { ref: H([r, a]), ...D, "cmdk-root": "", onKeyDown: (e) => {
    var c;
    if ((c = D.onKeyDown) == null || c.call(D, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          e.ctrlKey && X2(e);
          break;
        }
        case "ArrowDown": {
          X2(e);
          break;
        }
        case "p":
        case "k": {
          e.ctrlKey && Y(e);
          break;
        }
        case "ArrowUp": {
          Y(e);
          break;
        }
        case "Home": {
          e.preventDefault(), q(0);
          break;
        }
        case "End": {
          e.preventDefault(), Q();
          break;
        }
        case "Enter": {
          e.preventDefault();
          let i = _();
          if (i) {
            let s = new Event(z);
            i.dispatchEvent(s);
          }
        }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: K.inputId, id: K.labelId, style: xe }, v), t.createElement(re.Provider, { value: h }, t.createElement(te.Provider, { value: K }, E)));
});
var me = t.forwardRef((n, a) => {
  let r = t.useId(), o = t.useRef(null), u = t.useContext(ne), l = k(), p = ae(n);
  L(() => l.item(r, u), []);
  let f = se(r, o, [n.value, n.children, o]), d = U(), v = T((g) => g.value && g.value === f.current), E = T((g) => l.filter() === false ? true : g.search ? g.filtered.items.get(r) > 0 : true);
  t.useEffect(() => {
    let g = o.current;
    if (!(!g || n.disabled))
      return g.addEventListener(z, R), () => g.removeEventListener(z, R);
  }, [E, n.onSelect, n.disabled]);
  function R() {
    var g, A;
    (A = (g = p.current).onSelect) == null || A.call(g, f.current);
  }
  function w() {
    d.setState("value", f.current, true);
  }
  if (!E)
    return null;
  let { disabled: O, value: ie, onSelect: D, ...F } = n;
  return t.createElement("div", { ref: H([o, a]), ...F, "cmdk-item": "", role: "option", "aria-disabled": O || void 0, "aria-selected": v || void 0, "data-selected": v || void 0, onPointerMove: O ? void 0 : w, onClick: O ? void 0 : R }, n.children);
});
var pe = t.forwardRef((n, a) => {
  let { heading: r, children: o, ...u } = n, l = t.useId(), p = t.useRef(null), f = t.useRef(null), d = t.useId(), v = k(), E = T((w) => v.filter() === false ? true : w.search ? w.filtered.groups.has(l) : true);
  L(() => v.group(l), []), se(l, p, [n.value, n.heading, f]);
  let R = t.createElement(ne.Provider, { value: l }, o);
  return t.createElement("div", { ref: H([p, a]), ...u, "cmdk-group": "", role: "presentation", hidden: E ? void 0 : true }, r && t.createElement("div", { ref: f, "cmdk-group-heading": "", "aria-hidden": true, id: d }, r), t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? d : void 0 }, R));
});
var ge = t.forwardRef((n, a) => {
  let { alwaysRender: r, ...o } = n, u = t.useRef(null), l = T((p) => !p.search);
  return !r && !l ? null : t.createElement("div", { ref: H([u, a]), ...o, "cmdk-separator": "", role: "separator" });
});
var ve = t.forwardRef((n, a) => {
  let { onValueChange: r, ...o } = n, u = n.value != null, l = U(), p = T((d) => d.search), f = k();
  return t.useEffect(() => {
    n.value != null && l.setState("search", n.value);
  }, [n.value]), t.createElement("input", { ref: a, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": f.listId, "aria-labelledby": f.labelId, id: f.inputId, type: "text", value: u ? n.value : p, onChange: (d) => {
    u || l.setState("search", d.target.value), r == null || r(d.target.value);
  } });
});
var Re = t.forwardRef((n, a) => {
  let { children: r, ...o } = n, u = t.useRef(null), l = t.useRef(null), p = k();
  return t.useEffect(() => {
    if (l.current && u.current) {
      let f = l.current, d = u.current, v, E = new ResizeObserver(() => {
        v = requestAnimationFrame(() => {
          let R = f.getBoundingClientRect().height;
          d.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px");
        });
      });
      return E.observe(f), () => {
        cancelAnimationFrame(v), E.unobserve(f);
      };
    }
  }, []), t.createElement("div", { ref: H([u, a]), ...o, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: p.listId, "aria-labelledby": p.inputId }, t.createElement("div", { ref: l, "cmdk-list-sizer": "" }, r));
});
var be = t.forwardRef((n, a) => {
  let { open: r, onOpenChange: o, container: u, ...l } = n;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: r, onOpenChange: o }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: u }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "" }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": n.label, "cmdk-dialog": "" }, t.createElement(oe, { ref: a, ...l }))));
});
var he = t.forwardRef((n, a) => {
  let r = t.useRef(true), o = T((u) => u.filtered.count === 0);
  return t.useEffect(() => {
    r.current = false;
  }, []), r.current || !o ? null : t.createElement("div", { ref: a, ...n, "cmdk-empty": "", role: "presentation" });
});
var Ee = t.forwardRef((n, a) => {
  let { progress: r, children: o, ...u } = n;
  return t.createElement("div", { ref: a, ...u, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, t.createElement("div", { "aria-hidden": true }, o));
});
var Le = Object.assign(oe, { List: Re, Item: me, Input: ve, Group: pe, Separator: ge, Dialog: be, Empty: he, Loading: Ee });
function Se(n, a) {
  let r = n.nextElementSibling;
  for (; r; ) {
    if (r.matches(a))
      return r;
    r = r.nextElementSibling;
  }
}
function Ce(n, a) {
  let r = n.previousElementSibling;
  for (; r; ) {
    if (r.matches(a))
      return r;
    r = r.previousElementSibling;
  }
}
function ae(n) {
  let a = t.useRef(n);
  return L(() => {
    a.current = n;
  }), a;
}
var L = typeof window > "u" ? t.useEffect : t.useLayoutEffect;
function x(n) {
  let a = t.useRef();
  return a.current === void 0 && (a.current = n()), a;
}
function H(n) {
  return (a) => {
    n.forEach((r) => {
      typeof r == "function" ? r(a) : r != null && (r.current = a);
    });
  };
}
function T(n) {
  let a = U(), r = () => n(a.snapshot());
  return t.useSyncExternalStore(a.subscribe, r, r);
}
function se(n, a, r) {
  let o = t.useRef(), u = k();
  return L(() => {
    var p;
    let l = (() => {
      var f;
      for (let d of r) {
        if (typeof d == "string")
          return d.trim().toLowerCase();
        if (typeof d == "object" && "current" in d && d.current)
          return (f = d.current.textContent) == null ? void 0 : f.trim().toLowerCase();
      }
    })();
    u.value(n, l), (p = a.current) == null || p.setAttribute(S, l), o.current = l;
  }), o;
}
var ye = () => {
  let [n, a] = t.useState(), r = x(() => /* @__PURE__ */ new Map());
  return L(() => {
    r.current.forEach((o) => o()), r.current = /* @__PURE__ */ new Map();
  }, [n]), (o, u) => {
    r.current.set(o, u), a({});
  };
};
var xe = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// app/components/ui/shadUi/ui/command.tsx
var React5 = __toESM(require_react());

// app/components/ui/shadUi/ui/dialog.tsx
var React4 = __toESM(require_react());

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
var $5d3850c4d0b4e6c7$var$DIALOG_NAME2 = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext2, $5d3850c4d0b4e6c7$export$cc702773b8ea3e412] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME2);
var [$5d3850c4d0b4e6c7$var$DialogProvider2, $5d3850c4d0b4e6c7$var$useDialogContext2] = $5d3850c4d0b4e6c7$var$createDialogContext2($5d3850c4d0b4e6c7$var$DIALOG_NAME2);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce011532 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react15.useRef)(null);
  const contentRef = (0, import_react15.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogProvider2, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react15.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME2 = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider2, $5d3850c4d0b4e6c7$var$usePortalContext2] = $5d3850c4d0b4e6c7$var$createDialogContext2($5d3850c4d0b4e6c7$var$PORTAL_NAME2, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce02 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$PORTAL_NAME2, __scopeDialog);
  return /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$PortalProvider2, {
    scope: __scopeDialog,
    forceMount
  }, import_react15.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react15.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME2 = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e172 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext2($5d3850c4d0b4e6c7$var$OVERLAY_NAME2, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$OVERLAY_NAME2, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl2, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$OVERLAY_NAME2, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react15.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState2(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME2 = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext2($5d3850c4d0b4e6c7$var$CONTENT_NAME2, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$CONTENT_NAME2, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react15.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal2, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal2, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$CONTENT_NAME2, props.__scopeDialog);
  const contentRef = (0, import_react15.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react15.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl2, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$CONTENT_NAME2, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react15.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react15.useRef)(false);
  return /* @__PURE__ */ (0, import_react15.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl2, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl2 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$CONTENT_NAME2, __scopeDialog);
  const contentRef = (0, import_react15.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react15.createElement)(import_react15.Fragment, null, /* @__PURE__ */ (0, import_react15.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react15.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState2(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME2 = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$TITLE_NAME2, __scopeDialog);
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext2($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
function $5d3850c4d0b4e6c7$var$getState2(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME2 = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d62, $5d3850c4d0b4e6c7$var$useWarningContext2] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME2, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME2,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME2,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe92 = $5d3850c4d0b4e6c7$export$3ddf2d174ce011532;
var $5d3850c4d0b4e6c7$export$602eac185826482c2 = $5d3850c4d0b4e6c7$export$dad7c95542bacce02;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff2 = $5d3850c4d0b4e6c7$export$bd1d06c79be19e172;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d22 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf2;
var $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
var $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
var $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

// app/components/ui/shadUi/ui/dialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/dialog.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.4495";
}
var DialogShad = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe92;
var DialogPortalShad = $5d3850c4d0b4e6c7$export$602eac185826482c2;
var DialogOverlayShad = React4.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff2, { ref, className: cn("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c2 = DialogOverlayShad;
DialogOverlayShad.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff2.displayName;
var DialogContentShad = React4.forwardRef(_c3 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortalShad, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlayShad, {}, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/dialog.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d22, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/shadUi/ui/dialog.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/ui/shadUi/ui/dialog.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/shadUi/ui/dialog.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/shadUi/ui/dialog.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c4 = DialogContentShad;
DialogContentShad.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d22.displayName;
var DialogHeaderShad = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 54,
  columnNumber: 7
}, this);
_c5 = DialogHeaderShad;
DialogHeaderShad.displayName = "DialogHeader";
var DialogFooterShad = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 60,
  columnNumber: 7
}, this);
_c6 = DialogFooterShad;
DialogFooterShad.displayName = "DialogFooter";
var DialogTitleShad = React4.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c8 = DialogTitleShad;
DialogTitleShad.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
var DialogDescriptionShad = React4.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/dialog.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c10 = DialogDescriptionShad;
DialogDescriptionShad.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
$RefreshReg$(_c, "DialogOverlayShad$React.forwardRef");
$RefreshReg$(_c2, "DialogOverlayShad");
$RefreshReg$(_c3, "DialogContentShad$React.forwardRef");
$RefreshReg$(_c4, "DialogContentShad");
$RefreshReg$(_c5, "DialogHeaderShad");
$RefreshReg$(_c6, "DialogFooterShad");
$RefreshReg$(_c7, "DialogTitleShad$React.forwardRef");
$RefreshReg$(_c8, "DialogTitleShad");
$RefreshReg$(_c9, "DialogDescriptionShad$React.forwardRef");
$RefreshReg$(_c10, "DialogDescriptionShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/shadUi/ui/command.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/shadUi/ui/command.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/shadUi/ui/command.tsx"
  );
  import.meta.hot.lastModified = "1705519263366.3752";
}
var CommandShad = React5.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le, { ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = CommandShad;
CommandShad.displayName = Le.displayName;
var CommandDialogShad = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogShad, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContentShad, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommandShad, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c32 = CommandDialogShad;
var CommandInputShad = React5.forwardRef(_c42 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Input, { ref, className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), ...props }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c52 = CommandInputShad;
CommandInputShad.displayName = Le.Input.displayName;
var CommandListShad = React5.forwardRef(_c62 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c72 = CommandListShad;
CommandListShad.displayName = Le.List.displayName;
var CommandEmptyShad = React5.forwardRef(_c82 = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 60,
  columnNumber: 65
}, this));
_c92 = CommandEmptyShad;
CommandEmptyShad.displayName = Le.Empty.displayName;
var CommandGroupShad = React5.forwardRef(_c102 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Group, { ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c112 = CommandGroupShad;
CommandGroupShad.displayName = Le.Group.displayName;
var CommandSeparatorShad = React5.forwardRef(_c12 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c13 = CommandSeparatorShad;
CommandSeparatorShad.displayName = Le.Separator.displayName;
var CommandItemShad = React5.forwardRef(_c14 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/shadUi/ui/command.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c15 = CommandItemShad;
CommandItemShad.displayName = Le.Item.displayName;
var CommandShortcutShad = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "app/components/ui/shadUi/ui/command.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_c16 = CommandShortcutShad;
CommandShortcutShad.displayName = "CommandShortcut";
var _c11;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
var _c112;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
$RefreshReg$(_c11, "CommandShad$React.forwardRef");
$RefreshReg$(_c22, "CommandShad");
$RefreshReg$(_c32, "CommandDialogShad");
$RefreshReg$(_c42, "CommandInputShad$React.forwardRef");
$RefreshReg$(_c52, "CommandInputShad");
$RefreshReg$(_c62, "CommandListShad$React.forwardRef");
$RefreshReg$(_c72, "CommandListShad");
$RefreshReg$(_c82, "CommandEmptyShad$React.forwardRef");
$RefreshReg$(_c92, "CommandEmptyShad");
$RefreshReg$(_c102, "CommandGroupShad$React.forwardRef");
$RefreshReg$(_c112, "CommandGroupShad");
$RefreshReg$(_c12, "CommandSeparatorShad$React.forwardRef");
$RefreshReg$(_c13, "CommandSeparatorShad");
$RefreshReg$(_c14, "CommandItemShad$React.forwardRef");
$RefreshReg$(_c15, "CommandItemShad");
$RefreshReg$(_c16, "CommandShortcutShad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/SearchableSelect.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/SearchableSelect.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/SearchableSelect.tsx"
  );
  import.meta.hot.lastModified = "1706454925346.9768";
}
var SearchableSelect = ({
  label = "Select an item",
  placeholder = "Select an item",
  name,
  possibleValues,
  onSelectedValueChange,
  helpText,
  error,
  initialValue
}) => {
  _s();
  const inputRef = React6.useRef(null);
  const [open, setOpen] = React6.useState(false);
  const [selectedAValue, setSelectedAValue] = React6.useState(false);
  const [inputValue, setInputValue] = React6.useState(initialValue != null ? initialValue : "");
  const handleKeyDown = React6.useCallback(() => {
    const input = inputRef.current;
    if (input) {
      setSelectedAValue(false);
      onSelectedValueChange && onSelectedValueChange(void 0);
    }
  }, [onSelectedValueChange]);
  const valuesToDisplay = possibleValues.filter((possibleValue) => {
    var _a;
    return ((_a = possibleValue.label.toLowerCase()) == null ? void 0 : _a.startsWith(inputValue.toLowerCase())) || possibleValue.label === inputValue;
  }).sort((a, b) => a.label.localeCompare(b.label)).slice(0, 10);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `flex w-full flex-col p-2`, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "text-s pb-1 text-left font-semibold", children: label }, void 0, false, {
      fileName: "app/components/ui/SearchableSelect.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommandShad, { onKeyDown: handleKeyDown, className: "overflow-visible bg-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Le.Input, { ref: inputRef, name, value: inputValue, onValueChange: setInputValue, onBlur: () => setOpen(false), onFocus: () => setOpen(true), placeholder, className: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
              file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary
              disabled:cursor-not-allowed disabled:opacity-50 ${error && "border-destructive"}` }, void 0, false, {
        fileName: "app/components/ui/SearchableSelect.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      helpText && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `h-8 pl-1 pt-1 text-sm font-medium ${error && "text-destructive"}`, children: helpText }, void 0, false, {
        fileName: "app/components/ui/SearchableSelect.tsx",
        lineNumber: 59,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-2", children: open && !selectedAValue && valuesToDisplay.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute top-0 z-40 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommandGroupShad, { className: "h-full overflow-auto", children: valuesToDisplay.map((possibleValue) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommandItemShad, { onMouseDown: (e) => {
          e.preventDefault();
          e.stopPropagation();
        }, onSelect: () => {
          setInputValue(possibleValue.label);
          onSelectedValueChange && onSelectedValueChange(possibleValue.value);
          setSelectedAValue(true);
        }, children: possibleValue.label }, possibleValue.value, false, {
          fileName: "app/components/ui/SearchableSelect.tsx",
          lineNumber: 67,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/ui/SearchableSelect.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/ui/SearchableSelect.tsx",
        lineNumber: 64,
        columnNumber: 68
      }, this) : null }, void 0, false, {
        fileName: "app/components/ui/SearchableSelect.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/SearchableSelect.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/SearchableSelect.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_s(SearchableSelect, "Z2YeiWDPUlmV7ZHK+TvTBMzGOpc=");
_c17 = SearchableSelect;
var _c17;
$RefreshReg$(_c17, "SearchableSelect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx"
  );
  import.meta.hot.lastModified = "1706454925337.4424";
}
var CreateInspectionInstanceDetails = ({
  inspectionReferenceError,
  inspectionReference,
  setInspectionReference,
  publicInspectionForms,
  setCurrentCategoryId,
  currentCategoryId,
  assetError,
  orgsAssets,
  selectAsset,
  inspectionIDError,
  inspectionId,
  setInspectionId,
  platformID,
  haveSelectedAAsset
}) => {
  var _a, _b, _c21;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextInput, { name: "Inspection Reference", label: "Inspection Reference *", value: inspectionReference, onChange: (value) => setInspectionReference(value), placeholder: "Inspection Reference", error: !!inspectionReferenceError, helpText: inspectionReferenceError }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectInput, { name: "Category", label: "Category *", possibleValues: publicInspectionForms == null ? void 0 : publicInspectionForms.map((form) => {
      return {
        valueLabel: form.name,
        value: form.id.toString()
      };
    }), onChange: (newValue) => {
      setCurrentCategoryId(newValue);
    }, valueCurrent: currentCategoryId }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchableSelect, { error: !!assetError, helpText: assetError, label: "Asset *", possibleValues: (_a = orgsAssets == null ? void 0 : orgsAssets.map((asset) => {
      var _a2, _b2;
      return {
        label: (_b2 = (_a2 = asset.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _a2.stringValue) != null ? _b2 : "",
        value: asset.id.toString()
      };
    })) != null ? _a : [], initialValue: (_c21 = (_b = selectAsset == null ? void 0 : selectAsset.properties.find((property) => property.categoryProperty.label === "Asset Name")) == null ? void 0 : _b.stringValue) != null ? _c21 : "", onSelectedValueChange: haveSelectedAAsset }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", value: selectAsset == null ? void 0 : selectAsset.id.toString(), name: "AssetId" }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextInput, { error: !!inspectionIDError, helpText: inspectionIDError, name: "Inspection Id", label: "Inspection Id *", value: inspectionId, onChange: (value) => setInspectionId(value), placeholder: "Unique Reference Inspection ID" }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextInput, { label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pr-2", children: "Platform ID" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HoverCard, { trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "help" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
        lineNumber: 63,
        columnNumber: 33
      }, this), content: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${importantText} text-base`, children: "Platform ID" }, void 0, false, {
          fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${secondaryText} font-normal leading-5`, children: "Each asset is automatically assigned a unique alphanumeric code. This identifier ensure that no two assets are confused, even if they have similar names or characteristics." }, void 0, false, {
          fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
        lineNumber: 63,
        columnNumber: 64
      }, this) }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 61,
      columnNumber: 25
    }, this), value: platformID, disabled: true, onChange: () => {
    } }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", value: platformID, name: "Platform ID" }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceDetails.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c18 = CreateInspectionInstanceDetails;
var _c18;
$RefreshReg$(_c18, "CreateInspectionInstanceDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx"
  );
  import.meta.hot.lastModified = "1706454925339.0293";
}
var CreateInspectionInstanceMap = ({
  setInspectionLat,
  setInspectionLng,
  selectAsset,
  inspectionLng,
  inspectionLat,
  mapsApiKey
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-96 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "Longitude", value: inspectionLng }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "Latitude", value: inspectionLat }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MapComponent, { markersCoordinates: inspectionLat && inspectionLng ? [{
        lat: inspectionLat,
        lng: inspectionLng
      }] : [], apiKey: mapsApiKey != null ? mapsApiKey : "", onClick: (event) => {
        var _a, _b;
        setInspectionLng((_a = event.latLng) == null ? void 0 : _a.lng());
        setInspectionLat((_b = event.latLng) == null ? void 0 : _b.lat());
      }, recenterMapOnMarkerChange: true }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "outline", onClick: () => {
      var _a, _b, _c21, _d;
      setInspectionLat(selectAsset ? (_b = (_a = selectAsset == null ? void 0 : selectAsset.properties.find((property) => property.categoryProperty.label === "Latitude")) == null ? void 0 : _a.floatValue) != null ? _b : void 0 : void 0);
      setInspectionLng(selectAsset ? (_d = (_c21 = selectAsset == null ? void 0 : selectAsset.properties.find((property) => property.categoryProperty.label === "Longitude")) == null ? void 0 : _c21.floatValue) != null ? _d : void 0 : void 0);
    }, children: selectAsset ? "Reset Location to Asset" : "Clear Map Location" }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceMap.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c19 = CreateInspectionInstanceMap;
var _c19;
$RefreshReg$(_c19, "CreateInspectionInstanceMap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx
var import_react16 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx"
  );
  import.meta.hot.lastModified = "1705519263360.1196";
}
var CreateInspectionInstanceProcedures = ({
  filesOnInstance,
  setFilesOnInstance,
  SUPABASE_SERVICE_ROLE_KEY,
  STORAGE_URL
}) => {
  _s2();
  const storageClient = getStorageClient(STORAGE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const fileInputRef = (0, import_react16.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    "Add files and/or images of your inspection procedure here.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { onClick: () => {
      if (fileInputRef.current) {
        ;
        fileInputRef.current.click();
      }
    }, variant: "outline", className: "flex w-full justify-start md:w-32 md:justify-center  ", children: [
      "Add Files ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { icon: "addFolder", className: "pl-2" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { ref: fileInputRef, id: "file", type: "file", accept: ".png, .jpg, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx", name: "imageData", onChange: async (e) => {
      if (e.target.files) {
        const toSaveStoragePaths = [];
        const tempFilesOnInstance = [...filesOnInstance];
        const allFiles = [];
        Array.from(e.target.files).map(async (file) => {
          const fileId = v4_default();
          const pathToImage = "files/" + fileId + "/" + file.name;
          tempFilesOnInstance.push({
            name: file.name,
            size: formatBytes(file.size),
            savedPath: pathToImage,
            uploading: true
          });
          toSaveStoragePaths.push(pathToImage);
          allFiles.push(file);
        });
        setFilesOnInstance(tempFilesOnInstance);
        const results = await Promise.all(tempFilesOnInstance.map(async (file, index) => {
          await storageClient.from("assetnest").upload(file.savedPath, allFiles[index]);
          file.uploading = false;
          return file;
        }));
        setFilesOnInstance(results);
      }
    }, multiple: true, className: " invisible hover:cursor-pointer" }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full flex-col pt-8", children: filesOnInstance == null ? void 0 : filesOnInstance.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex w-full items-center  p-1 md:w-96", id: "file" + index, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pr-2", children: file.uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Spinner, {}, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 82,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { icon: "Folder" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 82,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: file.name }, void 0, false, {
          fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${secondaryText}`, children: file.size }, void 0, false, {
          fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { className: "ml-auto pl-2", icon: "bin", onClick: async () => {
        const newFilesOnInstance = [...filesOnInstance];
        newFilesOnInstance[index].uploading = true;
        setFilesOnInstance(newFilesOnInstance);
        await storageClient.from("assetnest").remove([file.savedPath]);
        const newerFilesOnInstance = [...newFilesOnInstance];
        newerFilesOnInstance.splice(index, 1);
        setFilesOnInstance(newerFilesOnInstance);
      } }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", value: file.savedPath, name: "FilePathsToSave[]" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", value: file.size, name: "FileSizesToSave[]" }, void 0, false, {
        fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 80,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/page/createInspectionInstance/CreateInspectionInstanceProcedures.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s2(CreateInspectionInstanceProcedures, "YQqvMxdmg33cmOXmQcOjJm+FLVI=");
_c20 = CreateInspectionInstanceProcedures;
var _c20;
$RefreshReg$(_c20, "CreateInspectionInstanceProcedures");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CreateInspectionInstanceDetails,
  CreateInspectionInstanceMap,
  CreateInspectionInstanceProcedures
};
//# sourceMappingURL=/build/_shared/chunk-TEJOBHLB.js.map
