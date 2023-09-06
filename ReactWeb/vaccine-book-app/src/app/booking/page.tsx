import VaccineReservation from "@/components/VaccineReservation";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="py-5 text-xl font-medium">New Reservation</div>

      <div className="w-fit spcae-y-2">
        <div className="text-md text-left text-gray-600 pb-5">
          Fill The Information.
        </div>
        <VaccineReservation />
      </div>

      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
        CONFIRM
      </button>
    </main>
  );
}
