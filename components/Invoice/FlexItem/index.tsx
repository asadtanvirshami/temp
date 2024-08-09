import { cn } from "@/lib/utils";

interface IFlexItemProps {
    children: React.ReactNode,
    width?: number
}

const FlexItem = ({ children, width }: IFlexItemProps) => {
  return <div className={cn(`flex gap-x-1 items-end w-full pb-1 md:pb-0`)}>{children}</div>;
};

export default FlexItem;
