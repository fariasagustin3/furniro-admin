import React from 'react';
import Layout from '../ui/layout/Layout';
import Content from '../ui/content/Content';
import ProductItem from '../ui/product/ProductItem';
import Pagination from '../ui/pagination/Pagination';
import Link from 'next/link';
import { connectMongoDB } from '../lib/dbConnection';
import Product from '../models/Product';

async function getProducts(page) {

  const ITEMS_PER_PAGE = 5;

  try {
    connectMongoDB();
    const count = await Product.find().count();
    const products = await Product.find()
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    if (!products) {
      throw new Error("There is not any product in database")
    } else {
      return { count, products };
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ProductsPage({ searchParams }) {
  const page = searchParams?.page || 1;
  const { count, products } = await getProducts(page);

  return (
    <Layout>
      <Content>
        <div className='flex flex-row items-center gap-5'>
          <h1 className='text-black font-semibold text-lg'>Products</h1>
          <Link href="/new-product">
            <button className=' px-7 py-3 flex items-center justify-center text-xs font-medium text-white bg-[#B88E2F] rounded-lg'>New</button>
          </Link>
        </div>
        <div className='flex flex-col mt-5 justify-between h-full'>
          <div className='flex flex-col gap-3'>
            {products?.map((product) => (
              <ProductItem
                key={product._id}
                title={product.title}
                stock={product.stock}
                price={product.price}
                img={product.img}
                id={product.id}
              />
            ))}
          </div>
          <Pagination count={count} />
        </div>
      </Content>
    </Layout>
  );
}
