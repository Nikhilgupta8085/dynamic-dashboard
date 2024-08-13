import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import AddWidget from "./AddWidget";
import { addWidget, removeWidget } from "../store/dashboardSlice";

export default function Dashboard() {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={(widget) => dispatch(addWidget({ categoryId: category.id, widget }))}
          removeWidget={(widgetId) => dispatch(removeWidget({ categoryId: category.id, widgetId }))}
        />
      ))}
      <AddWidget />
    </div>
  );
}
