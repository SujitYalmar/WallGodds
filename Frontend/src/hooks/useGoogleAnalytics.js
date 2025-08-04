import { useEffect } from "react";

const useGoogleAnalytics = () => {
    useEffect(() => {
        const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

        if (import.meta.env.DEV || !measurementId) {
            console.log("GA: Skipping in development mode");
            return;
        }

        if (window.gtag) {
            return;
        }

        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
        document.head.appendChild(script2);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };

        console.log("GA: Initialized with ID:", measurementId);
    }, []);
};

export default useGoogleAnalytics;
