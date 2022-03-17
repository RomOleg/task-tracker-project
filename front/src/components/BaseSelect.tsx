import React from "react";
import { Form } from "react-bootstrap";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    items: string[],
    title?: string,
}

export const BaseSelect: React.FC<Props> = ({ onChange, items, title }) => {
  return (
    <div className="d-flex-reverse">
    {title && <span>{title}</span>}
    <Form.Select
      id="selectToastPlacement"
      className="w-auto me-3"
      onChange={(e) => onChange(e)}
    >
      {items.map((p: string) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </Form.Select>
    </div>
  );
};
