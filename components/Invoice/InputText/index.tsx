import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface IInputTextProps {
  label: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const InputText = ({
  label,
  placeholder,
  type,
  disabled,
  icon,
}: IInputTextProps) => {
  return (
    <div className="w-full relative">
      <Label className="text-[14px]">{label}</Label>
      {disabled ? (
        <Input
          className="bg-[#D9D9D9]"
          type={type}
          placeholder={placeholder}
          disabled
        />
      ) : (
        <Input type={type} placeholder={placeholder} />
    )}
    {icon}
    </div>
  );
};

export default InputText;
