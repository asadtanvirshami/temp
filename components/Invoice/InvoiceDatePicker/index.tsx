import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

interface IInvoiceDatePickerProps {
  label: string,
  placeholder: string
}

const InvoiceDatePicker = ({label, placeholder}: IInvoiceDatePickerProps) => {
  return (
    <div className="w-full">
      <Label className="text-[14px] block">{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("w-full pl-3 text-left font-normal")}
          >
            <span>{placeholder}</span>
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full" align="start">
          <Calendar
            mode="single"
            // selected={field.value}
            // onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default InvoiceDatePicker;
