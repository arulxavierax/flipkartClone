import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";

function Footer() {
  return (
    <Box width={"100%"} color={"white"} bgColor={"#172337"} p={10}>
      <SimpleGrid columns={[1, 1, 2]}>
        <Flex gap={10}>
          <Box>
            <Text className="head">ABOUT</Text>
            <Text className="content">Contact Us</Text>
            <Text className="content">About Us</Text>
            <Text className="content">Careers</Text>
            <Text className="content">Flipkart Stories</Text>
            <Text className="content">Press</Text>
            <Text className="content">Flipkart</Text>
            <Text className="content">Wholesale</Text>
            <Text className="content">Corporate</Text>
            <Text className="content">Information</Text>
          </Box>
          <Box>
            <Text className="head">HELP</Text>
            <Text className="content">Payments</Text>
            <Text className="content">Shipping</Text>
            <Text className="content">Cancellation & returns</Text>
            <Text className="content">FAQ</Text>
            <Text className="content">Report</Text>
            <Text className="content">Infringement</Text>
          </Box>
          <Box>
            <Text className="head">POLICY</Text>
            <Text className="content">Return Policy</Text>
            <Text className="content">Term of Use</Text>
            <Text className="content">Security</Text>
            <Text className="content">Privacy</Text>
            <Text className="content">Sitemap</Text>
            <Text className="content">EPR Compliance</Text>
          </Box>
          <Box>
            <Text className="head">SOCIAL</Text>
            <Text className="content">Facebook</Text>
            <Text className="content">Twitter</Text>
            <Text className="content">YouTube</Text>
          </Box>
        </Flex>
        <Flex gap={20}>
          <Box>
            <Text className="head">Mail Us:</Text>
            <Text className="content">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Text>
          </Box>
          <Box>
            <Text className="head">Registered Office Address:</Text>
            <Text className="content">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <br />
    </Box>
  );
}

export default Footer;
