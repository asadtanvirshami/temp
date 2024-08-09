"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Label } from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IInvoiceSelectProps {
  label: string;
  data: any[];
  placeholder: string;
}

const InvoiceDriverSelect = ({ label, data, placeholder }: IInvoiceSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full">
      <Label className="text-[14px]">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? data.find((driver) => (driver?.driver_first + driver?.driver_last) === value)?.driver_first
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {data && data.map((driver) => (
                  <CommandItem
                    key={driver?.driver_first + driver?.driver_last}
                    value={driver?.driver_first + driver?.driver_last}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === driver.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {driver?.driver_first + "   " + driver?.driver_last}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default InvoiceDriverSelect;
