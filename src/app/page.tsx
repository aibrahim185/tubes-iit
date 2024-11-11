"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          render: { mode: string; target: HTMLElement };
          autostart: boolean;
        }) => void;
      };
    };
  }
}

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
