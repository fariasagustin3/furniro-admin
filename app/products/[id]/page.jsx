import React from 'react';
import Layout from '@/app/ui/layout/Layout'
import 'react-toastify/dist/ReactToastify.css';
import Product from '@/app/models/Product'
import { connectMongoDB } from '@/app/lib/dbConnection';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

async function getProductById(id) {
  "use server"
  try {
    connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return product;
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(formData) {
  "use server"
  const { id, title, price, sizes, colors, SKU, category, stock, description } = Object.fromEntries(formData);
  console.log(id)
  try {
    connectMongoDB();

    const updateFields = {
      title,
      price,
      sizes,
      colors,
      SKU,
      category,
      stock,
      description,
    };

    // verifica si uno de los campos está vacío o es indefinido para eliminarlo, y así, evitar errores.
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])

    // procede a actualizar la data
    await Product.findByIdAndUpdate({_id: id}, updateFields);
  } catch (error) {
    console.log(error)
  }

  // revalidatePath sirve para mostrar los datos de una pagina en tiempo real, 
  // si no se llama a esta función, la página de "/products" mostraría datos viejos o "cacheados"
  // y daría la sensación de que hubo algún error al actualizar la data
  revalidatePath("/products");
  redirect("/products");
}

const EditProductPage = async ({ params }) => {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <div>
      <Layout>
        <div className='gap-5'>
          <h1 className='text-lg font-medium'>Editing: <span className='text-[#B88E2F] font-semibold'>{product?.title}</span></h1>
        </div>

        {/* form container */}
        <form action={updateProduct} className='flex flex-col items-start justify-between mt-5 gap-5'>

          {/* row */}
          <div className='flex flex-row gap-5 w-full justify-between'>
            {/* input name id value product id hidden */}
            <input type="text" name="id" value={product?.id} className='hidden' />
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
      </Layout>
    </div>
  );
}

export default EditProductPage;

