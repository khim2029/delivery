import { useRef, useState } from "react";
import styles from "~/styles/style.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

type formInput = {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export const FormInput = ({
  name,
  type,
  value,
  onChange,
  errorMessage,
  label,
}: formInput) => {
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const handleBlur = () => {
    if (errorMessage) {
      setIsInputValid(false);
    }
  };
  const handleFocus = () => {
    if (errorMessage) {
      setIsInputValid(false);
    }
  };
  console.log(isInputValid);
  return (
    <div>
      <label className="mb-2">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <span className="errorMessage">{!isInputValid ? errorMessage : ""}</span>
    </div>
  );
};
