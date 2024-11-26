const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            fontfamily: {
                sans: ["Almarai", ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                oval: "50%",
                "oval-x": "60% 40%",
                "oval-y": "40% 60%",
                "custom-oval": "30% 70% 70% 30% / 30% 30% 70% 70%",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            lightCustom: {
                primary: "#1B7D75", // darkgreen for buttons/links
                secondary: "#808080", // lightgray for secondary text
                accent: "#f6c300", // gold accent
                neutral: "#2B2B2B", // dark gray
                "base-100": "#FFFFFF", // white background
                info: "#4AA8FF",
                success: "#198754",
                warning: "#FFC107",
                error: "#DC3545",

                // Custom color tokens
                "--color-text-primary": "#1a1a1a", // near black for primary text
                "--color-text-secondary": "#808080", // lightgray for secondary text
                "--color-link": "#1B7D75", // darkgreen for links
                "--color-button": "#1B7D75", // darkgreen for buttons
            },
            darkCustom: {
                primary: "#90EE90", // lightgreen for buttons/links
                secondary: "#A9A9A9", // darkgray for secondary text
                accent: "#f6c300", // gold accent
                neutral: "#2B2B2B",
                "base-100": "#1a1a1a", // very dark background
                info: "#4AA8FF",
                success: "#198754",
                warning: "#FFC107",
                error: "#DC3545",

                // Custom color tokens
                "--color-text-primary": "#FFFFFF", // white for primary text
                "--color-text-secondary": "#A9A9A9", // darkgray for secondary text
                "--color-link": "#90EE90", // lightgreen for links
                "--color-button": "#90EE90", // lightgreen for buttons
            },
        }, ],
    },
};
