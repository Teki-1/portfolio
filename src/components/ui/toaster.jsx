"use client";

import { Toaster } from "react-hot-toast";

export const AppToaster = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 4000,
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "14px",
      },
    }}
  />
);
