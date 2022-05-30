import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import { Flex,Grid } from "@chakra-ui/react";

const Products = () => {
  const [products,setproducts]=useState([])
  const [limit,setLimit]=useState(3)
  const [number,setNumber]=useState(1)
  const [last,setLast]=useState(10)
  const [c,setc]=useState(1)




  const addproduct=(e)=>{

   try {
    axios.post("http://localhost:8080/products",e).then(()=>{
      setc(c+1)
     })
  
     
   } catch (error) {
     console.log(error)
   }


  }

  useEffect(()=>{
   try {
    axios.get(`http://localhost:8080/products`)
    .then((res)=>{
     let a=res.data.length/limit
     setLast(Math.ceil(a))
    })

    axios.get(`http://localhost:8080/products?_page=${number}&_limit=${limit}`)
    .then((res)=>{
     setproducts(res.data)
    })
     
   } catch (error) {
     console.log(error)
   }
    },[limit,number,c])


  


  return (
    <Flex flexDirection={"column"}>
      <AddProduct addproduct={addproduct}/>
      <Grid templateColumns='repeat(3,1fr)' gap={24}>
        {
          products?.map((e)=>{
            return(
                 
            <Product key={e.id} data={e} />
            )
          }     )
        }
        </Grid>
      <Pagination data={{limit,setLimit,number,setNumber,last}}/>
    </Flex>
  );
};

export default Products;
