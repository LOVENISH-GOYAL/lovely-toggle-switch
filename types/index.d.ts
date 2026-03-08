import React from 'react';

export interface ToggleSwitchProps {
  id: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onLabel?: string;
  offLabel?: string;
  backgroundColor?: string;
  checkedBackgroundColor?: string;
  knobColor?: string;
  offColor?: string;
  onColor?: string;
}

declare const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps>;

export default ToggleSwitch;
