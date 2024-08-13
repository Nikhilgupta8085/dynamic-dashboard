import React from "react";

export default function Widget({ widget, removeWidget }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded">
      <div>
        <h3 className="font-semibold">{widget.name}</h3>
        <p>{widget.content}</p>
      </div>
      <button onClick={removeWidget} className="text-red-500 hover:text-red-700">
        ✕
      </button>
    </div>
  );
}
