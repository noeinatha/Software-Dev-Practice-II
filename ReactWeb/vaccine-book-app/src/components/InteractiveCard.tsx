"use client";
import React from "react";

export function InteractiveCard({
  children,
  hospitalName,
}: {
  children: React.ReactNode;
  hospitalName: string;
}) {
  function onCarSelected() {
    alert("You Select " + hospitalName);
  }

  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="w-1/5 h-[300px] rounded-lg bg-white shadow-lg"
      onClick={() => onCarSelected()}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
