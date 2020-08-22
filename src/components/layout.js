/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { React, useState, Fragment } from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import { Button, Flex, Text, Box } from "rebass";
import { IoMdStats } from "react-icons/io";

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


const Layout = ({ location, title, description, children }) => {
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
        {/* <img src="https://img.icons8.com/ultraviolet/80/000000/normal-distribution-histogram.png"/> */}
      <h3
        style={{
          // ...scale(1.2),
          // marginBottom: rhythm(1.5),
          // marginTop: 0,
          display: "flex",
          alignItems: "center",
        }}
        sx={{
          color: "text",
        }}
      >
        <IoMdStats sx={{color: "secondary"}} size="2rem" style={{ marginRight: "1rem" }}/>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          { title }
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
        { description }
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
    <Fragment>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000000",
        width: "100%",
      }}
    >
      <div 
        style={{
          width: "800px", 
       margin: "0 auto", 
       padding: "10px",
       border: "1px solid #000",
       textAlign: "center"
        }}
      >
        <h3 style={{color: "#FFFFFF", margin: 0,}}>
        Black Lives Matter
        </h3>
      </div>
    </div>
    
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
    </Fragment>
  );
}

export default Layout;
