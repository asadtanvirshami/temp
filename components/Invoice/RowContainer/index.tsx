import { cn } from "@/lib/utils";

interface IInvoiceRowLayoutProps {
    children: React.ReactNode,
    width?: number
}

const InvoiceRowLayout = ({ children, width }: IInvoiceRowLayoutProps) => {
  return <div className={cn("flex gap-x-1 items-end pb-3", `w-[${width}%] flex-wrap md:flex-nowrap`)}>{children}</div>;
};

export default InvoiceRowLayout;
