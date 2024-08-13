import React from "react";

export default function Input({ label, id, error, ...props }) {
  return (
    <div className="w-full text-center">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="rounded-lg border-2 border-gray-300 p-4 focus:border-blue-300 focus:outline-none"
        id={id}
        {...props} // Spread the props like type, name, value, etc.
      />
      <div className="text-red-500">{error && <p>{error}</p>}</div>
    </div>
  );
}
