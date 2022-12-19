import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
  Icon,
  IconButton,
  useColorMode,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  Search2Icon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [display, setDisplay] = useState("none");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position={"fixed"} w={"100%"} zIndex={1}>
      <Flex justifyContent={"space-around"} bgColor={"#2874f0"}>
        <Center>
          <Link to="/">
            <Image
              height={["5", "12", "14"]}
              width={"75"}
              src="data:image/jpeg;base64,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"
            />
          </Link>
        </Center>
        <Center>
          <InputGroup>
            <Input
              variant="flushed"
              fontSize={["10px", "12px", "14px"]}
              width={["150px", "250px", "450px", "450px"]}
              placeholder="Search for products, brands and more"
              size={["sm", "md", "lg"]}
              bgColor={colorMode == "light" ? "white" : "black"}
            />
            <InputRightElement size="sm" children={<Search2Icon />} />
          </InputGroup>
        </Center>
        <Flex
          display={["none", "none", "flex"]}
          width={"30%"}
          justifyContent={"space-between"}
        >
          <Center>
            <Button borderRadius={"0px"}>Login</Button>
          </Center>
          <Center>
            <Text fontSize="16px" as="b" color={"white"}>
              <Link to="#">Become a Seller</Link>
            </Text>
          </Center>
          <Center>
            <Menu>
              <MenuButton>
                <Text fontSize="16px" as="b" color={"white"}>
                  More {<ChevronDownIcon />}
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Text onClick={toggleColorMode}>
                    Dark mode {colorMode === "light" ? "Dark" : "Light"}
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
          <Center>
            <Text fontSize="16px" as="b" color={"white"}>
              <Flex gap={2}>
                <BsCartFill fontSize={"20px"} />
                <Link to="#"> Cart </Link>
              </Flex>
            </Text>
          </Center>
        </Flex>
        <Center p={2} display={["flex", "flex", "none"]}>
          <IconButton
            aria-label="open-menu"
            size={"md"}
            icon={<HamburgerIcon />}
            onClick={() => setDisplay("flex")}
          />
        </Center>
      </Flex>

      <Flex
        width={"100vw"}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos={"fixed"}
        top="0"
        left={"0"}
        flexDir={"column"}
        overflow={"auto"}
        display={display}
      >
        <Flex justifyContent={"flex-end"}>
          <IconButton
            mt={2}
            mr={2}
            aria-label="close menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir={"column"} align="center">
          <Text m={2} fontSize="16px" as="b">
            <Link to="#">Login</Link>
          </Text>

          <Text m={2} fontSize="16px" as="b">
            <Link to="#">Become a Seller</Link>
          </Text>

          <Menu>
            <MenuButton>
              <Text m={2} fontSize="16px" as="b">
                More {<ChevronDownIcon />}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Text onClick={toggleColorMode}>
                  Dark mode {colorMode === "light" ? "Dark" : "Light"}
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>

          <Text m={2} fontSize="16px" as="b">
            <Flex>
              <BsCartFill fontSize={"20px"} />
              <Link to="#"> Cart </Link>
            </Flex>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
