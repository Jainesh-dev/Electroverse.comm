import React from "react";
import SplineScene from "./SplineScene";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-30">
      <SplineScene />
    </div>
  );
}
