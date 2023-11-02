import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidatePath } from "next/cache";
export default async function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    console.log(addHospitalForm);
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");
    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/hospital");
  };
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  return (
    <div>
      {profile.data.role == "admin" ? (
        <div className="flex flex-col items-center">
          <form
            action={addHospital}
            className="bg-slate-100 rounded-lg space-x-5 space-y-2
            w-fit px-10 py-5 flex flex-col justify-center place-content-around"
          >
            <div className="text-xl">Add Hospital</div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="name"
              >
                Name{" "}
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="Hospital Name"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                required
                id="address"
                name="address"
                placeholder="Hospital Address"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="district"
              >
                District
              </label>
              <input
                type="text"
                required
                id="district"
                name="district"
                placeholder="District"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="province"
              >
                Province
              </label>
              <input
                type="text"
                required
                id="province"
                name="province"
                placeholder="Province"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="postalcode"
              >
                Postal Code
              </label>
              <input
                type="text"
                required
                id="postalcode"
                name="postalcode"
                placeholder="Postal Code"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="tel"
              >
                Tel.
              </label>
              <input
                type="text"
                required
                id="tel"
                placeholder="Tel"
                name="tel"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <div className="flex items-center w-full my-2">
              <label
                className="block text-gray-700 pr-4 w-[160px] flex items-start"
                htmlFor="picture"
              >
                Picture
              </label>
              <input
                type="text"
                required
                id="picture"
                placeholder="URL"
                name="picture"
                className="rounded ring-1 ring-inset ring-gray-400 text-md h-[50px] w-[300px] indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-black focus:placeholder:text-black hover:outline-none hover:ring-black hover:placeholder:text-black"
              />
            </div>
            <button
              type="submit"
              className="block rounded-md w-1/4 bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            >
              Confirm
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
