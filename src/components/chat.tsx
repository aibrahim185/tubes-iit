"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          assistant: {
            title: string;
            description: string;
            image: string;
            color: string;
          };
        }) => void;
      };
      isInitialized?: boolean;
    };
  }
}

export default function ChatBot() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded && !window.voiceflow?.isInitialized) {
      const script = document.createElement("script");
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);
        if (window.voiceflow) {
          window.voiceflow.isInitialized = true;
          const chatbotTarget = document.getElementById(
            "chatbot"
          ) as HTMLElement;
          if (chatbotTarget && !chatbotTarget.shadowRoot) {
            window.voiceflow.chat.load({
              verify: { projectID: "673809d473a58eac628bab0d" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
              assistant: {
                title: "IIT Bot",
                description: "ini chatbot IIT",
                image: "logo.png",
                color: "#e3af02",
              },
            });
          }
        }
      };

      document.body.appendChild(script);
    }
  }, [isScriptLoaded]);

  return <div id="chatbot"></div>;
}
