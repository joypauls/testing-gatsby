/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import { Button } from 'rebass'


const TestButton = ({ variant = "primary", ...props }) =>
  <Button 
  {...props} 
  sx={{
    appearance: "none",
    display: "inline-block",
    textAlign: "center",
    border: 0,
    borderRadius: 4,
    variant: `buttons.${variant}`,
  }}
  >
    Primary
  </Button>

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
      <h2
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.5),
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
      </h2>
      <TestButton />
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
        © {new Date().getFullYear()}, 
        {'made with ❤ by '}
        <a href="https://github.com/joypauls">joypauls</a>
      </footer>
    </div>
  )
}

export default Layout
