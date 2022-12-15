import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

function createButton(n) {
  return new Array(n).fill(0);
}

function Pagination({ total, current, onChange }) {
  let prev = (
    <Button
      size={["xs", "sm", "md"]}
      display={"block"}
      color={"#2874F0"}
      disabled={current == 1}
      onClick={() => onChange(current - 1)}
    >
      PREVIOUS
    </Button>
  );
  let next = (
    <Button
      size={["xs", "sm", "md"]}
      display={"block"}
      color={"#2874F0"}
      disabled={current == total}
      onClick={() => onChange(current + 1)}
    >
      NEXT
    </Button>
  );
  let pages = createButton(total).map((e, i) => (
    <Button
      size={["xs", "sm", "md"]}
      display={"block"}
      key={i}
      style={
        current == i + 1
          ? { backgroundColor: "#2874F0", color: "white", borderRadius: "50%" }
          : {}
      }
      onClick={() => onChange(i + 1)}
    >
      {i + 1}
    </Button>
  ));

  return (
    <Flex direction={["column", "row"]} justifyContent={"center"} gap={3}>
      <Center>
        <Text fontSize={"14px"}>
          Page {current} of {total}
        </Text>
      </Center>
      <Flex justifyContent={"center"}>
        {prev}
        {pages}
        {next}
      </Flex>
    </Flex>
  );
}

export default Pagination;
