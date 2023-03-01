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
  Link,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart, updateCart } from "../Store/cart/cart.action";
import { useNavigate } from "react-router-dom";

function Cart() {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((store) => store.cart);
  console.log(data);
  useEffect(() => {
    dispatch(getCart());
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

  const handleQuantity = (id, q) => {
    dispatch(updateCart(id, q));
  };
  let total = data.reduce(
    (acc, el) =>
      acc +
      Math.ceil((el.product.price * 100) / el.product.discountPercentage) *
        el.quantity,
    0
  );
  let discount = data.reduce(
    (acc, el) =>
      acc +
      (Math.ceil((el.product.price * 100) / el.product.discountPercentage) -
        el.product.price) *
        el.quantity,
    0
  );
  console.log(discount);
  let sum = data.reduce((acc, el) => acc + el.product.price * el.quantity, 0);

  const handleDelete = (id) => {
    let data = dispatch(deleteCart(id))
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

  const handleOrder = () => {
    toast({
      title: "Order has been Placed",
      description: "Item will be reached at your door bell.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box paddingBottom={20}>
      <Box justifyContent={"space-evenly"} display={"flex"} paddingTop={75}>
        <Box width={"60%"}>
          <Box>
            <Text padding={"13px 24px"} color={"#878787"} fontSize={"16px"}>
              PRODUCTS
            </Text>
          </Box>
          {data.length == 0 ? (
            <Center h="300px">
              <Image src="https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize1000x900" />
            </Center>
          ) : (
            data?.map((e) => (
              <Box paddingTop={15} key={e.product._id} display={"flex"}>
                <Box width={"40%"}>
                  {" "}
                  <Image
                    margin={"auto"}
                    width={"60%"}
                    src={e.product.thumbnail}
                  />
                </Box>
                <Box width={"50%"} className="productList">
                  <Text fontSize={"18px"} fontWeight={500} cursor="pointer">
                    {e.product.title}
                  </Text>
                  <Text fontSize={"12px"} cursor="pointer">
                    {e.product.brand}
                  </Text>
                  <Flex className="productList" gap={2}>
                    <Badge
                      width={"20%"}
                      color="white"
                      bgColor="#388e3c"
                      display={"flex"}
                    >
                      {e.product.rating}
                      <AiFillStar
                        style={{ fontSize: "12px", margin: "auto" }}
                      />
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
                      {e.product.discountPercentage}% off
                    </Text>
                  </Flex>
                  <Box className="productList">
                    <Text fontSize={"12px"} fontWeight={400}>
                      Free delivery
                    </Text>
                  </Box>
                  <Box display={"flex"}>
                    <Button
                      fontSize={"4xl"}
                      disabled={e.quantity == 1}
                      onClick={() =>
                        handleQuantity(e.product._id, e.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button fontSize={"2xl"}>{e.quantity}</Button>
                    <Button
                      onClick={() =>
                        handleQuantity(e.product._id, e.quantity + 1)
                      }
                      fontSize={"3xl"}
                    >
                      +
                    </Button>
                    <Button onClick={() => handleDelete(e.product._id)}>
                      <DeleteIcon fontSize={"xl"} color="red" />
                    </Button>{" "}
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>
        <Box width={"30%"}>
          <Box>
            <Text padding={"13px 24px"} color={"#878787"} fontSize={"16px"}>
              PRICE DETAILS
            </Text>
          </Box>
          <Box
            p={3}
            width={"70%"}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Text fontSize={"xl"} color={"#212121"}>
              Price ({data.length} item)
            </Text>
            <Text fontSize={"xl"} color={"#212121"}>
              ₹{total}
            </Text>
          </Box>
          <Box
            p={3}
            width={"70%"}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Text fontSize={"xl"} color={"#212121"}>
              Discount
            </Text>
            <Text fontSize={"xl"} color={"#388e3c"}>
              - ₹{discount}
            </Text>
          </Box>
          <Box
            p={3}
            width={"70%"}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Text fontSize={"xl"} color={"#212121"}>
              Delivery Charges
            </Text>
            <Text fontSize={"xl"} color={"#388e3c"}>
              Free
            </Text>
          </Box>
          <Box
            p={3}
            width={"70%"}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Text fontWeight={"bold"} color={"#212121"} fontSize="18px">
              Total Amount
            </Text>
            <Text fontWeight={"bold"} color={"#212121"} fontSize="18px">
              ₹{sum}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box width={"80%"} margin="auto" marginTop={5} display={"flex"}>
        <Text className="cartButton" onClick={handleOrder}>
          PLACE ORDER
        </Text>
      </Box>
    </Box>
  );
}

export default Cart;
