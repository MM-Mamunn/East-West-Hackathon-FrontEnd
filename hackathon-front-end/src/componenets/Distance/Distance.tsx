import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import axios from "axios";
const Distance = () => {
  const convertDate = (str: string) => {
    console.log(str);
    str = str.toString();
    let parts = str.split(" ");
    let months: any = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    return parts[3] + "-" + months[parts[1]] + "-" + parts[2];
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const calculateDistance = async () => {
    console.log(convertDate(String(startDate)));
    console.log(convertDate(String(endDate)));
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/total_distance?date1=${convertDate(
        String(startDate)
      )}&date2=${convertDate(String(startDate))}`
    );
    console.log(data);
  };
  const [result, setResult] = useState([]);
  if (result.length === 0) {
    return (
      <div className="p-6 h-screen">
        <div className="flex items-center justify-center gap-x-10 w-full space-x-3">
          <div className="flex items-center gap-4">
            <Label
              htmlFor="startDate"
              className="w-1/3 text-right font-medium text-gray-700"
            >
              Start Date
            </Label>
            <div className="relative w-full">
              <DatePicker
                id="startDate"
                selected={startDate}
                className="border-2 border-black"
                onChange={(date) => setStartDate(date)}
                dateFormat="MM-dd-yyyy"
                placeholderText="   Select a starting date"
                showIcon
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label
              htmlFor="endDate"
              className="w-1/3 text-right font-medium text-gray-700"
            >
              End Date
            </Label>
            <div className="relative w-full">
              <DatePicker
                id="date"
                className="border-2 border-black"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM-dd-yyyy"
                placeholderText="   Select a ending date"
                showIcon
              />
            </div>
          </div>
          <Button onClick={calculateDistance}>Check Total Distance</Button>
        </div>
        <div className="flex h-full justify-center items-center">
          <div className="text-2xl">Please search to get provided value</div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-6">
      <div className="flex items-center w-full space-x-3">
        <div className="flex items-center gap-4">
          <Label
            htmlFor="startDate"
            className="w-1/3 text-right font-medium text-gray-700"
          >
            Start Date
          </Label>
          <div className="relative w-full">
            <DatePicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM-dd-yyyy"
              placeholderText="   Select a starting date"
              showIcon
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Label
            htmlFor="endDate"
            className="w-1/3 text-right font-medium text-gray-700"
          >
            End Date
          </Label>
          <div className="relative w-full">
            <DatePicker
              id="date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM-dd-yyyy"
              placeholderText="   Select a ending date"
              showIcon
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white shadow-md rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700">
              <TableHead className="px-6 py-4">Bus Id</TableHead>

              <TableHead className="px-6 py-4">Total Distance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Distance;
