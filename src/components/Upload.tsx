import type { ChangeEvent, ReactNode } from "react";
import Label from "./Label";

interface UploadProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  accept?: string;
  icon?: ReactNode;
  disabled?: boolean;
  labelText?: string;
}
const Upload = ({
  onChange,
  accept,
  multiple,
  icon,
  disabled,
  labelText,
}: UploadProps) => {
  return (
    <Label className="upload-container">
      <div className="upload-content">
        {icon}
        {labelText && <span className="upload-label-text">{labelText}</span>}
      </div>
      <input
        className="upload"
        type="file"
        accept={accept}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
      />
    </Label>
  );
};

export default Upload;
