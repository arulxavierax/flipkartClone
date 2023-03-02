import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../Store/orders/orders.action";

function Orders() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

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

  return (
    <Box paddingTop={75}>
      <Box>
        <Text padding={"13px 24px"} color={"#878787"} fontSize={"16px"}>
          PURCHASED PRODUCTS
        </Text>
      </Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        p={2}
      >
        {data.length == 0 ? (
          <Center h="300px" width={"80%"}>
            <Image
              margin={"auto"}
              src="https://www.shutterstock.com/image-vector/no-stop-remove-shopping-cart-260nw-1360762337.jpg"
            />
          </Center>
        ) : (
          data?.map((e) => (
            <GridItem key={e.product._id} className="singlep" p={5}>
              <Box>
                <Image margin={"auto"} src={e.product.thumbnail} />
              </Box>
              <Link to={`/products/${e.product._id}`}>
                <Box className="productList">
                  <Text fontSize={"18px"} fontWeight={500} cursor="pointer">
                    {e.product.title}
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
                  {e.product.rating}
                  <AiFillStar style={{ fontSize: "12px", margin: "auto" }} />
                </Badge>
                <Text color={"#878787"} fontSize="14px">
                  ({e.product.stock})
                </Text>
                <Image
                  width={70}
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                />
              </Flex>
              <Flex className="productList" gap={2}>
                <Text fontSize={"25px"} fontWeight={500}>
                  ₹{e.product.price}
                </Text>
                <Text
                  as="del"
                  fontSize={"14px"}
                  fontWeight={500}
                  color="#878787"
                >
                  ₹
                  {Math.ceil(
                    (e.product.price * 100) / e.product.discountPercentage
                  )}
                </Text>
                <Text fontSize={"13px"} fontWeight={500} color="#388e3c">
                  {e.discountPercentage}% off
                </Text>
              </Flex>
              <Box className="productList">
                <Text fontSize={"xl"} fontWeight={400}>
                  Quantity - {e.quantity}
                </Text>
                <Text fontSize={"xl"} fontWeight={400}>
                  Total Amount - {e.quantity * e.product.price}
                </Text>
              </Box>
              <Box className="productList">
                <Text fontWeight="bold" fontSize={"12px"}>
                  Purchase Date - {e.date}
                </Text>
              </Box>
            </GridItem>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default Orders;
