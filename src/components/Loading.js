import {Center, CircularProgress} from "@chakra-ui/react";
import {colors} from "../core/theme";

export const Loading = () => {
  return (
    <>
      <Center mt={100}>
        <CircularProgress size='100px' isIndeterminate color={colors.mainColor}/>
      </Center>
    </>
  )
}
