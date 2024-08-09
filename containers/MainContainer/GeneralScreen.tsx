import { MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import InputText from "@/components/Invoice/InputText";
import InvoiceSelect from "@/components/Invoice/InvoiceSelect";
import InvoiceDatePicker from "@/components/Invoice/InvoiceDatePicker";
import { Button } from "@/components/ui/button";
import InvoceButton from "@/components/Invoice/InvoiceButton";
import InputTextarea from "@/components/Invoice/InputTextarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { invoiceTable } from "@/consts/invoice";
import InvoiceRowLayout from "@/components/Invoice/RowContainer";
import FlexItem from "@/components/Invoice/FlexItem";

import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

import {
  FilePlus,
  ArrowRightToLine,
  ArrowLeftToLine,
  SearchCheck,
  Printer,
  LogOut,
} from "lucide-react";
import InvoiceDriverSelect from "@/components/Invoice/InvoiceDriverSelect";
import InvoiceTruckSelect from "@/components/Invoice/InvoiceTruckSelect";

import { BarLoader } from "react-spinners";

interface IGeneralScreenProps {
  setChange?: (change: boolean) => void;
}

const GeneralScreen = ({}: IGeneralScreenProps) => {
  const drivers = useSelector((state: RootState) => state.invoice.drivers);
  const trucks = useSelector((state: RootState) => state.invoice.trucks);
  const dispatch = useSelector((state: RootState) => state.invoice.dispatch);
  console.log(dispatch);

  return (
    <>
      {dispatch.createdAt ? (
        <Card className="shadow-md">
          <>
            <CardHeader>
              <CardTitle className="sm:flex justify-between items-center pb-2 ">
                Dispatch #{dispatch?.dispnum}
                <div className="bg-[#051367] flex p-2 gap-x-4 rounded-md mt-2 sm:mt-0 xl:hidden">
                  <FilePlus className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                  <ArrowRightToLine className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                  <ArrowLeftToLine className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                  <SearchCheck className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                  <Printer className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                  <LogOut className="bg-[#F6F6FC] rounded-sm p-1 w-[30px] h-[30px] cursor-pointer" />
                </div>
              </CardTitle>
              <Separator />
              <CardDescription>General Information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex-col">
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceDriverSelect
                      data={drivers}
                      label="Driver"
                      placeholder="Select a Driver"
                    />
                    <InputText type="text" label="" placeholder="" />
                    <InvoceButton label="2nd" />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="2nd Driver"
                      placeholder="Select a Driver"
                    />
                  </FlexItem>
                  <FlexItem>
                    <InputText type="text" label="Received" placeholder="" />
                    <InputText type="text" label="En route" placeholder="" />
                    <InputText type="text" label="Arrived" placeholder="" />
                    <InputText type="text" label="In Tow" placeholder="" />
                    <InputText type="text" label="Completed" placeholder="" />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceDatePicker
                      label="Date"
                      placeholder="Select a Date"
                    />
                    <InputText type="text" label="Tag#" placeholder="" />
                  </FlexItem>
                  <FlexItem>
                    <InvoiceTruckSelect
                      data={trucks}
                      label="Truck"
                      placeholder="Select the Trucks"
                    />
                    <div>
                      <Label className="text-[14px]">Dispatcher</Label>
                      <Button className="bg-[#051367] w-[120px]">
                        Joshepine
                      </Button>
                    </div>
                    <InputText type="text" label="Kit#" placeholder="" />
                  </FlexItem>
                </InvoiceRowLayout>
                <div className="flex flex-wrap w-full justify-between">
                  <div className="flex-col md:w-[80%] w-full">
                    <InvoiceRowLayout>
                      <FlexItem>
                        <InputText
                          type="text"
                          label="Member#"
                          placeholder="Member#"
                        />
                        <InputText type="text" label="Exp#" placeholder="Exp" />
                      </FlexItem>
                      <FlexItem>
                        <InputText type="text" label="Value" placeholder="$" />
                        <InputText
                          type="text"
                          label="Data Stored"
                          placeholder="05/03/2024"
                          disabled={true}
                        />
                      </FlexItem>
                    </InvoiceRowLayout>
                    <InvoiceRowLayout width={75}>
                      <InvoiceSelect
                        data={["apple", "bear"]}
                        label="Account Name"
                        placeholder=""
                      />
                    </InvoiceRowLayout>
                  </div>
                  <div className="md:w-[19%] w-full flex justify-center bg-[#e0e0e0] rounded-md">
                    <img
                      alt="img"
                      src={"/image.png"}
                      className="h-[90%] pt-[6%]"
                    />
                  </div>
                </div>
                <InvoiceRowLayout width={60}>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Who Called?"
                      placeholder="Who Called"
                    />
                    <InputText
                      type="text"
                      label="Phone#"
                      placeholder="(---) --- ----"
                    />
                  </FlexItem>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Reference Number"
                      placeholder="Enter #"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Type"
                      placeholder=""
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Year"
                      placeholder=""
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Make"
                      placeholder=""
                    />
                  </FlexItem>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Model"
                      placeholder=""
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Color"
                      placeholder=""
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText type="text" label="Body" placeholder="" />
                    <InputText type="text" label="State" placeholder="" />
                    <InputText
                      type="text"
                      label="License Plate"
                      placeholder="License"
                    />
                  </FlexItem>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Expires"
                      placeholder="Expires"
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Vin"
                      placeholder=""
                    />
                    <InvoceButton label="Lien" />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Odometer"
                      placeholder="Odometer"
                    />
                    <InputText
                      type="text"
                      label="Condition"
                      placeholder="Condition"
                    />
                  </FlexItem>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Reason"
                      placeholder="Reason"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <InputText
                    type="text"
                    label="Towed From"
                    placeholder="Towed From"
                    icon={
                      <MapPin className="absolute right-3 bottom-2 w-[20px]" />
                    }
                  />
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <InputText
                    type="text"
                    label="Towed To"
                    placeholder="Towed To"
                    icon={
                      <MapPin className="absolute right-3 bottom-2 w-[20px]" />
                    }
                  />
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <InputText
                    type="text"
                    label="Retow To"
                    placeholder="Retow To"
                    icon={
                      <MapPin className="absolute right-3 bottom-2 w-[20px]" />
                    }
                  />
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Lot Section"
                      placeholder=""
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Call Type"
                      placeholder=""
                    />
                  </FlexItem>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Have Key?"
                      placeholder="Have Key"
                    />
                    <InputText
                      type="text"
                      label="Hold Note"
                      placeholder="Hold Note"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <InputTextarea
                    placeholder="05/03/2024 Fri 11:26-"
                    label="Note"
                  />
                </InvoiceRowLayout>
              </div>

              <div className="flex-col">
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Inv#"
                      placeholder="Inv#"
                    />
                    <InvoiceDatePicker label="Date" placeholder="" />
                  </FlexItem>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Group"
                      placeholder=""
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Driver#"
                      placeholder=""
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Name"
                      placeholder="Name"
                    />
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="PO#"
                      placeholder="PO#"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <div className="flex gap-x-1 flex-wrap">
                  <div className="md:w-[49%] w-full">
                    <InputTextarea placeholder="" label="Address" />
                  </div>
                  <div className="flex-col md:w-[50%] w-full">
                    <InvoiceRowLayout>
                      <FlexItem>
                        <InvoiceSelect
                          data={["apple", "bear"]}
                          label="License#"
                          placeholder=""
                        />
                        <InvoiceSelect
                          data={["apple", "bear"]}
                          label="State"
                          placeholder=""
                        />
                      </FlexItem>
                    </InvoiceRowLayout>
                    <InvoiceRowLayout width={100}>
                      <InputText
                        type="text"
                        label="Phone Number"
                        placeholder="(---) --- ----"
                      />
                      <InputText
                        type="text"
                        label="Contact"
                        placeholder="Contact"
                      />
                    </InvoiceRowLayout>
                  </div>
                </div>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText type="text" label="City" placeholder="City" />
                    <InputText type="text" label="State" placeholder="State" />
                    <InputText type="text" label="Zip" placeholder="Zip" />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Registered Owner"
                      placeholder="Registered Owner"
                    />
                    <InputText
                      type="text"
                      label="R-Type"
                      placeholder="R-Type"
                    />
                    <InputText
                      type="text"
                      label="Auction #"
                      placeholder="Auction #"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Address"
                      placeholder="Address"
                    />
                    <InputText type="text" label="City" placeholder="City" />
                    <InputText type="text" label="State" placeholder="State" />
                    <InputText type="text" label="Zip" placeholder="Zip" />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InvoiceDatePicker
                      label="Storage In"
                      placeholder="Storage In"
                    />
                    <InvoiceDatePicker
                      label="Storage Out"
                      placeholder="Storage Out"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <FlexItem>
                    <InputText
                      type="text"
                      label="Common"
                      placeholder="Common"
                    />
                    <InvoiceDatePicker label="Lien Start" placeholder="" />
                    <InvoiceDatePicker label="Lien Clear" placeholder="" />
                  </FlexItem>
                  <FlexItem>
                    <InvoiceSelect
                      data={["apple", "bear"]}
                      label="Lien Type"
                      placeholder=""
                    />
                    <InputText
                      type="text"
                      label="Lien Fee"
                      placeholder="Lien Fee"
                    />
                  </FlexItem>
                </InvoiceRowLayout>
                <InvoiceRowLayout>
                  <Table className="mt-4">
                    <TableHeader className="bg-[#051367] hover:none">
                      <TableRow className="hover:bg-[#051367]">
                        <TableHead className="w-[40%] text-white hover:none">
                          Description
                        </TableHead>
                        <TableHead className="text-white hover:none">
                          Quant
                        </TableHead>
                        <TableHead className="text-white hover:none">
                          Price
                        </TableHead>
                        <TableHead className="text-right text-white hover:none">
                          Extended
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoiceTable.map((data, index) => (
                        <TableRow key={index} className="cursor-pointer">
                          <TableCell className="font-medium">
                            {data.description}
                          </TableCell>
                          <TableCell>{data.quant}</TableCell>
                          <TableCell>{data.price}</TableCell>
                          <TableCell className="text-right">
                            {data.extended}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </InvoiceRowLayout>
              </div>
              <Separator />
              <div className="flex-col p-4">
                <div className="text-[#757575] text-[14px] pb-2">
                  Click here and choose Item
                </div>
                <div className="text-[#757575] text-[14px]">Discount</div>
              </div>
              <Separator />
              <div className="p-4 flex justify-between">
                <div className="font-medium text-[16px] pb-2">Total</div>
                <div className="font-medium text-[16px] pb-2">$440</div>
              </div>
            </CardContent>
          </>
        </Card>
      ) : (
        <BarLoader className="w-full" width={"100%"}/>
      )}
    </>
  );
};

export default GeneralScreen;
