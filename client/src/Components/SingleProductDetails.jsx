import {
  Badge,
  Box,
  Center,
  Flex,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTagFill } from "react-icons/bs";

function SingleProductDetails({ data }) {
  return (
    <Center width={["100%", "100%", "50%", "50%"]} mr={3} ml={3}>
      <Box>
        <Box>
          <Text fontWeight={400} fontSize="18px">
            {data.title} {data.description}
          </Text>
        </Box>
        <Flex mt={3} className="productList" gap={2}>
          <Badge width={"8%"} color="white" bgColor="#388e3c" display={"flex"}>
            {data.rating}
            <AiFillStar style={{ fontSize: "12px", margin: "auto" }} />
          </Badge>
          <Text color={"#878787"} fontSize="14px">
            ({data.stock})
          </Text>
          <Image
            width={70}
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          />
        </Flex>
        <Text mt={3} color={"#388e3c"} fontWeight={500} fontSize={"14px"}>
          Special price
        </Text>
        <Flex className="productList" gap={2}>
          <Text fontSize={"25px"} fontWeight={500}>
            ₹{data.price}
          </Text>
          <Text as="del" fontSize={"14px"} fontWeight={500} color="#878787">
            ₹{Math.ceil((data.price * 100) / data.discountPercentage)}
          </Text>
          <Text fontSize={"13px"} fontWeight={500} color="#388e3c">
            {data.discountPercentage}% off
          </Text>
        </Flex>
        <Box>
          <Text mb={2} mt={4} fontSize={"16px"} fontWeight={500}>
            Available offers
          </Text>
          <Box display={"flex"}>
            <Box>
              <BsTagFill
                style={{ color: "#388e3c", margin: "auto", fontSize: "18px" }}
              />
            </Box>
            <Box>
              <Highlight
                query={["Bank Offer", "T&C"]}
                styles={{ px: "2", py: "1", fontWeight: "bold" }}
              >
                Bank Offer 10% instant discount on IDFC FIRST Credit Card EMI
                Trxns, up to ₹3000 on orders of ₹5,000 and above T&C
              </Highlight>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box>
              <BsTagFill style={{ color: "#388e3c", fontSize: "18px" }} />
            </Box>
            <Box>
              <Highlight
                query={["Bank Offer", "T&C"]}
                styles={{ px: "2", py: "1", fontWeight: "bold" }}
                fontSize={"14px"}
              >
                Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C
              </Highlight>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box>
              <BsTagFill style={{ color: "#388e3c", fontSize: "18px" }} />
            </Box>
            <Box>
              <Highlight
                query={["Special Price", "T&C"]}
                styles={{ px: "2", py: "1", fontWeight: "bold" }}
                fontSize={"14px"}
              >
                Special Price Get extra 3% off (price inclusive of
                cashback/coupon) T&C
              </Highlight>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box>
              <BsTagFill style={{ color: "#388e3c", fontSize: "18px" }} />
            </Box>
            <Box>
              <Highlight
                query={["Partner Offer"]}
                styles={{ px: "2", py: "1", fontWeight: "bold" }}
                fontSize={"14px"}
              >
                Partner Offer Get GST Invoice Available & Save up to 28% for
                Business purchases on Electronics
              </Highlight>
            </Box>
          </Box>
        </Box>
        <Flex mt={10} gap={10}>
          <Text padding={"4px"} fontSize="14px" as="b">
            {data.brand}
          </Text>
          <Box>
            <Highlight
              query={["Know More"]}
              styles={{ px: "2", py: "1", color: "blue", fontsize: "14px" }}
            >
              2 Year Warranty Know More
            </Highlight>
          </Box>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text fontSize={"14px"} fontWeight={500} color="#878787">
              Delivery
            </Text>
          </Box>
          <Flex gap={2}>
            <Text fontSize={"14px"} fontWeight={500}>
              Delivery within 1 Week |
            </Text>
            <Text as="del" fontSize={"14px"} color="#878787" fontWeight={500}>
              Free ₹40
            </Text>
          </Flex>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text fontSize={"14px"} fontWeight={500} color="#878787">
              Highlights
            </Text>
          </Box>
          <Box>
            <li fontSize={"14px"} fontWeight={500}>
              {data.brand}
            </li>
            <li fontSize={"14px"} fontWeight={500}>
              {data.title}
            </li>
            <li fontSize={"14px"} fontWeight={500}>
              {data.description}
            </li>
            <li fontSize={"14px"} fontWeight={500}>
              {data.category}
            </li>
          </Box>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text fontSize={"14px"} fontWeight={500} color="#878787">
              Easy Payments Options
            </Text>
          </Box>
          <Box>
            <li fontSize={"14px"} fontWeight={500}>
              EMI starting from ₹323/month
            </li>
            <li fontSize={"14px"} fontWeight={500}>
              Cash on Delivery
            </li>
            <li fontSize={"14px"} fontWeight={500}>
              Net banking & Credit/ Debit/ ATM card
            </li>
            <Text
              color={"#2874f0"}
              fontSize="14px"
              cursor={"pointer"}
              fontWeight={500}
            >
              View Details
            </Text>
          </Box>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text fontSize={"14px"} fontWeight={500} color="#878787">
              Seller
            </Text>
          </Box>
          <Box>
            <Text mb={2} fontSize={"14px"} fontWeight={500} color="#2874f0">
              SmartBigShop4
            </Text>
            <li
              mb={2}
              as="del"
              fontSize={"14px"}
              color="#878787"
              fontWeight={500}
            >
              7 Days Replacement Policy
            </li>
            <Text
              mt={2}
              color={"#2874f0"}
              fontSize="14px"
              cursor={"pointer"}
              fontWeight={500}
            >
              See other sellers
            </Text>
          </Box>
        </Flex>
        <Box mt={10} ml={3}>
          <Image src="https://rukminim1.flixcart.com/lockin/400/424/images/CCO__PP_2019-07-14.png?q=50" />
        </Box>
      </Box>
    </Center>
  );
}

export default SingleProductDetails;
