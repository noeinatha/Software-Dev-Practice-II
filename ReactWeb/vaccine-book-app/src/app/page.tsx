import Banner from "@/components/Banner";
import { InfoCard } from "@/components/InfoCard";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-around",
          }}
        >
          <InfoCard
            hospitalName="Chulalongkorn Hospital"
            imgSrc="/img/chula.jpg"
          />
          <InfoCard
            hospitalName="Rajavithi Hospital"
            imgSrc="/img/rajavithi.jpg"
          />
          <InfoCard
            hospitalName="Thammasat University Hospital"
            imgSrc="/img/thammasat.jpg"
          />
        </div>
      </div>
    </main>
  );
}
