import { DeleteIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteFavourite,
  getFavourite,
} from "../Store/favourite/favourite.action";

function Favourite() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.favourite);
  useEffect(() => {
    dispatch(getFavourite());
  }, [dispatch]);

  if (loading) {
    return (
      <Center h="500px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  const handleDelete = (id) => {
    let data = dispatch(deleteFavourite(id))
      .then((res) =>
        toast({
          title: [res],
          position: "top-right",
          variant: "left-accent",
          duration: 9000,
          isClosable: true,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <Box paddingTop={75}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        p={2}
      >
        {data.length == 0 ? (
          <Center h='300px'>
            <Image src="https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize1000x900" />
          </Center>
        ) : (
          data?.map((e) => (
            <GridItem key={e._id} className="singlep" p={10}>
              <Box>
                <Image margin={"auto"} src={e.thumbnail} />
              </Box>
              <Link to={`/products/${e._id}`}>
                <Box className="productList">
                  <Text fontSize={"18px"} fontWeight={500} cursor="pointer">
                    {e.title}
                  </Text>
                </Box>
              </Link>

              <Flex className="productList" gap={2}>
                <Badge
                  width={"20%"}
                  color="white"
                  bgColor="#388e3c"
                  display={"flex"}
                >
                  {e.rating}
                  <AiFillStar style={{ fontSize: "12px", margin: "auto" }} />
                </Badge>
                <Text color={"#878787"} fontSize="14px">
                  ({e.stock})
                </Text>
                <Image
                  width={70}
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                />
              </Flex>
              <Flex className="productList" gap={2}>
                <Text fontSize={"25px"} fontWeight={500}>
                  ₹{e.price}
                </Text>
                <Text
                  as="del"
                  fontSize={"14px"}
                  fontWeight={500}
                  color="#878787"
                >
                  ₹{Math.ceil((e.price * 100) / e.discountPercentage)}
                </Text>
                <Text fontSize={"13px"} fontWeight={500} color="#388e3c">
                  {e.discountPercentage}% off
                </Text>
              </Flex>
              <Box className="productList">
                <Text fontSize={"12px"} fontWeight={400}>
                  Free delivery
                </Text>
              </Box>
              <Flex gap={1} className="productList">
                <Text fontSize={"12px"}>Upto</Text>
                <Text fontWeight="bold" fontSize={"12px"}>
                  ₹400
                </Text>
                <Text fontSize={"12px"}>Off on Exchange</Text>
                <Box>
                  {" "}
                  <Button onClick={() => handleDelete(e._id)}>
                    <DeleteIcon fontSize={"xl"} color="red" />
                  </Button>{" "}
                </Box>
              </Flex>
            </GridItem>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default Favourite;
