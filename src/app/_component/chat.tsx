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
          assistant: {
            title: string;
            description: string;
            image: string;
            color: string;
          };
        }) => void;
      };
    };
  }
}

export function ChatBot() {
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
          target: document.getElementById("chatbot") as HTMLElement,
        },
        autostart: false,
        assistant: {
          title: "IIT Bot",
          description: "ini chatbot IIT",
          image: "logo.png",
          color: "#e3af02",
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div className="rounded-full " id="chatbot"></div>;
}
