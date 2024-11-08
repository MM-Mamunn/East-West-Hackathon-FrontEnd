import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Efficiency = () => {
  const [efficiency, setEfficiency] = useState([]);
  useEffect(() => {
    const getEfficiency = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/efficiency");
      setEfficiency(data?.data?.users);
    };
    getEfficiency();
  }, []);
  return (
    <div className="p-6">
      <div className="flex w-1/2 flex-col my-4 justify-start items-start gap-y-4 ">
        <div className="text-xl">Efficiency</div>
        <div className="text-lg">How it calculates?</div>
        <div className="text-start">
          Efficiency means cost per passenger to travel per
          Killometer.Efficiency=((maintanance cost + oil cost)/ total passenger)
          / (Average distance traveled by per passenger)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white shadow-md rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700">
              <TableHead className="px-6 py-4">Bus Id & Trips</TableHead>

              <TableHead className="px-6 py-4">Total Seats</TableHead>
              <TableHead className="px-6 py-4">Oil Cost</TableHead>
              <TableHead className="px-6 py-4">Maintenence Cost</TableHead>
              <TableHead className="px-6 py-4">Total Cost</TableHead>
              <TableHead className="px-6 py-4">Total Distance</TableHead>
              <TableHead className="px-6 py-4">Efficiency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {efficiency?.map((res) => (
              <TableRow key={res?.bus_id} className="border-b border-gray-200">
                <TableCell className="px-6 py-4">
                  <div>
                    <div className="font-bold">ID: {res?.bus_id.to}</div>
                    <div className="text-sm text-gray-500">
                      Trips: {res?.cnt < 1 ? 0 : res?.cnt}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  {res?.totall_seats < 1 ? 0 : res?.totall_seats}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {Number(res?.c1).toFixed(2)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {Number(res?.c2).toFixed(2)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {Number(res?.totall).toFixed(2)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {Number(res?.dis2).toFixed(2)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {res?.eff >= 9999
                    ? "INF"
                    : res?.totall == 0 && res?.cnt < 1
                    ? "NULL"
                    : Number(res?.eff).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Efficiency;
