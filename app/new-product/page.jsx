import React from 'react';
import Layout from '../ui/layout/Layout';
import AddProductForm from '../ui/forms/AddProductForm';

const NewProductPage = () => {
  return (
    <div>
      <Layout>
        <div className='gap-5'>
          <h1 className='text-lg font-medium'>New Product</h1>
        </div>

        <AddProductForm />
      </Layout>
    </div>
  );
}

export default NewProductPage;
