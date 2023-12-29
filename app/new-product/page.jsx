import React from 'react';
import Layout from '../ui/layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from '../models/Product';
import { connectMongoDB } from '../lib/dbConnection';

async function addProduct(formData) {
  "use server"
  const { title, price, sizes, colors, SKU, category, stock, description } = Object.fromEntries(formData);
  
  try {
    connectMongoDB();
    const newProduct = new Product({
      title,
      price,
      sizes,
      colors,
      SKU,
      category,
      stock,
      description,
    });

    await newProduct.save();
    console.log("New product saved")
  } catch (error) {
    console.log("Error at: ", error.message)
  }
}

const NewProductPage = () => {
  return (
    <div>
      <Layout>
        <div className='gap-5'>
          <h1 className='text-lg font-medium'>New Product</h1>
        </div>

        {/* form container */}
        <form action={addProduct} className='flex flex-col items-start justify-between mt-5 gap-5'>

          {/* row */}
          <div className='flex flex-row gap-5 w-full justify-between'>
            {/* title */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Title</label>
              <input type="text" name="title" placeholder='' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
            {/* price */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Price</label>
              <input type="number" name="price" placeholder='' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
          </div>

          {/* row */}
          <div className='flex flex-row gap-5 w-full justify-between'>
            {/* sizes */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Sizes</label>
              <input type="text" name="sizes" placeholder='separate them with comas' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
            {/* colors */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Colors</label>
              <input type="text" name="colors" placeholder='separate them with comas. They must be an hex code' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
          </div>

          <div className='flex flex-row gap-5 w-full justify-between'>
            {/* sizes */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>SKU</label>
              <input type="text" name="SKU" placeholder='' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
            {/* colors */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Category</label>
              <input type="text" name="category" placeholder='' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
            {/* stock */}
            <div className='flex flex-col gap-3 w-full'>
              <label className='text-sm font-semibold'>Stock</label>
              <input type="number" name="stock" placeholder='' className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
            </div>
          </div>
          <div className='flex flex-col w-full gap-3'>
            <label className='text-sm font-semibold'>Description</label>
            <textarea type="text" name="description" placeholder="" rows={4} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          <button type="submit" className='w-max py-3 px-16 bg-[#B88E2F] text-white text-xs font-light rounded-bl-[50px]'>Submit</button>
          <ToastContainer />
        </form>
      </Layout>
    </div>
  );
}

export default NewProductPage;
