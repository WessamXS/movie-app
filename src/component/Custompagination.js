import { Pagination } from '@mui/material';
import React from 'react'

const Custompagination = ({setpage,numOfPages=10 }) => {
    const handelclick=(e)=>{
        setpage(e);
        window.scroll(0,0)
    }
  return (
    <div>
     <Pagination count={numOfPages} onChange={(e)=>handelclick(e.target.textContent)} />
         </div>
  )
}

export default Custompagination
