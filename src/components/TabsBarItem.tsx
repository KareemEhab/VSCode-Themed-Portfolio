import { HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  Icon: string;
  Label: string;
  boxSize: string;
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  Link: string;
}

const TabsBarItem = ({
  Icon,
  Label,
  boxSize,
  selectedTab,
  onSelectTab,
  Link,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onSelectTab(Label);
    navigate(Link);
  };
  return (
    <HStack
      height={6}
      minWidth="130px"
      justifyContent="center"
      padding={4}
      bg={Label === selectedTab ? "gray.800" : "gray.900"}
      borderTopColor={Label === selectedTab ? "gray.400" : "gray.900"}
      borderRightColor={"gray.800"}
      borderLeftColor={"gray.800"}
      borderTopWidth={"1px"}
      borderLeftWidth={"1px"}
      borderRightWidth={"1px"}
      cursor="pointer"
      userSelect="none"
      onClick={handleClick}
    >
      <HStack gap={1} alignItems="center">
        <Image boxSize={boxSize} src={Icon} />
        <Text
          fontSize="14px"
          width="100%"
          color="gray.200"
          _hover={{ color: "white" }}
        >
          {Label}
        </Text>
      </HStack>
    </HStack>
  );
};

export default TabsBarItem;
