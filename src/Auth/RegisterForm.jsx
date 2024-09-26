import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getUserProfileAction, registerAction } from '../State/Auth/Action';

const RegisterForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(selector=>selector);

  useEffect(()=>{
    if(jwt){
      dispatch(getUserProfileAction(jwt));
    }
  },[jwt,auth.jwt])


    const handleSubmit=(event)=>{
        event.preventDefault();
        const data=new FormData(event.currentTarget);
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password"),
        }
        dispatch(registerAction(userData));
        console.log(userData);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={6} >
          <TextField
           required
           id='firstName'
           name='firstName'
           label='First Name'
           fullWidth
           autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
           required
           id='lastName'
           name='lastName'
           label='Last Name'
           fullWidth
           autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
           required
           type='email'
           id='email'
           name='email'
           label='Email'
           fullWidth
           autoComplete='email'
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
           required
           type='password'
           id='password'
           name='password'
           label='Password'
           fullWidth
           autoComplete='password'
          />
        </Grid>
        <Grid item xs={12} >
          <Button className='bg-[#9155FD] w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem, 0"}}>
            Register
          </Button>
          </Grid>
       </Grid>
      </form>
      <div className='py-3 flex items-center justify-center'>
        <p>you have already account ?<Button onClick={()=>navigate("/login")} className='ml-5' size='small'>login</Button> </p>
      </div>
    </div>
  )
}

export default RegisterForm
