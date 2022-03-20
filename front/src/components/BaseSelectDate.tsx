import React from "react";

interface Props {
  value: string,
  title?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  disabled?: boolean,
}

export const BaseSelectDate: React.FC<Props> = ({ title, value, onChange, disabled }) => {
  return (
    <div className="d-flex-reverse me-2">
      {title && <span>{title}</span>}
      <input
        disabled={disabled}
        className="form-select w-auto"
        style={{ backgroundImage: "none", padding: "0.375rem" }}
        type="date"
        value={value}
        onChange={(e) => onChange && onChange(e)}
      ></input>
    </div>
  );
};
