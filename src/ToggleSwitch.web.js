// Web Component version - works with Angular, Vue, React, and vanilla JS
// This is a framework-agnostic implementation using Web Components

// CSS styles (inline for Web Component)
const STYLES = `
<style>
  :host {
    --switch-background: #f0f0f0;
    --switch-off-color: #3498db;
    --switch-on-color: #ffffff;
    --switch-knob-color: #ffffff;
    --switch-checked-bg: #005a0a;
    display: inline-block;
    box-sizing: border-box;
  }

  .toggle-switch {
    font-size: 1em;
    line-height: 1;
    width: 56px;
    height: 22px;
    background-color: var(--switch-background);
    border-radius: 2rem;
    padding: 0.16667rem;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    position: relative;
    font-weight: 500;
    transition: all 0.1s ease-in-out;
    border-style: inset;
    border-color: rgba(231, 231, 231, 0.5);
    border-width: 2px;
    box-sizing: border-box;
  }

  :host([disabled]) .toggle-switch {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .toggle-switch input[type="checkbox"] {
    display: none;
  }

  .toggle-switch::before {
    color: var(--switch-off-color);
    content: attr(data-off-label);
    display: block;
    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    position: absolute;
    right: 1px;
    margin: 3px;
    top: -2px;
    text-align: center;
    min-width: 1.66667rem;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
  }

  .toggle-switch::after {
    content: '';
    position: absolute;
    left: 3px;
    background-color: var(--switch-knob-color);
    box-shadow: none;
    border-style: outset;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 2px;
    border-radius: 2rem;
    height: 20px;
    width: 20px;
    top: 2px;
    transition: all 0.1s ease-in-out;
  }

  :host([checked]) .toggle-switch {
    background-color: var(--switch-checked-bg);
  }

  :host([checked]) .toggle-switch::before {
    content: attr(data-on-label);
    left: -25px;
    color: var(--switch-on-color);
  }

  :host([checked]) .toggle-switch::after {
    left: calc(100% - 23px);
  }

  .toggle-switch:focus {
    outline: 2px solid rgba(0, 90, 10, 0.5);
    outline-offset: 2px;
  }
</style>
`;

class ToggleSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [
      'checked',
      'disabled',
      'on-label',
      'off-label',
      'background-color',
      'checked-background-color',
      'knob-color',
      'off-color',
      'on-color'
    ];
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get checked() {
    return this.hasAttribute('checked') && this.getAttribute('checked') !== 'false';
  }

  set checked(value) {
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  get disabled() {
    return this.hasAttribute('disabled') && this.getAttribute('disabled') !== 'false';
  }

  set disabled(value) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get onLabel() {
    return this.getAttribute('on-label') || 'Yes';
  }

  get offLabel() {
    return this.getAttribute('off-label') || 'No';
  }

  validateInputs() {
    // Basic validation - id should be provided
    if (!this.id) {
      if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
        console.warn('ToggleSwitch: id attribute is recommended for accessibility');
      }
    }
    return true;
  }

  handleChange() {
    if (this.disabled) {
      return;
    }

    // Toggle checked state
    this.checked = !this.checked;

    // Dispatch custom event
    const event = new CustomEvent('change', {
      detail: {
        checked: this.checked,
        value: this.checked
      },
      bubbles: true,
      cancelable: true
    });

    this.dispatchEvent(event);
  }

  handleKeyDown(event) {
    // Support keyboard navigation (Enter and Space keys)
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.handleChange();
    }
  }

  attachEventListeners() {
    const switchElement = this.shadowRoot.querySelector('.toggle-switch');
    if (switchElement) {
      // Remove existing listeners if any (using named functions for proper cleanup)
      // Note: Setting innerHTML removes listeners, but we keep handlers for potential future optimizations
      if (this._clickHandler) {
        switchElement.removeEventListener('click', this._clickHandler);
      }
      if (this._keydownHandler) {
        switchElement.removeEventListener('keydown', this._keydownHandler);
      }
      
      // Create new handlers (stored as instance properties for potential cleanup)
      this._clickHandler = () => this.handleChange();
      this._keydownHandler = (e) => this.handleKeyDown(e);
      
      // Add event listeners
      switchElement.addEventListener('click', this._clickHandler);
      switchElement.addEventListener('keydown', this._keydownHandler);
      
      // Make it focusable and set ARIA attributes
      switchElement.setAttribute('role', 'switch');
      switchElement.setAttribute('aria-checked', String(this.checked));
      
      if (!this.disabled) {
        switchElement.setAttribute('tabindex', '0');
        switchElement.removeAttribute('aria-disabled');
      } else {
        switchElement.setAttribute('tabindex', '-1');
        switchElement.setAttribute('aria-disabled', 'true');
      }
    }
  }

  render() {
    if (!this.validateInputs()) {
      this.shadowRoot.innerHTML = '';
      return;
    }

    // Update host attributes for CSS selectors
    const isChecked = this.checked;
    const isDisabled = this.disabled;
    
    if (isChecked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
    
    if (isDisabled) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }

    // Get custom colors
    const bgColor = this.getAttribute('background-color') || '';
    const checkedBgColor = this.getAttribute('checked-background-color') || '';
    const knobColor = this.getAttribute('knob-color') || '';
    const offColor = this.getAttribute('off-color') || '';
    const onColor = this.getAttribute('on-color') || '';

    // Build custom styles
    const customStyles = `
      <style>
        :host {
          ${bgColor ? `--switch-background: ${bgColor};` : ''}
          ${checkedBgColor ? `--switch-checked-bg: ${checkedBgColor};` : ''}
          ${knobColor ? `--switch-knob-color: ${knobColor};` : ''}
          ${offColor ? `--switch-off-color: ${offColor};` : ''}
          ${onColor ? `--switch-on-color: ${onColor};` : ''}
        }
      </style>
    `;

    // Escape HTML entities in labels to prevent XSS
    const escapeHtml = (str) => {
      if (typeof str !== 'string') return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };

    this.shadowRoot.innerHTML = `
      ${STYLES}
      ${customStyles}
      <div 
        class="toggle-switch"
        data-on-label="${escapeHtml(this.onLabel)}"
        data-off-label="${escapeHtml(this.offLabel)}"
      ></div>
    `;

    this.attachEventListeners();
  }
}

// Register the custom element
if (typeof window !== 'undefined' && !customElements.get('toggle-switch')) {
  customElements.define('toggle-switch', ToggleSwitch);
}

export default ToggleSwitch;
export { ToggleSwitch };
