"use client"
import { updateProduct, getProductById } from '@/app/lib/actions/editProduct';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProductForm = ({id}) => {
  const {replace} = useRouter()
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProd = async() => {
      const prod = await getProductById(id)
      if(!prod) {
        toast.error("Something went wrong")
      } else {
        setProduct(prod)
      }
    }
    getProd()
  }, [])

  async function clientAction(formData) {
    const result = await updateProduct(formData);
    console.log(Object.fromEntries(formData))
    if(result?.error) {
      toast.error(result?.error);
    } else {
      toast.success("Product updated successfully")
      setTimeout(() => {
        replace("/products")
      }, 1000)
    }

  }
  return (
    <div>
      {/* form container */}
      <form action={clientAction} className='flex flex-col items-start justify-between mt-5 gap-5'>

        {/* row */}
        <div className='flex flex-row gap-5 w-full justify-between'>
          {/* input name id value product id hidden */}
          <input type="text" name="id" value={id} className='hidden' />
          {/* title */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Title</label>
            <input type="text" name="title" placeholder={product?.title} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          {/* price */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Price</label>
            <input type="number" name="price" placeholder={product?.price} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
        </div>

        {/* row */}
        <div className='flex flex-row gap-5 w-full justify-between'>
          {/* sizes */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Sizes</label>
            <input type="text" name="sizes" placeholder={product?.sizes || 'separate them with comas'} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          {/* colors */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Colors</label>
            <input type="text" name="colors" placeholder={product?.colors || 'separate them with comas. They must be an hex code'} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
        </div>

        <div className='flex flex-row gap-5 w-full justify-between'>
          {/* sizes */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>SKU</label>
            <input type="text" name="SKU" placeholder={product?.SKU} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          {/* colors */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Category</label>
            <input type="text" name="category" placeholder={product?.category} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
          {/* stock */}
          <div className='flex flex-col gap-3 w-full'>
            <label className='text-sm font-semibold'>Stock</label>
            <input type="number" name="stock" placeholder={product?.stock} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
          </div>
        </div>
        <div className='flex flex-col w-full gap-3'>
          <label className='text-sm font-semibold'>Description</label>
          <textarea type="text" name="description" placeholder={product?.description} rows={4} className='border-[1px] border-[#9F9F9F] rounded-lg py-5 focus:outline-none px-5 text-xs' />
        </div>
        <button type="submit" className='w-max py-3 px-16 bg-[#B88E2F] text-white text-xs font-light rounded-bl-[50px]'>Submit</button>
      </form>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default EditProductForm;
