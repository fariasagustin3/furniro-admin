import React, { useState } from 'react'
import Layout from '../../components/Layout'

const CreateOrderPage = () => {
  const [input, setInput] = useState({
    products: "",
    total: null,
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    town: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInformation: "",
    status: false,
  })

  const handleCheckboxChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked
    })
  }

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      products: input.products.split(","),
      total: Number(input.total).toFixed(2),
      firstName: input.firstName,
      lastName: input.lastName,
      companyName: input.companyName,
      country: input.country,
      address: input.address,
      town: input.town,
      state: input.state,
      zipCode: input.zipCode,
      phone: input.phone,
      email: input.email,
      additionalInformation: input.additionalInformation,
      status: input.status,
    }

    // TODO: connect backend to this new order object to create a new one


  }

  return (
    <Layout>
      <div className='w-full h-screen px-10 pb-10 overflow-auto'>
        <h1>New Order</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="products">Products</label>
              <input
                type="text"
                name="products"
                value={input.products}
                id="products"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Sofa,Chair,Bed'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="total">Total</label>
              <input
                type="number"
                name="total"
                value={input.total}
                id="total"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='2499.32'
              />
            </div>
          </div>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={input.firstName}
                id="firstName"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='John'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                id="lastName"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Doe'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={input.companyName}
                id="companyName"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='LAVA Technologies'
              />
            </div>
          </div>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={input.country}
                id="country"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Argentina'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={input.address}
                id="address"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Fake Street 123'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="town">Town</label>
              <input
                type="text"
                name="town"
                value={input.town}
                id="town"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Posadas'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                value={input.state}
                id="state"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Misiones'
              />
            </div>
          </div>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="zipCode">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={input.zipCode}
                id="zipCode"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='3300'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={input.phone}
                id="phone"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='1234567890'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={input.email}
                id="email"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='john@mail.com'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold'>Status</label>
              <label className={input.status ? 'w-full h-[41px] border-[1px] border-slate-600 bg-green-300 flex items-center px-3 text-sm font-medium text-green-800 transition-all duration-300' : 'w-full h-[41px] border-[1px] border-slate-600 bg-red-300 flex items-center px-3 text-sm font-medium text-red-800 transition-all duration-300'} htmlFor="status">
                {input.status ? "Completed" : "Pending"}
                <input
                  type="checkbox"
                  name="status"
                  value={input.status}
                  id="status"
                  width={100}
                  height={20}
                  onChange={handleCheckboxChange}
                  className='hidden'
                />
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className='text-sm font-semibold' htmlFor="additionalInformation">Additional Information</label>
            <input
              type="text"
              name="additionalInformation"
              value={input.additionalInformation}
              id="additionalInformation"
              onChange={handleInputChange}
              className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
              placeholder='Red carpet in front of door'
            />
          </div>
          <button type='submit' className='bg-teal-500 text-xs font-semibold text-white py-3'>Save</button>
        </form>
      </div>
    </Layout>
  )
}

export default CreateOrderPage