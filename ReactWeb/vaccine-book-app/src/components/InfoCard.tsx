"use client";
import Image from "next/image";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { InteractiveCard } from "./InteractiveCard";

export function InfoCard({
  hospitalName,
  imgSrc,
  rating,
  onRating,
}: {
  hospitalName: string;
  imgSrc: string;
  rating: number;
  onRating: Function;
}) {
  return (
    <InteractiveCard hospitalName={hospitalName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Vaccine Infomation"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px]">
        {hospitalName}
        <div>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              event.stopPropagation;
              onRating(newValue);
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
