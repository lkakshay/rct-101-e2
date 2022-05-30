import React, { useState } from "react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = ({addproduct}) => {
 

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData]=useState({
    imageSrc: "https://picsum.photos/seed/picsum4/422/262",
    
  })
 
  const handlesubmitt=()=>{
    addproduct(data)
    onClose()
  }

  return (
    <>
      <Button size="lg" my={24} data-cy="add-product-button" onClick={onOpen} >Add Product</Button>
      <Modal
      isCentered={true}
      size={"5xl"} 
      isOpen={isOpen}
      onClose={onClose}>
        <ModalBody  pb={6}>
          <Input onChange={(e)=>setData({...data,title:e.target.value})} data-cy="add-product-title" />
          <Select onChange={(e)=>setData({...data,category:e.target.value})} data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup onChange={(value)=>setData({...data,gender:value})}  data-cy="add-product-gender">
            <Radio value={"male"} data-cy="add-product-gender-male">male</Radio>
            <Radio value={"female"} data-cy="add-product-gender-female">female</Radio>
            <Radio value={"unisex"} data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input  onChange={(e)=>setData({...data,price:e.target.value})} data-cy="add-product-price" />
          <Button onClick={handlesubmitt} data-cy="add-product-submit-button">add</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
