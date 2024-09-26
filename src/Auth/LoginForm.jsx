import React, { useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction, loginAction } from '../State/Auth/Action';

const LoginForm = () => {
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
        email:data.get("email"),
        password:data.get("password"),
    }
    console.log(userData);
    dispatch(loginAction(userData));
}
const navigate=useNavigate();
return (
<div>
  <form onSubmit={handleSubmit}>
   <Grid container spacing={3}>
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
        Login
      </Button>
      </Grid>
   </Grid>
  </form>
  <div className='py-3 flex items-center justify-center'>
    <p>you don't have account ?<Button onClick={()=>navigate("/register")} className='ml-5' size='small'>register</Button> </p>
  </div>
</div>
)
}

export default LoginForm
