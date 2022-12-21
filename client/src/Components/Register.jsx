import {
  Box,
  Button,
  Center,
  Flex,
  Highlight,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Store/User/user.action";
import Login from "./Login";

const initialState = {
  email: "",
  password: "",
};

function Register() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState(initialState);
  const { loading, error, sign } = useSelector((store) => store.auth);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setForm({ ...form, [key]: value, name: "j" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = dispatch(userRegister(form))
      .then((e) =>
        toast({
          title: [e],
          position: "top-right",
          variant: "left-accent",
          duration: 9000,
          isClosable: true,
        })
      )
      .catch((err) => console.log(err));
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen} fontSize={"14px"} color="#2874f0">
        New to Flipkart? Create an account
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="60%">
          <ModalCloseButton />
          <ModalBody p={0}>
            <Flex dir="column">
              <Box p={5} bg="#2874f0" width={"40%"}>
                <Text mb={3} color={"white"} fontSize={"28px"} fontWeight={500}>
                  Looks like you're new here!
                </Text>
                <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                  Sign up with your mobile number to get started{" "}
                </Text>
                <Box mt={200}>
                  <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
                </Box>
              </Box>
              <Box p={5} width={"60%"}>
                <form onSubmit={handleSubmit}>
                  <Input
                    type={"email"}
                    onChange={handleChange}
                    name="email"
                    required={true}
                    mt={10}
                    placeholder="Enter Email"
                  />
                  <Input
                    type={"password"}
                    onChange={handleChange}
                    name="password"
                    required={true}
                    mt={5}
                    placeholder="Enter Password"
                  />
                  <Text mt={5} fontSize={"12px"} color="#878787">
                    <Highlight
                      query={["Terms of Use", "Privacy Policy"]}
                      styles={{ color: "blue" }}
                    >
                      By continuing, you agree to Flipkart's Terms of Use and
                      Privacy Policy
                    </Highlight>
                  </Text>
                  <Input
                    mt={10}
                    bgColor={"#fb641b"}
                    color="white"
                    type={"submit"}
                    value="Login"
                  />
                </form>
                <Center mt={5}>
                  <Text fontSize={"14px"} color={"#878787"}>
                    OR
                  </Text>
                </Center>
                <Center mt={5}>
                  <Button fontSize={"14px"} color={"#2874f0"}>
                    Request OTP
                  </Button>
                </Center>
                <Box mt={20}>
                  <Button onClick={onClose} fontSize={"14px"} color="#2874f0">
                    Existing User ?<Login />
                  </Button>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Register;
