import React from "react";
import { Stack } from "@chakra-ui/react";
import { colors } from "../../core/theme";
import { Filters } from "./Filters";

export const HomeScreen = () => {
  return (
    <Stack backgroundColor={colors.background}>
      <Filters />
    </Stack>
  );
};
