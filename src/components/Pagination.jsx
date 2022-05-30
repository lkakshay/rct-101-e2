import React from "react";
import { Button ,ButtonGroup,Select} from "@chakra-ui/react";

const Pagination = ({data}) => {

 
  return (
    <ButtonGroup my={24}>
      <Button onClick={()=>data.setNumber(1)} data-cy="pagination-first-button">first page</Button>
      <Button onClick={()=>{
        if(data.number-1>0){
          data.setNumber(data.number-1)
        }
      }} data-cy="pagination-previous-button">previous page</Button>
      <Select value={data.limit} onChange={(e)=>data.setLimit(e.target.value)} data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button onClick={()=>{
        if(data.number+1<=data.last){
          data.setNumber(data.number+1)
        }
      }} data-cy="pagination-next-button">Next page</Button>
      <Button onClick={()=>data.setNumber(data.last)} data-cy="pagination-last-button">Last Page</Button>
    </ButtonGroup>
  );
};

export default Pagination;
