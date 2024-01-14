import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ keyId, checked, onChange, disabled }) {
  return (
    <div className={styles.tglSwitch}>
      <input
        type="checkbox"
        id={keyId}
        key={keyId}
        data-switch={'bool'}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={keyId} data-on-label="Yes" data-off-label="No" />
    </div>
  );
}

ToggleSwitch.propTypes = {
  keyId: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default ToggleSwitch;
