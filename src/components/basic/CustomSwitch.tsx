import { useState } from 'react';
import Switch from 'react-switch';
import { Dispatch, SetStateAction } from 'react';

interface CustomSwitchProps {
  checked: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  offColor?: string;
  onColor?: string;
  offHandleColor?: string;
  onHandleColor?: string;
  handleDiameter?: number | undefined;
  uncheckedIcon?: JSX.Element | boolean | undefined;
  checkedIcon?: JSX.Element | boolean | undefined;
  uncheckedHandleIcon?: Element;
  checkedHandleIcon?: Element;
  boxShadow?: string;
  activeBoxShadow?: string;
  height?: number;
  width?: number;
  className?: string;
  borderRadius?: number;
  id?: string;
  renderValue?: (v: boolean) => string;
}

const CustomSwitch = ({ 
  onToggle, checked, 
  disabled=false, 
  uncheckedIcon, checkedIcon,
  height=28, width=56,
  renderValue
   
}: CustomSwitchProps) => {
  const [value, setValue] = useState<boolean>(checked);

  const onChange = (v: boolean) => {
    onToggle(v);
    setValue(v)
  }

  return (
    <div className="custom-switch-container">
      <p className="switch-label">{renderValue ? renderValue(value) : value.toString()}</p>
      <Switch
        onChange={(v: boolean) => onChange(v)}
        checked={checked}
        disabled={disabled}
        uncheckedIcon={uncheckedIcon}
        checkedIcon={checkedIcon}
        height={height}
        width={width}
        offColor="#444"
        onColor="#646cff"
        offHandleColor="#242424"
        onHandleColor="#fff"
        boxShadow="0px 0px 10px 4px #646cff"
        activeBoxShadow="0px 0px 10px 4px rgba(255, 255, 255, 0.9)"
        className={"react-switch"}
      />
    </div>
  )
}

export { CustomSwitch }