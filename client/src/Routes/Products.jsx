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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Store/products/products.action";
import { AiFillStar } from "react-icons/ai";
import Pagination from "../Components/Pagination";
import FilterData from "../Components/FilterData";
import SortData from "../Components/SortData";

function Products() {
  const dispatch = useDispatch();
  const { error, loading, data, filteredData } = useSelector(
    (store) => store.products
  );
  const [page, setPage] = useState(1);
  const perPage = 20;
  const totalPages = Math.ceil(filteredData.length / perPage);
  let end = page * perPage;
  let start = end - perPage;
  let PaginatedProducts = filteredData.slice(start, end);

  useEffect(() => {
    dispatch(getAllProducts(page));
    document.title =
      "Content Store Online - Buy Content Online at Best Price in India";
  }, [dispatch, page]);

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
      <Flex gap={10} ml={5}>
        <FilterData />
        <SortData />
      </Flex>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        p={2}
      >
        {PaginatedProducts?.map((e) => (
          <Link key={e._id} to={`/products/${e._id}`}>
            <GridItem className="singlep" p={10}>
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
      <Pagination
        current={page}
        total={totalPages}
        onChange={(e) => setPage(e)}
      />
    </Box>
  );
}

export default Products;
