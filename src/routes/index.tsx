import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Srilatha & Shashwath — Wedding Invitation · 7 June 2026" },
      {
        name: "description",
        content:
          "With the blessings of our families, we joyfully invite you to the wedding of Srilatha N S & Shashwath Sriram on 7 June 2026 at Sri Krishnaswamy Kalyana Mandapam, Chennai.",
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/invite.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#FAF0DC",
        color: "#3D0000",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{ letterSpacing: "0.3em", marginBottom: "0.5rem" }}>
          SRILATHA &amp; SHASHWATH
        </p>
        <p>
          Opening invitation… <a href="/invite.html">Click here if it doesn’t load.</a>
        </p>
      </div>
    </div>
  );
}
