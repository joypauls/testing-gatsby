export default {
    colors: {
      text: "#333",
      background: "#fff",
      primary: "#8b32eb",
      secondary: "#ff6347",
      accent: "#ff7891"
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "system-ui, sans-serif",
      monospace: "Menlo, monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    buttons: {
        primary: {
            color: "white",
            bg: "primary",
            borderColor: "accent",
            "&:hover": {
                color: "primary",
                bg: "white",
            },
        },
        secondary: {
          color: "text",
          bg: "secondary",
          "&:hover": {
          color: "secondary",
          bg: "text",
          },
        },
      },
}
