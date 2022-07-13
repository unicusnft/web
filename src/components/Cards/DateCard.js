import {Box, Text} from "@chakra-ui/react";
import React from "react";
import {colors} from "../../core/theme";

const DateStyle = {
  backgroundColor: colors.mainColor,
  fontWeight: "bold",
  borderRadius: "10px",
  height: "0%",
};

export const DateCard = ({datetime, size = "md"}) => {
  return (
    <Box
      textAlign="center"
      sx={DateStyle}
      padding={size === "md" ? "10px 12px 7px 12px" : "14px 16px 11px 16px"}
    >
      <Text fontSize="28px" padding="0px" lineHeight="70%">
        {datetime?.getDate()?.toString()?.padStart(2, '0')}
      </Text>
      <Text paddingBottom="0px" fontSize="10px">
        {datetime?.toLocaleString("default", {month: "short"})?.toUpperCase()}
      </Text>
    </Box>
  );
};
