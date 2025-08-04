// Page view tracking
export const pageview = (url) => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (typeof window.gtag !== "undefined" && measurementId) {
        console.log("GA: Tracking pageview for:", url); // Debug log
        window.gtag("config", measurementId, {
            page_path: url,
        });
    } else {
        console.log("GA: gtag not available or no measurement ID");
    }
};

// Event tracking
export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Custom events for your wallpaper site
export const trackWallpaperDownload = (wallpaperName) => {
    event({
        action: "download",
        category: "wallpaper",
        label: wallpaperName,
    });
};

export const trackCategoryView = (categoryName) => {
    event({
        action: "view_category",
        category: "navigation",
        label: categoryName,
    });
};

export const trackSearch = (searchTerm) => {
    event({
        action: "search",
        category: "engagement",
        label: searchTerm,
    });
};
