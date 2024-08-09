import DispatchTableBody from "@/components/dispatch/TableBody";
import DispatchTableHeader from "@/components/dispatch/TableHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table } from "@/components/ui/table";
import SidebarItem from "@/components/Invoice/SidebarItem";
import { DialogCallContainer } from "../DialogCallContainer";
import { Button } from "@/components/ui/button";
import { Car, Phone } from "lucide-react";

const dataExample = [
  {
    towdrive: {
      id: 38965,
      rec: "08:07",
      Inrt: "08:07",
      Arvd: "08:19",
      iTow: "08:34",
      trucknum: "6620",
    },
    driver: {
      id: "2",
      onduty: false,
      def_trucknum: "6622",
      driver_first: "JAIME",
    },
    towmast: {
      id: 361827,
      reason: "T7",
      refnumber: "",
      callactnum: "BPD",
      callname: null,
      licensenum: "",
      licensest: "CA",
      yearcar: "* ",
      makecar: "",
      modelcar: null,
      colorcar: "",
      towedfrom: "* TRIAL * TRI",
      towedto: "2221 COY AVE BAKERSFIELD",
      callphone: "",
      priority: "1",
      longitude1: "0",
      latitude1: "0",
      type: "S",
    },
  },
];

const DispatchScreen = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="sm:flex justify-between items-center pb-2 ">
          Dispatch
          <div className="flex gap-2">
            <DialogCallContainer type={true}/>
            <Button variant="outline" className="gap-2">
          <Phone className="w-[16px]" />
          Drivers
        </Button>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <Table>
          <DispatchTableHeader />
          <DispatchTableBody data={dataExample} />
        </Table>
      </CardContent>
    </Card>
  );
};

export default DispatchScreen;
