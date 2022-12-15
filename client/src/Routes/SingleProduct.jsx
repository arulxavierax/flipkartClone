import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import "../App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Store/singleProduct/singleProduct.action";
import { BsCartFill, BsLightningFill } from "react-icons/bs";
import SingleProductDetails from "../Components/SingleProductDetails";
import SimilarProducts from "../Components/SimilarProducts";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data, images } = useSelector(
    (store) => store.singleProduct
  );
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);
  document.title = `${data.title}`;

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
    <Box>
      <Flex
        direction={["column", "column", "row", "row"]}
        paddingTop={75}
        gap={5}
      >
        <Flex width={["100%", "100%", "50%"]} padding={10} gap={5}>
          <SimpleGrid columns={1}>
            <Box>
              {images.map((e, i) => (
                <Image
                  marginBottom={2}
                  src={e}
                  onClick={() => setMainImage(i)}
                  boxSize="50px"
                  border={mainImage === i ? "2px solid blue" : "none"}
                />
              ))}
            </Box>
          </SimpleGrid>
          <Box>
            <Image width={"100%"} src={images[mainImage]} />
            <Box width={"80%"} margin="auto" marginTop={5} display={"flex"}>
              <Text className="cartButton">
                <BsCartFill fontSize={"20px"} /> ADD TO CART
              </Text>
              <Text className="buyButton">
                <BsLightningFill fontSize={"20px"} /> BUY NOW
              </Text>
            </Box>
          </Box>
        </Flex>
        <SingleProductDetails data={data} />
      </Flex>
      <SimilarProducts category={data.category} />
    </Box>
  );
}

export default SingleProduct;
