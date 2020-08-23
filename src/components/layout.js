/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { React, useState, Fragment } from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import { Button, Flex, Text, Box } from "rebass";
import { IoMdStats } from "react-icons/io";

import ModeSwitch from "./misc/ModeSwitch/ModeSwitch.js";
import BLMBanner from "./banner.js";


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

const MainHeader = ({...props}) => {
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
      >
        <Box style={{ margin: rhythm(1), }}>
          <h3 sx={{ display: "flex", alignItems: "center", color: "text", }}>
            <IoMdStats sx={{color: "secondary"}} size="2rem" style={{ marginRight: "1rem" }}/>
            <Link style={{ boxShadow: `none`, color: `inherit`, }} to={`/`}>
              { props.title }
            </Link>
          </h3>
          <h5 style={{ marginTop: 0, color: "inherit" }}>
            { props.description }
          </h5>
        </Box>
        <ModeSwitch mode={ props.colorMode } handleToggle={ () => props.setColorMode(props.nextColorMode) } />
      </Flex>
      <Flex alignItems="center" justifyContent="center" marginBottom="5rem">
        <NavButton text="Categories" />
        <NavButton text="Visualizations" />
        <NavButton text="About" />
      </Flex>
    </div>
  );
};

const SecondaryHeader = ({...props}) => {
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
      >
        <Box style={{ margin: rhythm(1), }}>
          <h3 sx={{ display: "flex", alignItems: "center", color: "text", }}>
            <IoMdStats sx={{color: "secondary"}} size="2rem" style={{ marginRight: "1rem" }}/>
            <Link style={{ boxShadow: `none`, color: `inherit`, }} to={`/`}>
              { props.title }
            </Link>
          </h3>
          <h5 style={{ marginTop: 0, color: "inherit" }}>
            { props.description }
          </h5>
        </Box>
        <ModeSwitch mode={ props.colorMode } handleToggle={ () => props.setColorMode(props.nextColorMode) } />
      </Flex>
      <Flex alignItems="center" justifyContent="center" marginBottom="5rem">
        <NavButton text="Categories" />
        <NavButton text="Visualizations" />
        <NavButton text="About" />
      </Flex>
    </div>
  );
};


const Layout = ({ location, title, description, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === 'default' ? 'dark' : 'default';

  // const [value, setValue] = useState(false);



  if (location.pathname === rootPath) {
    // TODO: make this more elegant
    header = <MainHeader 
      title={title} 
      description={description} 
      colorMode={colorMode} 
      nextColorMode={nextColorMode} 
      setColorMode={setColorMode}  
    />;
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
    );
  }
  return (
    <Fragment>
      <BLMBanner />
    
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
        <h5>
          { "made with ❤ by " }
          <a href="https://github.com/joypauls">joypauls</a>
        </h5>
      </footer>
    </div>
    </Fragment>
  );
}

export default Layout;
