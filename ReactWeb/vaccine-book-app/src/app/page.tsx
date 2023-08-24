import Banner from "@/components/Banner";
import { InfoCard } from "@/components/InfoCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div style={{ backgroundColor: "white" }}>
        <Banner />
        <div
          style={{
            margin: "20px",
            alignContent: "space-around",
          }}
        >
          <InfoCard />
        </div>
      </div>
    </main>
  );
}
