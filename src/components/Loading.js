import { Center, CircularProgress } from "@chakra-ui/react";
import { colors } from "../core/theme";

export const Loading = ({ mt = 100, size = "100px" }) => {
  return (
    <>
      <Center mt={mt}>
        <CircularProgress
          size={size}
          isIndeterminate
          color={colors.mainColor}
        />
      </Center>
    </>
  );
};
