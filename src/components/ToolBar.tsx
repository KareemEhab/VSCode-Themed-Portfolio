import { HStack, Text } from "@chakra-ui/react";
import ToolBarLeft from "./ToolBarLeft";
import ToolBarRight from "./ToolBarRight";

const ToolBar = () => {
  return (
    <HStack justifyContent="space-between">
      <ToolBarLeft />
      <Text fontSize={{ base: "10px", md: "13px", lg: "13px", xl: "15px" }}>
        Kareem Hamouda - Full Stack Developer
      </Text>
      <ToolBarRight />
    </HStack>
  );
};

export default ToolBar;
