import React from 'react';
import Layout from '@/app/ui/layout/Layout'
import 'react-toastify/dist/ReactToastify.css';
import Product from '@/app/models/Product'
import { connectMongoDB } from '@/app/lib/dbConnection';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import EditProductForm from '@/app/ui/forms/EditProductForm';



const EditProductPage = async ({ params }) => {
  const { id } = params;
  return (
    <div>
      <Layout>
        <div className='gap-5'>
          <h1 className='text-lg font-medium'>Editing Product</h1>
        </div>

        <EditProductForm id={id} />
      </Layout>
    </div>
  );
}

export default EditProductPage;

