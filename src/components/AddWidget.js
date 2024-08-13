import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/dashboardSlice";

export default function AddWidget() {
  const [categoryId, setCategoryId] = useState(1);
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      content: widgetContent,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setWidgetName("");
    setWidgetContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category ID</label>
        <input
          type="number"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Widget Name</label>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Widget Content</label>
        <textarea
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Widget
      </button>
    </form>
  );
}
