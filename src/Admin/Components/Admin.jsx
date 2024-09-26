
import { AccountCircleOutlined, Dashboard, HomeMiniOutlined, ImageOutlined } from '@mui/icons-material';
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router';
import ProductsTable from './ProductsTable';
import CreateProductForm from './CreateProductForm';
import CustomersTable from './CustomersTable';
import OrdersTable from './OrdersTable';
import AdminDashBoard from './AdminDashBoard';

const manu=[
    {name:"Dashboard",path:"/admin",icon:<ImageOutlined/>},
    {name:"Products",path:"/admin/products",icon:<ImageOutlined/>},
    {name:"Customers",path:"/admin/customers",icon:<ImageOutlined/>},
    {name:"Orders",path:"/admin/orders",icon:<ImageOutlined/>},
    {name:"AddProducts",path:"/admin/products/create",icon:<ImageOutlined/>},
]

const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);

    const navigate=useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}
        >
          {/* {isLargeScreen && <Toolbar/>} */}
          <List>
            {manu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)} >
                <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      {item.name}
                    </ListItemText>
                </ListItemButton>
            </ListItem>)}
          </List>

          <List>
            <ListItem disablePadding >
                <ListItemButton>
                    <ListItemIcon>
                       <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText>account</ListItemText>
                </ListItemButton>
            </ListItem>
          </List>

        </Box>
    )

  return (
    <div>
      <div className='flex relative' >
        <CssBaseline/>
        <div
        className='w-[15%] border border-r-gray-300 h-screen sticky top-0 left-0'
        >
         {drawer}
        </div>

        <div className='w-[85%] h-full'>
          <Routes>
            <Route path='/' element={<AdminDashBoard/>}/>
            <Route path='/products' element={<ProductsTable/>}/>
            <Route path='/products/create' element={<CreateProductForm/>}/>
            <Route path='/customers' element={<CustomersTable/>}/>
            <Route path='/Orders' element={<OrdersTable/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin
