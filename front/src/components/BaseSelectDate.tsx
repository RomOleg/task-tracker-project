import React from "react";

interface Props {
  value: string | number | readonly string[] | undefined;
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BaseSelectDate: React.FC<Props> = ({ title, value, onChange }) => {
  return (
    <div className="d-flex-reverse me-2">
      {title && <span>{title}</span>}
      <input
        className="form-select w-auto"
        style={{ backgroundImage: "none", padding: "0.375rem" }}
        type="date"
        value={value}
        min="2018-01-01"
        max="2018-12-31"
        onChange={(e) => onChange(e)}
      ></input>
    </div>
  );
};
