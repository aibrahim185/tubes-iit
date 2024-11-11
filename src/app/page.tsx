"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "6731f3769f1273d401e4ddf7" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        render: {
          mode: "embedded",
          target: document.body,
        },
        autostart: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <main className="size-full"></main>;
}
