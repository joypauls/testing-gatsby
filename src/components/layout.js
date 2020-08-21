/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { React, useState } from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import { Button, Flex, Text, Box } from "rebass";

import ModeSwitch from "./misc/ModeSwitch/ModeSwitch.js";


const NavButton = ({ variant = "primary", ...props }) => {
  return (
    <Button 
      {...props} 
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        fontSize: "medium",
        border: "3px solid",
        borderRadius: "2rem",
        margin: "5px",
        variant: `buttons.${variant}`,
      }}
    >
      { props.text }
    </Button>
  )
};

// const handleToggle = (nextMode, setNextMode) => {
//   // setValue(nextValue);
//   setNextMode(nextMode);
// }


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === 'default' ? 'dark' : 'default';

  // const [value, setValue] = useState(false);



  if (location.pathname === rootPath) {
    header = (
      <div>
        <Flex
  alignItems='center'
  justifyContent='space-between'
  padding='1rem'>
      <Box
        style={{
          // ...scale(1.2),
          margin: rhythm(1),
        }}
      >
      <h3
        style={{
          // ...scale(1.2),
          // marginBottom: rhythm(1.5),
          // marginTop: 0,
        }}
        sx={{
          color: "text",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <h5
        style={{
          // ...scale(1.2),
          // marginBottom: rhythm(1.5),
          marginTop: 0,
          color: "inherit"
        }}
      >
        Blogging about data science, statistics, mathematics, and coding
      </h5>
      </Box>
          <ModeSwitch mode={ colorMode } handleToggle={ () => setColorMode(nextColorMode) } />
      </Flex>


      
  
<Flex
  alignItems='center'
  justifyContent='center'
  marginBottom='5rem'>
      <NavButton text="Categories" />
      <NavButton text="Visualizations" />
      <NavButton text="About" />
      </Flex>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >{children}</main>
      <hr />
      <footer>
        {/* © {new Date().getFullYear()},  */}
        {'made with ❤ by '}
        <a href="https://github.com/joypauls">joypauls</a>
      </footer>
    </div>
  )
}

export default Layout;
