import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/hospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import HospitalForm from "@/components/AddhospitalForm";

export default async function Hospital() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  return (
    <main className="text-center p-5">
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
      {profile.data.role == "admin" ? <HospitalForm /> : null}
    </main>
  );
}
