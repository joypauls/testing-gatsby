import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

// fairyGatesTheme.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete fairyGatesTheme.googleFonts

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => {
  const linkColor = "#8B32EB"
  return {
    a: {
      color: linkColor,
      textDecoration: "none",
      textShadow: "none",
      // backgroundImage: "none",
      //   ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
      fontStyle: "normal"
    },
  }
}

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
