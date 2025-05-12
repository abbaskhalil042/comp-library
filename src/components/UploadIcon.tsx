import { UploadCloud } from "lucide-react";
interface UploadIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const UploadIcon = ({ size, color, className }: UploadIconProps) => {
  return (
    <div className="upload-icon">
      <UploadCloud size={size} color={color} className={className} />
    </div>
  );
};

export default UploadIcon;
