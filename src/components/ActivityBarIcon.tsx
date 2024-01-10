import { Tooltip, Icon, useColorModeValue, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  Label: string;
  Image: IconType;
}

const ActivityBarIcon = ({ Label, Image }: Props) => {
  const tooltipBgColor = useColorModeValue("gray.200", "gray.700");
  const tooltipTextColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Tooltip
      hasArrow
      label={Label}
      placement="right"
      bg={tooltipBgColor}
      color={tooltipTextColor}
    >
      <HStack width="100%" marginBottom={5}>
        <Icon
          as={Image}
          boxSize="28px"
          color="gray.400"
          _hover={{ color: "white" }}
        />
      </HStack>
    </Tooltip>
  );
};

export default ActivityBarIcon;
