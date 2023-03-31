import React from "react";
import { useSelector } from "react-redux";

const Output = () => {
  const paragraph = useSelector((state) => state.text.paragraph);
  console.log(paragraph);
  const status = useSelector((state) => state.text.status);

  return (
    <div className="mt-8 w-full h-auto py-14 px-7 bg-theme-light-black rounded-sm">
      {status === "loading" && (
        <p className="text-2xl font-bold italic">Loading...</p>
      )}
      {status === "failed" && (
        <p className="text-2xl font-bold italic">
          Error: Something went wrong!
        </p>
      )}
      {status === "succeeded" && paragraph}
    </div>
  );
};

export default Output;
