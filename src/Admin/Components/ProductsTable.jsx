import React, { useEffect } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { Avatar, Button, Card, CardHeader } from '@mui/material';

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const ProductsTable = () => {
  const dispatch=useDispatch();
  const {products}=useSelector(selector=>selector);
  console.log("admin products",products);
  useEffect(()=>{
    const data={
      category:"",
      colors: [],
      sizes: [],
      minPrice:0,
      maxPrice:1000000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber:1,
      pageSize:10,
      stock:""
    }
    dispatch(findProducts(data));
  },[products.deletedProduct])
  

  const handleDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }
  return (
    <div className='p-5'>
      <Card className='mt-2'>
       <CardHeader title="all products"/>
        
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell >Title</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">category</TableCell>
            <TableCell align="left">quantity</TableCell>
            <TableCell align="left">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.products?.content?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <Avatar src={item.imageUrl}>

                </Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>         
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button variant='outlined' onClick={()=>handleDelete(item.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </div>
  )
}

export default ProductsTable
