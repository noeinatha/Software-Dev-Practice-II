"use client";
import { useReducer } from "react";
import { InfoCard } from "./InfoCard";

export default function CardPanel() {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: string; hospitalName: string; newRating: number }
  ) => {
    switch (action.type) {
      case "update": {
        return new Map(ratingMap.set(action.hospitalName, action.newRating));
      }
      case "remove": {
        ratingMap.delete(action.hospitalName);
        return new Map(ratingMap);
      }
      default:
        return ratingMap;
    }
  };
  const [ratingMap, dispatchrating] = useReducer(
    ratingReducer,
    new Map([
      ["Chulalongkorn Hospital", 0],
      ["Rajavithi Hospital", 0],
      ["Thammasat University Hospital", 0],
    ])
  );

  return (
    <div>
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
          rating={ratingMap.get("Chulalongkorn Hospital") || 0}
          onRating={(rating: number) =>
            dispatchrating({
              type: "update",
              hospitalName: "Chulalongkorn Hospital",
              newRating: rating,
            })
          }
        />
        <InfoCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          rating={ratingMap.get("Rajavithi Hospital") || 0}
          onRating={(rating: number) =>
            dispatchrating({
              type: "update",
              hospitalName: "Rajavithi Hospital",
              newRating: rating,
            })
          }
        />
        <InfoCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          rating={ratingMap.get("Thammasat University Hospital") || 0}
          onRating={(rating: number) =>
            dispatchrating({
              type: "update",
              hospitalName: "Thammasat University Hospital",
              newRating: rating,
            })
          }
        />
      </div>
      <div className="pl-[20px] w-full text-xl font-medium">Rating:</div>
      {Array.from(ratingMap).map((element) => (
        <div
          key={element[0]}
          onClick={() =>
            dispatchrating({
              type: "remove",
              hospitalName: element[0],
              newRating: element[1],
            })
          }
          className="pl-[20px] pt-[10px] pb-[10px]"
        >
          {element[0]} Rating = {element[1]}
        </div>
      ))}
    </div>
  );
}
