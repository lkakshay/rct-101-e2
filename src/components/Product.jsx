import React from "react";
import { Text,Image,Box ,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react";

const Product = ({data}) => {
 
  return (
    <Stack  data-cy="product">
      <Image src={data.imageSrc} data-cy="product-image" />
      <Text data-cy="product-category">{data.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{data.title}</Heading>
      <Box data-cy="product-price">{data.price}</Box>
    </Stack>
  );
};

export default Product;
