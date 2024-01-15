import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ id, checked, onChange, disabled }) {
  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        id={id}
        key={id}
        data-switch="bool"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} data-on-label="Yes" data-off-label="No" />
    </div>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ToggleSwitch;
