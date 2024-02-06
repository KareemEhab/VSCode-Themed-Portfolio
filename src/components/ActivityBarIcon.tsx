import {
  Tooltip,
  Icon,
  useColorModeValue,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface Props {
  Label: string;
  Image: IconType;
  Navigate: string;
  Link: string;
  onSelectPage: (page: string) => void;
}

const ActivityBarIcon = ({
  Label,
  Image,
  Navigate,
  Link,
  onSelectPage,
}: Props) => {
  const tooltipBgColor = useColorModeValue("gray.200", "gray.700");
  const tooltipTextColor = useColorModeValue("gray.800", "gray.200");
  const iconSize = useBreakpointValue({ base: "20px", sm: "28px" });
  const navigate = useNavigate();
  const handleClick = (page: string, link: string) => {
    onSelectPage(page);
    navigate(link);
  };
  return (
    <Tooltip
      hasArrow
      label={Label}
      placement="right"
      bg={tooltipBgColor}
      color={tooltipTextColor}
    >
      <HStack
        width="100%"
        marginBottom={5}
        onClick={() => handleClick(Navigate, Link)}
      >
        <Icon
          as={Image}
          boxSize={iconSize}
          color="gray.400"
          _hover={{ color: "white" }}
        />
      </HStack>
    </Tooltip>
  );
};

export default ActivityBarIcon;
