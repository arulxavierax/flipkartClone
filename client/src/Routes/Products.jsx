import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Store/products/products.action";
import { AiFillStar } from "react-icons/ai";

function Products() {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
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

  return (
    <Box paddingTop={85} paddingBottom={85}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        p={2}
      >
        {data.map((e) => (
          <Link to={`/products/${e._id}`}>
            <GridItem className="singlep" p={10} key={e._id}>
              <Box>
                <Image margin={"auto"} src={e.thumbnail} />
              </Box>
              <Box className="productList">
                <Text fontSize={"18px"} fontWeight={500} cursor="pointer">
                  {e.title}
                </Text>
              </Box>
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
              </Flex>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
