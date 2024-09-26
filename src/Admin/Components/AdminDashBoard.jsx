import { Grid } from '@mui/material'
import React from 'react'
import Achivment from './Achivment'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrdersTable from './OrdersTable'

const AdminDashBoard = () => {
  return (
    <div className='p-5'>
      <Grid container spacing={2}>
       <Grid item xs={12} md={4}>
        <Achivment/>
       </Grid>
       <Grid item xs={12} md={8}>
        <MonthlyOverview/>
       </Grid>
       <Grid item xs={12} md={6}>
        <ProductsTable/>
       </Grid>
       <Grid item xs={12} md={6}>
        <OrdersTable/>
       </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashBoard
