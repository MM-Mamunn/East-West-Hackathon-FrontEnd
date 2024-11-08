import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MdDeleteForever } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "react-datepicker/dist/react-datepicker.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { FaSearch, FaIdCard, FaEdit, FaUser, FaChair } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const dImage = "https://github.com/shadcn.png";
import { BsThreeDots } from "react-icons/bs";
function Bus_view() {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bus_view")
      .then((res) => {
        setBus(res?.data?.data?.users);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-6">
      {/* Search Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0 space-x-2">
        <div className="flex items-center w-full space-x-3">
          <Input
            className="w-full lg:w-64"
            placeholder="Search by driver name or bus ID"
          />
          <Button className="p-2">
            <FaSearch className="text-lg" />
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center w-full md:w-fit space-x-2 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out ">
              {/* <IoMdAddCircle className="mr-2 text-xl" /> */}
              Insert New Driver
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-gray-50 p-6 rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-800">
                Insert New Driver
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Fill out the details for the new driver. Click save to insert
                it.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-6">
              {/* Driver ID Field */}
              <div className="flex justify-center w-full h-full items-center gap-4">
                <Label
                  htmlFor="driverId"
                  className="w-1/3 text-right font-medium text-gray-700"
                >
                  Driver ID
                </Label>
                <Input
                  id="driverId"
                  placeholder="Enter Driver ID"
                  className="w-full"
                />
              </div>

              {/* Bus ID Field */}
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="busId"
                  className="w-1/3 text-right font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter Driver Name"
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-4">
                <Label
                  htmlFor="age"
                  className="w-1/3 text-right font-medium text-gray-700"
                >
                  Age
                </Label>
                <Input
                  type="number"
                  id="age"
                  placeholder="Enter Driver Age"
                  className="w-full"
                />
              </div>

              {/* Route Field */}
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="licenseNo"
                  className="w-1/3 text-right font-medium text-gray-700"
                >
                  License No
                </Label>
                <Input
                  id="licenseNo"
                  placeholder="Enter Lisence No"
                  className="w-full"
                />
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                >
                  Insert
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Drivers List */}

      {/* Driver Info */}
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white shadow-md rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700">
              <TableHead className="px-6 py-4">Bus Id & license</TableHead>
              <TableHead className="px-6 py-4">Assign</TableHead>
              <TableHead className="px-6 py-4">Seats</TableHead>
              <TableHead className="px-6 py-4">Oil</TableHead>
              <TableHead className="px-6 py-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bus?.map((bus) => (
              <TableRow key={bus?.bus_id} className="border-b border-gray-200">
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src="https://github.com/shadcn.png" alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bus?.bus_id}</div>
                      <div className="text-sm text-gray-500">
                        {bus?.license_no}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">{bus?.assign}</TableCell>
                <TableCell className="px-6 py-4">{bus?.seats}</TableCell>
                <TableCell className="px-6 py-4">{bus?.oil}</TableCell>
                <TableCell className="px-6 py-4 flex">
                  <Dialog>
                    <DialogTrigger asChild>
                      <FaEdit
                        className="text-green-800 cursor-pointer"
                        size={30}
                      />
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[500px] bg-gray-50 p-6 rounded-lg shadow-lg">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-gray-800">
                          Update the route
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                          Fill out the details you want to update. Click save to
                          insert it.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-6 py-6">
                        {/* Driver ID Field */}
                        <div className="flex justify-center w-full h-full items-center gap-4">
                          <Label
                            htmlFor="driverId"
                            className="w-1/3 text-right font-medium text-gray-700"
                          >
                            Driver ID
                          </Label>
                          <Input
                            id="driverId"
                            placeholder="Enter Driver ID"
                            className="w-full"
                          />
                        </div>

                        {/* Bus ID Field */}
                        <div className="flex items-center gap-4">
                          <Label
                            htmlFor="busId"
                            className="w-1/3 text-right font-medium text-gray-700"
                          >
                            Bus ID
                          </Label>
                          <Input
                            id="busId"
                            placeholder="Enter Bus ID"
                            className="w-full"
                          />
                        </div>

                        {/* Date Field with Icon */}
                        <div className="flex items-center gap-4">
                          <Label
                            htmlFor="date"
                            className="w-1/3 text-right font-medium text-gray-700"
                          >
                            Date
                          </Label>
                          {/* <div className="relative w-full">
                            <DatePicker
                              id="date"
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              dateFormat="MM-dd-yyyy"
                              placeholderText="   Select a date"
                              showIcon
                            />
                          </div> */}
                        </div>

                        {/* Route Field */}
                        <div className="flex items-center gap-4">
                          <Label
                            htmlFor="route"
                            className="w-1/3 text-right font-medium text-gray-700"
                          >
                            Route
                          </Label>
                          <Input
                            id="route"
                            placeholder="Enter Route Name"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <DialogFooter>
                        <Button
                          type="submit"
                          className="text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                        >
                          Update
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger>
                      <MdDeleteForever
                        className="text-red-800 cursor-pointer"
                        size={30}
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. Are you sure you want to
                          permanently delete this file from our servers?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button type="submit">Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Bus_view;
