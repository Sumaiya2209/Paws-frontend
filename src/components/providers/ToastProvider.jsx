"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3500,
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#1a1a1a",
        },
        success: { iconTheme: { primary: "#a53b22", secondary: "#fff" } },
        error: { iconTheme: { primary: "#b3261e", secondary: "#fff" } },
      }}
    />
  );
}
