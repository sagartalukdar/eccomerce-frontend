import { CurrencyBangladeshiIcon } from '@heroicons/react/16/solid'
import { AccountBoxOutlined, AssessmentOutlined, MoreVert, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const salesData=[
    {
        stats:'234k',
        title:'Sales',
        color:'blue',
        icon: <TrendingUp sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'89k',
        title:'Customers',
        color:'green',
        icon: <AccountBoxOutlined sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'9.43k',
        title:'Products',
        color:'red',
        icon: <AssessmentOutlined sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'75K',
        title:'Revenue',
        color:'pink',
        icon: <CurrencyBangladeshiIcon sx={{fontSize:'1.75rem'}} />
    },
]
const renderStats=()=>{
  return salesData.map((item,index)=>(
   <Grid item xs={12} sm={3} key={index}>
    <Box sx={{display:'flex',alignItems:'center'}}>
      <Avatar variant='rounded' sx={{mr:3, width:44, height:44, color:'white', boxShadow:3, backgroundColor:`${item.color}` }}>
       {item.icon} 
      </Avatar>
      <Box sx={{display:'flex', flexDirection:'column'}}>
       <Typography variant='caption'>{item.title}</Typography>
       <Typography variant='h6'>{item.stats}</Typography>
      </Box>
    </Box>
   </Grid>
  ))
}

const MonthlyOverview = () => {
    
  return (
    <Card sx={{position:"relative", bgcolor:'#24282E', color:'white'}}>
        <CardHeader title='Monthly Overview'
        action={
            <IconButton size='small'><MoreVert/></IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component={"span"} sx={{fontWeight:600}}>
                    Total Growth 58%
                </Box>
                this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{mb:2.5, lineHeight:'2rem !important', letterSpacing:'.15px !important'}
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
         <Grid container spacing={5.6}>
          {renderStats()}
         </Grid>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverview
