import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriAngleImage=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute",

})

const TrofyImage=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achivment = () => {
  return (
    <div>
      <Card sx={{position:"relative", bgcolor:'#24282E', color:'white'}}>
        <CardContent>
         <Typography variant='h6' sx={{letterSpacing:".25px"}}>
           shop with zosh
         </Typography>
         <Typography variant='body2'>
            congratulations
         </Typography>
         <Typography variant='h5' sx={{my:3.1}}>
            434.98k
         </Typography>
         <Button size='small' variant='contained'>view sales</Button>
         <TriAngleImage src=''></TriAngleImage>
         <TrofyImage src="https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_1280.png"/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Achivment
