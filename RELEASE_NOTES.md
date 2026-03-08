# Release Notes

## v1.0.6 - Latest Release

#### Framework Compatibility & Modern Package Structure
- **Multi-framework support** - Now works with React, Angular, Vue, and vanilla JavaScript
- **Web Component version** - Added `lovely-toggle-switch/web` export for framework-agnostic usage
- **Modern package exports** - Updated to use modern `exports` field with multiple entry points
- **Side effects configuration** - Properly configured CSS side effects for better tree-shaking
- **Optional peer dependencies** - React is now an optional peer dependency, making it truly framework-agnostic

#### Reliability & Compatibility
- **SSR (Server-Side Rendering) compatibility** - Added safety checks for `window` object, making it safe for Next.js, Gatsby, and other SSR frameworks
- **Enhanced error handling** - Comprehensive try-catch blocks with graceful fallbacks and production-safe error logging
- **Input validation** - Validates `id` prop at runtime, returns `null` gracefully if invalid

#### Accessibility & User Experience
- **Keyboard navigation support** - Switch can be activated with Enter and Space keys for better accessibility
- **ARIA attributes** - Added proper `role="switch"`, `aria-checked`, and `aria-disabled` attributes
- **Focus management** - Improved focus styles and keyboard navigation
- **Disabled state handling** - Better visual and functional disabled state support

#### Customization & Styling
- **CSS Variables support** - Enhanced CSS with customizable CSS variables:
  - `--switch-background`: Background color when unchecked
  - `--switch-checked-bg`: Background color when checked
  - `--switch-knob-color`: Color of the toggle knob
  - `--switch-off-color`: Text color when unchecked
  - `--switch-on-color`: Text color when checked
- **Custom labels** - Added `onLabel` and `offLabel` props for customizable switch labels
- **Color customization props** - New props for fine-grained color control:
  - `backgroundColor`
  - `checkedBackgroundColor`
  - `knobColor`
  - `offColor`
  - `onColor`

#### Package Structure
- **Multiple entry points**:
  - Default: React component (`lovely-toggle-switch`)
  - Web Component: Framework-agnostic (`lovely-toggle-switch/web`)
  - React: Explicit React export (`lovely-toggle-switch/react`)
  - Styles: CSS module export (`lovely-toggle-switch/styles`)
- **TypeScript support** - Updated type definitions with all new props
- **Better keywords** - Added framework-agnostic, web-component, and other relevant keywords

### 🐛 Bug Fixes
- Fixed potential SSR issues with window object access
- Improved disabled state handling
- Better error handling for invalid props

### 📦 Breaking Changes
- None - All changes are backward compatible

### ✅ Verification
The updates are **confirmed implemented**:
- ✅ React component with SSR compatibility
- ✅ Web Component version for framework-agnostic usage
- ✅ Modern package.json with exports field
- ✅ Enhanced CSS with CSS variables
- ✅ TypeScript definitions updated
- ✅ Accessibility improvements
- ✅ Input validation and error handling

---

## Previous Versions Summary

### v1.0.5 and earlier
- Initial releases with React component support
- Basic toggle switch functionality
- Limited customization options
