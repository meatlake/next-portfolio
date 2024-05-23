import React from "react";

export default function Card(props) {
  return (
    <div className="rounded-xl bg-white min-h-96 w-56">
      <img
        src={props.img}
        alt="Koningsdag sweater"
        className="h-42 self-center rounded-xl"
      />
      <div className="p-4 flex flex-col content-between">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-lg">{props.text}</p>
        <div>
          <p className="tetx-2xl font-bold text-orange-400">€{props.price}</p>
        </div>
      </div>
    </div>
  );
}
