"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ToggleSwitchModule = _interopRequireDefault(require("./ToggleSwitch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ToggleSwitch(_ref) {
  var id = _ref.id,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    onChange = _ref.onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onLabel = _ref.onLabel,
    onLabel = _ref$onLabel === void 0 ? 'Yes' : _ref$onLabel,
    _ref$offLabel = _ref.offLabel,
    offLabel = _ref$offLabel === void 0 ? 'No' : _ref$offLabel,
    backgroundColor = _ref.backgroundColor,
    checkedBackgroundColor = _ref.checkedBackgroundColor,
    knobColor = _ref.knobColor,
    offColor = _ref.offColor,
    onColor = _ref.onColor;
  // Validate inputs
  if (!id || typeof id !== 'string') {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
      console.error('ToggleSwitch: id is required and must be a string');
    }
    return null;
  }

  // SSR safety check
  if (typeof window === 'undefined') {
    return null;
  }
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    if (onChange && typeof onChange === 'function') {
      try {
        onChange(event);
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('ToggleSwitch: Error in onChange handler', error);
        }
      }
    }
  };
  var handleKeyDown = function handleKeyDown(event) {
    // Support keyboard navigation (Enter and Space keys)
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      event.preventDefault();
      // Create a proper synthetic event that matches React.ChangeEvent<HTMLInputElement>
      var syntheticEvent = _objectSpread(_objectSpread({}, event), {}, {
        target: _objectSpread(_objectSpread({}, event.target), {}, {
          checked: !checked,
          type: 'checkbox',
          value: !checked ? 'on' : 'off'
        }),
        currentTarget: _objectSpread(_objectSpread({}, event.currentTarget), {}, {
          checked: !checked,
          type: 'checkbox',
          value: !checked ? 'on' : 'off'
        })
      });
      handleChange(syntheticEvent);
    }
  };

  // Build inline styles with CSS variables
  var inlineStyles = {};
  if (backgroundColor) {
    inlineStyles['--switch-background'] = backgroundColor;
  }
  if (checkedBackgroundColor) {
    inlineStyles['--switch-checked-bg'] = checkedBackgroundColor;
  }
  if (knobColor) {
    inlineStyles['--switch-knob-color'] = knobColor;
  }
  if (offColor) {
    inlineStyles['--switch-off-color'] = offColor;
  }
  if (onColor) {
    inlineStyles['--switch-on-color'] = onColor;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _ToggleSwitchModule["default"].toggleSwitch,
    style: inlineStyles
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    id: id,
    key: id,
    "data-switch": "bool",
    checked: checked,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    disabled: disabled,
    "aria-checked": checked,
    "aria-disabled": disabled || undefined,
    role: "switch"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    "data-on-label": onLabel,
    "data-off-label": offLabel,
    tabIndex: disabled ? -1 : 0,
    "aria-hidden": "true"
  }));
}
ToggleSwitch.propTypes = {
  id: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  onLabel: _propTypes["default"].string,
  offLabel: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  checkedBackgroundColor: _propTypes["default"].string,
  knobColor: _propTypes["default"].string,
  offColor: _propTypes["default"].string,
  onColor: _propTypes["default"].string
};
var _default = exports["default"] = ToggleSwitch;