import VaccineReservation from "@/components/VaccineReservation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <table className="table-auto border-separate bordor-spacing-2">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{profile.data.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{createdAt.toString()}</td>
          </tr>
        </tbody>
      </table>

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
