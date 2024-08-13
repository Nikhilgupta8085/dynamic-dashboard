import React from "react";
import Widget from "./Widget";

export default function Category({ category, addWidget, removeWidget }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="space-y-2">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(widget.id)}
          />
        ))}
      </div>
    </div>
  );
}
