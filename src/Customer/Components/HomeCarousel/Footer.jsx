import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const Footer = () => {
  return (
    <div>
      <Grid
       className='bg-black text-white text-center mt-10 w-full'
       container
       sx={{bgcolor:"black",color:"white" ,py:3}}
      >
        <Grid
        item xs={12} sm={6} md={3}
        > 
          <Typography className='pb-5' variant='h6'>Company</Typography>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>About</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
          </div>      

        </Grid>

        <Grid
        item xs={12} sm={6} md={3}
        > 
          <Typography className='pb-5' variant='h6'>Solutions</Typography>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Analitics</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Commnets</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>insights</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
          </div>      

        </Grid>

        <Grid
        item xs={12} sm={6} md={3}
        > 
          <Typography className='pb-5' variant='h6'>Documentation</Typography>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>API srtatuis</Button>
          </div>

        </Grid>

        <Grid
        item xs={12} sm={6} md={3}
        > 
          <Typography className='pb-5' variant='h6'>Legal</Typography>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Company Resulation</Button>
          </div>
          <div>
          <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
          </div>

        </Grid>

        <Grid className='pt-20' item xs={12}>
          <Typography variant='body2' component="p" align='center'>&copy; 2023 My Company .ASll right reserved</Typography>
          <Typography variant='body2' component="p" align='center'>Made with love by me</Typography>
          <Typography variant='body2' component="p" align='center'>
            Icons made by {' '}
            <Link href='http://www.freepik.com' color='inherit' underline="always">
              freepick
            </Link>{' '}
            from{' '}
            <Link href='http://www.freepik.com' color='inherit' underline="always">
              www.flaticons.com
            </Link>
          </Typography>


        </Grid>

      </Grid>
    </div>
  )
}

export default Footer
