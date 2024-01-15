"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ToggleSwitchModule = _interopRequireDefault(require("./ToggleSwitch.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ToggleSwitch(_ref) {
  var keyId = _ref.keyId,
    checked = _ref.checked,
    onChange = _ref.onChange,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _ToggleSwitchModule["default"].tglSwitch
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    id: keyId,
    key: keyId,
    "data-switch": 'bool',
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: keyId,
    "data-on-label": "Yes",
    "data-off-label": "No"
  }));
}
ToggleSwitch.propTypes = {
  keyId: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
var _default = exports["default"] = ToggleSwitch;