/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";
import { Button, Flex, Text, Box } from "rebass";


const DonateButton = ({...props}) => {
    return (
        <Button 
          sx={{
            appearance: "none",
            display: "inline-block",
            textAlign: "center",
            fontSize: "small",
            border: "2px solid",
            borderRadius: "2rem",
            margin: "5px",
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            backgroundColor: "transparent",
            ':hover': {
                color: "#000000",
                backgroundColor: "#FFFFFF",
            }
          }}
        >
          { props.text }
        </Button>
    )
};

const Banner = ({...props}) => {
  return (
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
          width: "100%", 
       margin: "0 auto", 
       padding: "10px",
       border: "1px solid #000",
       textAlign: "center"
        }}
      >
        <Flex sx={{ justifyContent: "center", alignItems: "center", }}>
            <h3 style={{color: "#FFFFFF", margin: 0, paddingRight: "1rem", }}>
                { props.statement }
            </h3>
            { props.callToAction }
        </Flex>
      </div>
    </div>
  )
};

const BLMBanner = () => {
    const statement = "Black Lives Matter";
    const callToAction = <DonateButton text="Donate" />
    return ( <Banner statement={ statement} callToAction={ callToAction } /> );
};

export default BLMBanner;
