import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const [selected, setSelected] = useState("/")
  const pathname = useLocation().pathname

  useEffect(() => {
    setSelected(pathname)
  }, [pathname])

  return (
    <div className='flex flex-row w-screen h-full'>
      {/* sidebar */}
      <div className='bg-[#4880FF] w-full flex flex-col flex-1'>
        <div className='flex-1 fixed top-0'>
          <div className='mx-7 flex-1'>
            <h2 className='my-5 text-center text-2xl font-semibold text-white'>FURNIRO ADMIN</h2>
            <hr />
            <ul className='mt-10 flex flex-col gap-10'>
              <Link to="/">
                <li className={selected === '/' ? 'font-semibold text-black bg-white -mr-7 px-7 py-3 rounded-l-md transition-all duration-500' : 'font-semibold text-white'}>Dashboard</li>
              </Link>
              <Link to="/products">
                <li className={selected === '/products' ? 'font-semibold text-black bg-white -mr-7 px-7 py-3 rounded-l-md transition-all duration-500' : 'font-semibold text-white'}>Products</li>
              </Link>
              <Link to="/categories">
                <li className={selected === '/categories' ? 'font-semibold text-black bg-white -mr-7 px-7 py-3 rounded-l-md transition-all duration-500' : 'font-semibold text-white'}>Categories</li>
              </Link>
              <Link to="/users">
                <li className={selected === '/users' ? 'font-semibold text-black bg-white -mr-7 px-7 py-3 rounded-l-md transition-all duration-500' : 'font-semibold text-white'}>Users</li>
              </Link>
              <Link to="/orders">
                <li className={selected === '/orders' ? 'font-semibold text-black bg-white -mr-7 px-7 py-3 rounded-l-md transition-all duration-500' : 'font-semibold text-white'}>Orders</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-screen h-full flex flex-col flex-[4] bg-[#e6e6e6]'>
        {children}
      </div>
    </div>
  )
}

export default Layout