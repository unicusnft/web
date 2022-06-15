import {Box, Text} from "@chakra-ui/react";
import React from "react";
import {colors} from "../core/theme";

const DateStyle = {
    backgroundColor: colors.mainColor,
    padding: '10px 12px 7px 12px',
    fontWeight: 'bold',
    borderRadius: '12px',
    height: '0%'
}

export const DateCard = ({datetime, size='lg'}) => {
    return (
        <Box textAlign="center" sx={DateStyle}>
            <Text fontSize="28px" padding="0px" lineHeight="70%">
                {datetime.getDate()}
            </Text>
            <Text paddingBottom="0px" fontSize='10px'>
                {datetime.toLocaleString('default', { month: 'short' }).toUpperCase()}
            </Text>
        </Box>
    )
}
