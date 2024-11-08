"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyPopup = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const linkHref = "https://assets.calendly.com/assets/external/widget.css";

    if (!document.querySelector(`link[href="${linkHref}"]`)) {
      const link = document.createElement("link");
      link.href = linkHref;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        setCalendlyLoaded(true);
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/jschibelli?background_color=1a1a1a&text_color=ffffff",
            text: "Schedule time with me",
            color: "#0069ff",
            textColor: "#ffffff",
            branding: true,
          });
        }
      };
      document.head.appendChild(script);
    } else {
      setCalendlyLoaded(true);
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/jschibelli?background_color=1a1a1a&text_color=ffffff",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
      }
    }
  }, []);

  const openPopup = () => {
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jschibelli",
      });
    }
  };

  return (
    <div>
      {/* <button onClick={openPopup}>Schedule a Meeting</button> */}
    </div>
  );
};

export default CalendlyPopup;
