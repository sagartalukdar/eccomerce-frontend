import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem } from '@mui/material';

const OrdersTable = () => {
  const dispatch=useDispatch();
  const {adminOrder} =useSelector(selector=>selector);

  useEffect(()=>{
   dispatch(getOrders());
  },[adminOrder.confirmed,adminOrder.placed,adminOrder.delivered,adminOrder.canceled,adminOrder.shipped])

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null;
    setAnchorEl(newAnchorElArray);
  };

  const handleConfirm=(orderId,index)=>{
   dispatch(confirmOrder(orderId));
   handleClose(index);
  }

  const handleShipped=(orderId,index)=>{
    dispatch(shipOrder(orderId));
    handleClose(index);
  }

  const handleDeliver=(orderId,index)=>{
    dispatch(deliverOrder(orderId));
    handleClose(index);
  }

  const handleDelete=(orderId,index)=>{
    dispatch(deleteOrder(orderId));
    handleClose(index);
  }

  return (
    <div>
            <Card className='mt-2 p-2'>
       <CardHeader title="all products"/>
        
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminOrder.orders?.map((item,index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <AvatarGroup sx={{justifyContent:"start"}}>
                  {item.orderItems?.map((orderItem)=><Avatar src={orderItem.product?.imageUrl}/>)}
                </AvatarGroup>
              </TableCell>       
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.totalDiscountedPrice}</TableCell>
              <TableCell align="left">
              <span  id={`basic-button-${item.id}`}
                  aria-controls={`basic-menu-${item.id}`}
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl[index])}
                  onClick={(e)=>handleClick(e,index)} className={` cursor-pointer text-white px-5 py-2 rounded-full ${item.orderStatus==="CONFIRMED"?"bg-blue-600":
                  item.orderStatus==="SHIPPED"?"bg-yellow-500":
                  item.orderStatus==="PLACED"?"bg-green-500":
                  item.orderStatus==="DELIVERED"?"bg-orange-600":
                  item.orderStatus==="PENDING"?"bg-gray-500":
                  item.orderStatus==="CANCELED"?"bg-red-400":"bg-red-600"
                }`}>
                      {item.orderStatus}
                </span>          
              <Menu
              id={`basic-menu-${item.id}`}
              anchorEl={anchorEl[index]}
              open={Boolean(anchorEl[index])}
              onClose={()=>handleClose(index)}
              MenuListProps={{
                'aria-labelledby': `basic-button-${item.id}`,
              }}
            >
              <MenuItem onClick={()=>handleConfirm(item.id,index)}>Confirmed</MenuItem>
              <MenuItem onClick={()=>handleShipped(item.id,index)}>Shipped</MenuItem>
              <MenuItem onClick={()=>handleDeliver(item.id,index)}>Delivered</MenuItem>
            </Menu>
              </TableCell>
      
              <TableCell align="left">
                <Button onClick={()=>handleDelete(item.id,index)} variant='outlined' >Delete</Button>
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

export default OrdersTable
