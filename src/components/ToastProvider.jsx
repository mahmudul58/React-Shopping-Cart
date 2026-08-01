import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Add to Cart / Success
        success: {
          style: {
            background: "#00c814",
            color: "#ffffff",
            fontWeight: "600",
            borderRadius: "12px",
            padding: "16px 20px",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#00c814",
          },
        },
        // Remove from Cart / Error / Invalid Promo
        error: {
          style: {
            background: "#ff3333",
            color: "#ffffff",
            fontWeight: "600",
            borderRadius: "12px",
            padding: "16px 20px",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#ff3333",
          },
        },
      }}
    />
  );
}
