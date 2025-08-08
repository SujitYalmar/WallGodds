import { useEffect } from "react";

const useGoogleAnalytics = () => {
    useEffect(() => {
        // GA is already initialized in index.html
        // Just verify it's working
        const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

        if (measurementId && window.gtag) {
            console.log("GA: React hook verified - GA is ready");
        } else if (!measurementId) {
            console.log("GA: No measurement ID found");
        } else {
            console.log("GA: gtag not available yet");
        }
    }, []);
};

export default useGoogleAnalytics;
