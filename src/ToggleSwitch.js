import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ 
  id, 
  checked = false, 
  onChange, 
  disabled = false,
  onLabel = 'Yes',
  offLabel = 'No',
  backgroundColor,
  checkedBackgroundColor,
  knobColor,
  offColor,
  onColor
}) {
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

  const handleChange = (event) => {
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

  const handleKeyDown = (event) => {
    // Support keyboard navigation (Enter and Space keys)
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      event.preventDefault();
      // Create a proper synthetic event that matches React.ChangeEvent<HTMLInputElement>
      const syntheticEvent = {
        ...event,
        target: {
          ...event.target,
          checked: !checked,
          type: 'checkbox',
          value: !checked ? 'on' : 'off'
        },
        currentTarget: {
          ...event.currentTarget,
          checked: !checked,
          type: 'checkbox',
          value: !checked ? 'on' : 'off'
        }
      };
      handleChange(syntheticEvent);
    }
  };

  // Build inline styles with CSS variables
  const inlineStyles = {};
  
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

  return (
    <div className={styles.toggleSwitch} style={inlineStyles}>
      <input
        type="checkbox"
        id={id}
        key={id}
        data-switch="bool"
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        role="switch"
      />
      <label 
        htmlFor={id} 
        data-on-label={onLabel} 
        data-off-label={offLabel}
        tabIndex={disabled ? -1 : 0}
        aria-hidden="true"
      />
    </div>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
  checkedBackgroundColor: PropTypes.string,
  knobColor: PropTypes.string,
  offColor: PropTypes.string,
  onColor: PropTypes.string,
};

export default ToggleSwitch;
