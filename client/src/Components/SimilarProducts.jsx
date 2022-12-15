import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function SimilarProducts({ category }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://flipkartbackend-production.up.railway.app/products/category?filter=${category}&limit=5`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <Box mt={50}>
      <Text fontSize={"22px"} fontWeight={500} paddingLeft="20px">
        Similar products
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
      >
        {data?.map((e) => (
          <Link _blank key={e._id} to={`/products/${e._id}`}>
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
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default SimilarProducts;
