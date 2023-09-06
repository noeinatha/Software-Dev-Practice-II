"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function VaccineReservation() {
  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5 space-y-2
    w-fit px-10 py-5 flex flex-col justify-center place-content-around"
    >
      <div className="flex flex-row-reverse">
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
        />
      </div>
      <div>
        <input
          type="text"
          id="idnumber"
          placeholder="ID Number"
          className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
        />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white w-[300px]" />
        </LocalizationProvider>
      </div>
      <div>
        <Select
          variant="standard"
          name="hospital"
          id="hospital"
          className="h-[2em] w-[300px]"
        >
          <MenuItem value="chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="thammasat">Thammasat University Hospital</MenuItem>
        </Select>
      </div>
    </div>
  );
}
