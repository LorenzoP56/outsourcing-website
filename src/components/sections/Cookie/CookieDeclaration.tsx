 "use client";

  import { useEffect, useRef } from "react";

  type Props = {
    locale: string;
  };

  export default function CookieDeclaration({ locale }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.src =
        "https://consent.cookiebot.com/e58a8351-5b5c-43aa-8d93-5a7b3391f9f5/cd.js";
      script.type = "text/javascript";
      script.async = true;
      script.setAttribute("data-culture", locale);

      container.appendChild(script);

      return () => {
        container.replaceChildren();
      };
    }, [locale]);

    return (
      <div
        id="cookie-declaration-container"
        ref={containerRef}
      />
    );
  }