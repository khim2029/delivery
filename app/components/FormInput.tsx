import { CSSProperties } from "react";
import "../styles/style.css";

type formInput = {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

const inputStyle: CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: "100%",
  height: "calc(1.5em + 0.75rem + 2px)",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  borderRadius: ".375rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
};

export const FormInput = ({
  name,
  type,
  value,
  onChange,
  errorMessage,
  label,
}: formInput) => {
  return (
    <div>
      <label className="mb-2">{label}</label>
      <input
        style={inputStyle}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          e.target.style.border = "2px solid green";
        }}
        onBlur={(e) => {
          e.target.style.border = "1px solid blue";
        }}
      />
      <span
        style={{
          fontSize: "12px",
          padding: "3px",
          color: "red",
          // display: "none",
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};
