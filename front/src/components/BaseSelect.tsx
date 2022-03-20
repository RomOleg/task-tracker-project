import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  onChange: (e: string) => void;
  items: string[];
  title?: string;
  disabled?: boolean;
  style?: React.CSSProperties | undefined,
}

export const BaseSelect: React.FC<Props> = ({
  onChange,
  items,
  title,
  disabled,
  style,
}) => {
  return (
    <div className="d-flex-reverse">
      {title && <span>{title}</span>}
      <Form.Select
        style={style}
        disabled={disabled}
        id="selectToastPlacement"
        className="w-auto me-3"
        onChange={(e) => onChange(e.target.value)}
      >
        {items.map((p: string) => (
          <option key={p + Math.random()} value={p}>
            {p}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};
