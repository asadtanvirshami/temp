import { Button } from "../../ui/button";

interface IInvoiceButtonProps {
  label: string;
}

const InvoceButton = ({ label }: IInvoiceButtonProps) => {
  return (
    <div className="w-[66px]">
      <Button className="bg-[#D9D9D9] text-[#020817]" variant={'ghost'} disabled>{label}</Button>
    </div>
  );
};

export default InvoceButton;
