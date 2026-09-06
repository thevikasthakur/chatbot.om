"use client";

import { useEffect } from "react";

// The widget attaches itself to window at runtime. Reading it via Reflect.get
// keeps this file valid in both JavaScript and strict TypeScript (there is no
// `ViraChat` on the Window type, so `window.ViraChat` fails tsc with TS2339).
const viraChat = () => Reflect.get(window, "ViraChat");

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://dev.voxreception.com/vox-embed/widget.v1.js";
    script.async = true;
    script.dataset.apiUrl = "https://dev.voxreception.com";
    script.onload = () => {
      viraChat()?.init({
        agentId: "6a9d3d0b9eda80e7134db900",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudF9pZCI6IjZhOWQzZDBiOWVkYTgwZTcxMzRkYjkwMCIsIndvcmtzcGFjZV9pZCI6IjZhOWQzZDA4OWVkYTgwZTcxMzRkYjhmZSIsImF1ZCI6ImVtYmVkIiwib3JpZ2lucyI6WyJodHRwczovL3RyeS5jaGF0Ym90Lm9tIl0sImV4cCI6MTc5MTI5MDI2NiwiaWF0IjoxNzg4Njk4MjY2LCJqdGkiOiJjYjdkNzBlZDNlOGY3N2U0In0.Zlxy4AmPZVuRhOVty6pcCHrGh2LmU4Y8-p2cH2G3zRU",
        apiBase: "https://dev.voxreception.com",
        position: "bottom-right",
      });
    };
    document.body.appendChild(script);

    return () => {
      viraChat()?.destroy?.();
      script.remove();
    };
  }, []);

  return null;
}
