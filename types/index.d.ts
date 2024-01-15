import React from 'react';

declare module 'lovely-toggle-switch' {
  export interface ToggleSwitchProps {
    keyId: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  }

  const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps>;

  export default ToggleSwitch;
}
