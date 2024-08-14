import React from "react";
import { Spinner } from "./Icons";

export function Button({ children, classes, onSubmit, ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white rounded-md hover:bg-blue-700 ${classes}`}
      onClick={onSubmit}
      {...props}
    >
      {children}
    </button>
  );
}

export function LoadingButton({ children, classes, ...props }) {
  return (
    <button
      className={`bg-inherit text-white rounded-md ${classes}`}
      disabled
      {...props}
    >
      <Spinner />
      {children}
    </button>
  );
}
