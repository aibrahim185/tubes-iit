"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

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
      isInitialized?: boolean;
    };
  }
}

export default function ChatBotBTN() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Chat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Chatbot</DialogTitle>
        <ChatBot />
      </DialogContent>
    </Dialog>
  );
}

export function ChatBot() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true);
        if (window.voiceflow) {
          window.voiceflow.isInitialized = true;
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
        }
      };
      document.body.appendChild(script);
    }
  }, [isScriptLoaded]);

  return <div id="chatbot"></div>;
}
