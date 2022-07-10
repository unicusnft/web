import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {UserMenu} from "./UserMenu";

export const Toolbar = ({title}) => {
  return (
    <>
      <Box bg="#1F1F1F" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            style={{
              fontFamily: "'Goldman', cursive",
              fontSize: "36px",
              color: "#8886FC",
            }}
          >
            <Link to="/">ünicus</Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <Button
                leftIcon={<FaTicketAlt />}
                colorScheme="main"
                size="sm"
                px={4}
              >
                <Link to="/my-tickets">Mis Tickets</Link>
              </Button>
                <UserMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
