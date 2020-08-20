/** @jsx jsx */
import { jsx } from "theme-ui"

import { useColorMode } from 'theme-ui'

import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import { Button, Flex, Text, Box } from 'rebass'


const TestButton = ({ variant = "primary", ...props }) =>
  <Button 
  {...props} 
  sx={{
    appearance: "none",
    display: "inline-block",
    textAlign: "center",
    border: "2px solid",
    borderRadius: 4,
    margin: "5px",
    variant: `buttons.${variant}`,
  }}
  >
    Primary
  </Button>

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const [colorMode, setColorMode] = useColorMode()

  const nextColorMode = colorMode === 'light' ? 'dark' : 'light'

  if (location.pathname === rootPath) {
    header = (
      <div>
      <h2
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.5),
          marginTop: 0,
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
      </h2>

      <button onClick={ e => {
        setColorMode(nextColorMode)
      }}>
        Change color mode
      </button>
      
<Flex
  alignItems='center'
  justifyContent='center'
  padding='1rem'>
      <TestButton />
      <TestButton />
      <TestButton />
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
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()},  */}
        {'made with ❤ by '}
        <a href="https://github.com/joypauls">joypauls</a>
      </footer>
    </div>
  )
}

export default Layout
