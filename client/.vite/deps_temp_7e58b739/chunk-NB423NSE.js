import {
  require_react_is
} from "./chunk-E7RNCE5R.js";
import {
  ButtonBase_default
} from "./chunk-E7VRCLEW.js";
import {
  useSlotProps
} from "./chunk-5XTBQNRY.js";
import {
  Typography_default
} from "./chunk-QUZPXWVP.js";
import {
  createSvgIcon,
  init_createSvgIcon
} from "./chunk-MCXDLODP.js";
import {
  init_styled,
  styled_default
} from "./chunk-QR6A2N2F.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  emphasize,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_esm,
  init_extends,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_useThemeProps,
  init_utils,
  integerPropType_default,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps2 as useThemeProps
} from "./chunk-5XFNYAV4.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx();
init_utils();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_esm();
init_styled();

// node_modules/@mui/material/internal/svg-icons/MoreHoriz.js
var React = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var MoreHoriz_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");

// node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["slots", "slotProps"];
var BreadcrumbCollapsedButton = styled_default(ButtonBase_default)(({
  theme
}) => _extends({
  display: "flex",
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === "light" ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  "&:hover, &:focus": _extends({}, theme.palette.mode === "light" ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  "&:active": _extends({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === "light" ? {
    backgroundColor: emphasize(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: emphasize(theme.palette.grey[600], 0.12)
  })
}));
var BreadcrumbCollapsedIcon = styled_default(MoreHoriz_default)({
  width: 24,
  height: 16
});
function BreadcrumbCollapsed(props) {
  const {
    slots = {},
    slotProps = {}
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  return (0, import_jsx_runtime2.jsx)("li", {
    children: (0, import_jsx_runtime2.jsx)(BreadcrumbCollapsedButton, _extends({
      focusRipple: true
    }, otherProps, {
      ownerState,
      children: (0, import_jsx_runtime2.jsx)(BreadcrumbCollapsedIcon, _extends({
        as: slots.CollapsedIcon,
        ownerState
      }, slotProps.collapsedIcon))
    }))
  });
}
true ? BreadcrumbCollapsed.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    collapsedIcon: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    CollapsedIcon: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.object
} : void 0;
var BreadcrumbCollapsed_default = BreadcrumbCollapsed;

// node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass("MuiBreadcrumbs", slot);
}
var breadcrumbsClasses = generateUtilityClasses("MuiBreadcrumbs", ["root", "ol", "li", "separator"]);
var breadcrumbsClasses_default = breadcrumbsClasses;

// node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};
var BreadcrumbsRoot = styled_default(Typography_default, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${breadcrumbsClasses_default.li}`]: styles.li
    }, styles.root];
  }
})({});
var BreadcrumbsOl = styled_default("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles) => styles.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
var BreadcrumbsSeparator = styled_default("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, (0, import_jsx_runtime3.jsx)(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className,
        ownerState,
        children: separator
      }, `separator-${index}`));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
var Breadcrumbs = React3.forwardRef(function Breadcrumbs2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiBreadcrumbs"
  });
  const {
    children,
    className,
    component = "nav",
    slots = {},
    slotProps = {},
    expandText = "Show path",
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = "/"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const [expanded, setExpanded] = React3.useState(false);
  const ownerState = _extends({}, props, {
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  });
  const classes = useUtilityClasses(ownerState);
  const collapsedIconSlotProps = useSlotProps({
    elementType: slots.CollapsedIcon,
    externalSlotProps: slotProps.collapsedIcon,
    ownerState
  });
  const listRef = React3.useRef(null);
  const renderItemsBeforeAndAfter = (allItems2) => {
    const handleClickExpand = () => {
      setExpanded(true);
      const focusable = listRef.current.querySelector("a[href],button,[tabindex]");
      if (focusable) {
        focusable.focus();
      }
    };
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems2.length) {
      if (true) {
        console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${itemsAfterCollapse}} + itemsBeforeCollapse={${itemsBeforeCollapse}} >= maxItems={${maxItems}}`].join("\n"));
      }
      return allItems2;
    }
    return [...allItems2.slice(0, itemsBeforeCollapse), (0, import_jsx_runtime3.jsx)(BreadcrumbCollapsed_default, {
      "aria-label": expandText,
      slots: {
        CollapsedIcon: slots.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: collapsedIconSlotProps
      },
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems2.slice(allItems2.length - itemsAfterCollapse, allItems2.length)];
  };
  const allItems = React3.Children.toArray(children).filter((child) => {
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    return React3.isValidElement(child);
  }).map((child, index) => (0, import_jsx_runtime3.jsx)("li", {
    className: classes.li,
    children: child
  }, `child-${index}`));
  return (0, import_jsx_runtime3.jsx)(BreadcrumbsRoot, _extends({
    ref,
    component,
    color: "text.secondary",
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime3.jsx)(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  }));
});
true ? Breadcrumbs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: import_prop_types2.default.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: integerPropType_default,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: integerPropType_default,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: integerPropType_default,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: import_prop_types2.default.node,
  /**
   * The props used for each slot inside the Breadcumb.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    collapsedIcon: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside the Breadcumb.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    CollapsedIcon: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var Breadcrumbs_default = Breadcrumbs;

export {
  getBreadcrumbsUtilityClass,
  breadcrumbsClasses_default,
  Breadcrumbs_default
};
//# sourceMappingURL=chunk-NB423NSE.js.map
