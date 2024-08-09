import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { HashLoader } from "react-spinners";

interface IDialogCallContainerProps {
  type?: boolean;
}

export const DialogCallContainer = ({ type }: IDialogCallContainerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Phone className="w-[16px]" />
          Quick Call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle className="text-[24px]">Quick New Call</DialogTitle>
          <DialogDescription>
            Make New Calls here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="truck" className="text-right">
              Truck*
            </Label>
            <div className="flex gap-2">
              <Button variant={"outline"} className="">
                Flatbed
              </Button>
              <Button variant={"outline"}>Toggle</Button>
              <Button variant={"outline"}>Wheel Lift</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="call" className="text-right">
              Call Type*
            </Label>
            <div className="flex gap-2">
              <Button variant={"outline"} className="">
                Police Call
              </Button>
              <Button variant={"outline"}>Private Property</Button>
              <Button variant={"outline"}>Tow & Hook</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="size" className="text-right">
              Size*
            </Label>
            <div className="flex gap-2">
              <Button variant={"outline"} className="">
                Light Duty
              </Button>
              <Button variant={"outline"}>Medium Duty</Button>
              <Button variant={"outline"}>Heavy Duty</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">
              Priority
            </Label>
            <div className="flex gap-2 col-span-2 w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select the Priority" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectItem value={"123"}>sdfsdf</SelectItem>
                    <SelectItem value={"234"}>sdfsdf</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="account" className="text-right">
              Account*
            </Label>
            <div className="flex gap-2 col-span-2 w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select the Account" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectItem value={"123"}>sdfsdf</SelectItem>
                    <SelectItem value={"234"}>sdfsdf</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pick" className="text-right">
              Pick up from*
            </Label>
            <div className="flex gap-3 col-span-2 w-full items-center">
              <HashLoader color="#051367" loading={true} size={25} /> <Label className="text-right">
              Loading...
            </Label>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="vehicle"
              className="text-right text-[16px] font-semibold"
            >
              Vehicle Information
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="license" className="text-right">
              License Plate
            </Label>
            <div className="flex gap-2  w-full">
              <Input placeholder="License Plate" />
            </div>
            <div className="flex gap-2  w-full">
              <Input placeholder="State" />
            </div>
            <Label htmlFor="state" className="text-left">
              State
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="year" className="text-right">
              Year
            </Label>
            <div className="flex gap-2  w-full">
              <Input placeholder="Year" />
            </div>
            <div className="flex gap-2  w-full">
              <Input placeholder="Make" />
            </div>
            <Label htmlFor="make" className="text-left">
              Make
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model" className="text-right">
              Model
            </Label>
            <div className="flex gap-2  w-full">
              <Input placeholder="Model" />
            </div>
            <div className="flex gap-2  w-full">
              <Input placeholder="Color" />
            </div>
            <Label htmlFor="color" className="text-left">
              Color
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="account" className="text-right">
              Flat Tire*
            </Label>
            <div className="flex gap-2 col-span-2 w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select the Flat Tire" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectItem value={"123"}>sdfsdf</SelectItem>
                    <SelectItem value={"234"}>sdfsdf</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant={"outline"}>QUICK DISPATCH</Button>
          <Button variant={"outline"}>SAVE TO BE DISPATCH SOON</Button>
          <DialogTrigger>
            <Button variant={"destructive"}>CANCEL</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
