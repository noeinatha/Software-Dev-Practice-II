"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function VaccineReservation({
  onDateChange,
  onHospitalChange,
  onFirstnameChange,
  onLastNameChange,
  onIDChange,
}: {
  onDateChange: Function;
  onHospitalChange: Function;
  onFirstnameChange: Function;
  onLastNameChange: Function;
  onIDChange: Function;
}) {
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [bookHospital, setBookhospital] = useState<string>("");
  const [bookFirstName, setBookFirstName] = useState<string>("");
  const [bookLastName, setBookLastName] = useState<string>("");
  const [bookIDnumber, setBookIDNumber] = useState<string>("");

  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5 space-y-2
    w-fit px-10 py-5 flex flex-col justify-center place-content-around"
    >
      <div className="flex flex-row-reverse">
        <input
          type="text"
          id="firstname"
          placeholder="Firstname"
          className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
          value={bookFirstName}
          onChange={(value) => {
            setBookFirstName(value.target.value);
            onFirstnameChange(value.target.value);
          }}
        />
      </div>
      <div className="flex flex-row-reverse">
        <input
          type="text"
          id="lastname"
          placeholder="Lastname"
          className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
          value={bookLastName}
          onChange={(value) => {
            setBookLastName(value.target.value);
            onLastNameChange(value.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          id="idnumber"
          placeholder="ID Number"
          className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
          value={bookIDnumber}
          onChange={(value) => {
            setBookIDNumber(value.target.value);
            onIDChange(value.target.value);
          }}
        />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white w-[300px]"
            value={bookDate}
            onChange={(value) => {
              setBookDate(value);
              onDateChange(value);
            }}
          />
        </LocalizationProvider>
      </div>
      <div>
        <Select
          variant="standard"
          name="hospital"
          id="hospital"
          className="h-[2em] w-[300px]"
          value={bookHospital}
          onChange={(value) => {
            setBookhospital(value.target.value);
            onHospitalChange(value.target.value);
          }}
        >
          <MenuItem value="Chulalongkorn Hospital">
            Chulalongkorn Hospital
          </MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat University Hospital">
            Thammasat University Hospital
          </MenuItem>
        </Select>
      </div>
    </div>
  );
}
