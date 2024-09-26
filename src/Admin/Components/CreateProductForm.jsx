import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../State/Product/Action'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const initialSizes=[
  {name:"S",quantity:0},
  {name:"L",quantity:0},
  {name:"M",quantity:0},
]

const CreateProductForm = () => {
  const [productData,setProductData]=useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    price:"",
    discountPersent:"",
    sizes:initialSizes,
    quantity:"",
    topLavelCategory:"",
    secondLavelCategory:"",
    thirdLavelCategory:"",
    description:""

  })

  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProductData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }
  const handleSizeChange=(e,index)=>{
    let {name,value}=e.target;
    name==="quantity"?name="quantity":name=e.target.name;
    const size=[...productData.sizes];
    size[index][name]=value;
    setProductData((prevState)=>({
      ...prevState,sizes:size
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData);
  }
  return (
    <div className=' p-10'>
     <Typography variant='h3' sx={{textAlign:"center"}} className='py-10 text-center'>Add New Product</Typography> 
     <form className='min-h-screen createProductContainer' onSubmit={handleSubmit}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField
         fullWidth
         label="image url"
         name='imageUrl'
         value={productData.imageUrl}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
         fullWidth
         label="brand"
         name='brand'
         value={productData.brand}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
         fullWidth
         label="title"
         name='title'
         value={productData.title}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
         fullWidth
         label="color"
         name='color'
         value={productData.color}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
         fullWidth
         label="quantity"
         name='quantity'
         value={productData.quantity}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={4}>
        <TextField
         fullWidth
         label="price"
         name='price'
         value={productData.price}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={4}>
        <TextField
         fullWidth
         label="discountedPrice"
         name='discountedPrice'
         value={productData.discountedPrice}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={4}>
        <TextField
         fullWidth
         label="discountedPersent"
         name='discountPersent'
         value={productData.discountPersent}
         onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>top lavel category</InputLabel>
          <Select name='topLavelCategory' value={productData.topLavelCategory} onChange={handleChange}
          label="top lavel category"
          >
           <MenuItem value="men">Men</MenuItem>
           <MenuItem value="women">Women</MenuItem>
           <MenuItem value="kids">Kids</MenuItem>
          </Select>
        </FormControl>
       </Grid>
       <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>second lavel category</InputLabel>
          <Select name='secondLavelCategory' value={productData.secondLavelCategory} onChange={handleChange}
          label="second lavel category"
          >
           <MenuItem value="clothing">Clothing</MenuItem>
           <MenuItem value="accessories">Accessories</MenuItem>
           <MenuItem value="brands">Brands</MenuItem>
          </Select>
        </FormControl>
       </Grid>
       <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>third lavel category</InputLabel>
          <Select name='thirdLavelCategory' value={productData.thirdLavelCategory} onChange={handleChange}
          label="third lavel category"
          >
           <MenuItem value="mens_kurta">Mens_kurta</MenuItem>
           <MenuItem value="tops">Tops</MenuItem>
           <MenuItem value="t-shirts">t-shirts</MenuItem>
           <MenuItem value="saree">saree</MenuItem>
          </Select>
        </FormControl>
       </Grid>
       <Grid item xs={12}>
        <TextField
         fullWidth
         multiline
         rows={3}
         id='outlined-multiline-static'
         label="description"
         name='description'
         value={productData.description}
         onChange={handleChange}
        />
       </Grid>
       {productData.sizes.map((size,index)=>(
        <Grid container item spacing={3}>
         <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          label="Size name"
          name='name'
          value={size.name}
          onChange={(e)=>handleSizeChange(e,index)}
          />
         </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          type='number'
          label="quantity"
          name='quantity'
          value={size.quantity}
          onChange={(e)=>handleSizeChange(e,index)}
          />
         </Grid>
        </Grid>
       ))}
       <Grid item xs={12}>
        <Button type='submit' variant='contained' sx={{p:1.8}} className='py-20' size='large'>
         Add new Product
        </Button>
       </Grid>
      </Grid>
     </form>
    </div>
  )
}

export default CreateProductForm
