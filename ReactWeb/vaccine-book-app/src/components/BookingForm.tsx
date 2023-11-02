"use client";
import VaccineReservation from "@/components/VaccineReservation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingForm() {
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [bookHospital, setBookhospital] = useState<string>("");
  const [bookFirstName, setBookFirstName] = useState<string>("");
  const [bookLastName, setBookLastName] = useState<string>("");
  const [bookIDnumber, setBookIDNumber] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (bookDate && bookHospital) {
      const item: BookingItem = {
        firstname: bookFirstName,
        lastname: bookLastName,
        IDnumber: bookIDnumber,
        hospital: bookHospital,
        date: dayjs(bookDate).format("YYYY/MM/DD"),
      };
      dispatch(addBooking(item));
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="py-5 text-xl font-medium">New Booking</div>

      <div className="w-fit spcae-y-2">
        <div className="text-md text-left text-gray-600 pb-5">
          Fill The Information.
        </div>
        <VaccineReservation
          onDateChange={(value: Dayjs) => {
            setBookDate(value);
          }}
          onHospitalChange={(value: string) => setBookhospital(value)}
          onFirstnameChange={(value: string) => setBookFirstName(value)}
          onLastNameChange={(value: string) => setBookLastName(value)}
          onIDChange={(value: string) => setBookIDNumber(value)}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        CONFIRM
      </button>
    </main>
  );
}
