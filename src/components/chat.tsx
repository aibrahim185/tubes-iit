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

const VoiceflowChatWidget: React.FC = () => {
  useEffect(() => {
    const loadVoiceflowChatWidget = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = () => {
        window.voiceflow?.chat?.load({
          verify: { projectID: "673809d473a58eac628bab0d" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          assistant: {
            title: "IIT Bot",
            description: "IIT intelligent virtual assistant",
            image: "logo.png",
            color: "#e3af02",
          },
        });
      };
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      document.body.appendChild(script);
    };

    loadVoiceflowChatWidget();
  }, []);

  return null; // The widget is script-based, so no JSX content is needed.
};

export default VoiceflowChatWidget;
