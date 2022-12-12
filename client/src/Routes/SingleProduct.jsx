import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Store/singleProduct/singleProduct.action";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.singleProduct);

  console.log(data);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);
  return <Box paddingTop={75}>SingleProduct</Box>;
}

export default SingleProduct;
