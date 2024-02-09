// mui theme settings
export const themeSettings = () => {
    return {
        palette: {
            // palette values for dark mode
            backgroundColor: "#191E35",
            primaryColor: "#332FD0",
            secondaryColor: "#F52AF5",
            thirdColor: "#15BFFD",
            redColor: "#FF0000",
            greenColor: "#00FF57",
            defaultColor: "#FFFFFF",
            rainbowColor: "linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%)"
        },
        typography: {
            fontFamily: ["Jura", "sans-serif"].join(","),
            fontSize: 12,
            secondFontFamily: {
                fontFamily: ["Inter", "sans-serif"].join(","),
            }
        },
    };
};
