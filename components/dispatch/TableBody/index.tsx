import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight } from 'lucide-react';
import { useState } from "react";

interface IDispatchTableBodyProps {
    data: {
        towdrive: {
            id: number;
            rec?: string | null;
            Inrt?: string| null;
            Arvd?: string| null;
            iTow?: string| null;
            trucknum?: string| null;
        };
        driver?: {
            id: string;
            onduty?: boolean| null;
            def_trucknum?: string| null;
            driver_first?: string| null;
        }| null;
        towmast: {
            id: number| null;
            reason?: string| null;
            refnumber?: string| null;
            callactnum?: string| null;
            callname?: string| null;
            licensenum?: string| null;
            licensest?: string| null;
            yearcar?: string| null;
            makecar?: string| null;
            modelcar?: string| null;
            colorcar?: string| null;
            callphone?: string| null;
            towedfrom?: string| null;
            towedto?: string| null;
            priority?: string| null;
            longitude1?: string| null;
            latitude1?: string| null;
            type?: string| null;
        };
    }[];
}

const DispatchTableBody = ({ data }: IDispatchTableBodyProps) => {
    const [isSelect, setIsSelect] = useState(false);
    const handleSelect = (e:
        React.MouseEvent<HTMLTableRowElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setIsSelect(!isSelect);
    }
    return (
        <TableBody>
            {data.map((item, index) => (
                <TableRow key={index} onClick={handleSelect}>
                    <TableCell>
                        <div 
                            className="w-10 h-10 flex justify-center items-center"
                        >
                            {isSelect && <ArrowRight size={20} />}
                        </div>
                    </TableCell>
                    <TableCell>{item.towmast.priority}</TableCell>
                    <TableCell>{item.towmast.id}</TableCell>
                    <TableCell>{item.towdrive.trucknum}</TableCell>
                    <TableCell>{item.driver?.id}</TableCell>
                    <TableCell>{item.towdrive.rec}</TableCell>
                    <TableCell>{item.towdrive.Inrt}</TableCell>
                    <TableCell>{item.towdrive.Arvd}</TableCell>
                    <TableCell>{item.towdrive.iTow}</TableCell>
                    <TableCell>{item.towmast.callactnum}</TableCell>
                    <TableCell>{item.towmast.licensenum}</TableCell>
                    <TableCell>{item.towmast.yearcar}</TableCell>
                    <TableCell>{item.towmast.makecar}</TableCell>
                    <TableCell>{item.towmast.colorcar}</TableCell>
                    <TableCell>{item.towmast.callphone}</TableCell>
                    <TableCell>{item.towmast.reason}</TableCell>
                    <TableCell>{item.towmast.towedfrom}</TableCell>
                    <TableCell>{item.towmast.towedto}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default DispatchTableBody;