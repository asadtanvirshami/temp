import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

interface IInputTextareaProps {
  placeholder: string;
  label: string;
}

const InputTextarea = ({ placeholder, label }: IInputTextareaProps) => {
  return (
    <div className="w-full relative">
      <Label className="text-[14px]">{label}</Label>
      <Textarea placeholder={placeholder} className="resize-none h-[115px]"/>
    </div>
  );
};

export default InputTextarea;
