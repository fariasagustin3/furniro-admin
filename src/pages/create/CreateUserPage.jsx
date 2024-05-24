import React, { useState } from 'react'
import Layout from '../../components/Layout'

const CreateUserPage = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      isAdmin: input.isAdmin,
    }

    // TODO: connect with backend to create a new user


  }

  return (
    <Layout>
      <div className='w-full h-screen px-10 pb-10 overflow-auto bg-white'>
        <h1>New User</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
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
          </div>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={input.email}
                id="email"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='john@mail.com'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                id="password"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold'>Admin</label>
              <label className={input.isAdmin ? 'w-full h-[41px] border-[1px] border-slate-600 bg-green-300 flex items-center px-3 text-sm font-medium text-green-800 transition-all duration-300' : 'w-full h-[41px] border-[1px] border-slate-600 bg-red-300 flex items-center px-3 text-sm font-medium text-red-800 transition-all duration-300'} htmlFor="isAdmin">
                {input.isAdmin ? "Yes" : "No"}
                <input
                  type="checkbox"
                  name="isAdmin"
                  value={input.isAdmin}
                  id="isAdmin"
                  width={100}
                  height={20}
                  onChange={handleCheckboxChange}
                  className='hidden'
                />
              </label>
            </div>
          </div>
          <button type='submit' className='bg-teal-500 text-xs font-semibold text-white py-3'>Save</button>
        </form>
      </div>
    </Layout>
  )
}

export default CreateUserPage