import React from 'react'
import Layout from '../components/Layout'

const ProductsPage = () => {
  return (
    <Layout>
      <div className="w-full h-screen px-10">
        <h1 className="font-medium text-md text-[#202224]">Products</h1>
      {/* filters */}
        <div>
          <div className="py-4 px-5 bg-white w-max rounded-md flex flex-row items-center gap-5 shadow-2xl">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>
            </button>
            <select className="font-medium text-sm focus:outline-none">
              <option disabled selected>Filter By Status</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
            <select className="font-medium text-sm focus:outline-none">
              <option disabled selected>Sort By</option>
              <option>Status: Ascending</option>
              <option>Status: Descending</option>
              <option>Date: Ascending</option>
              <option>Date: Descending</option>
            </select>
            <button className="flex items-center gap-2 font-medium text-sm text-[#EA0234]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EA0234" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reset Filters
            </button>
          </div>
        </div>
        </div>
    </Layout>
  )
}

export default ProductsPage