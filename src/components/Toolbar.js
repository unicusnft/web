import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";
import { colors } from "../core/theme";
import { Link } from "react-router-dom";

export const Toolbar = () => {
  return (
    <>
      <Box bg="#1F1F1F" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box style={{ fontFamily: "'Goldman', cursive", fontSize: "36px" }}>
            <Link to="/">ünicus</Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                leftIcon={<FaTicketAlt />}
                colorScheme="main"
                size="sm"
                px={4}
              >
                <Link to="/my-tickets">My Tickets</Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
