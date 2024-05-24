import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { imageDB } from '../../firebase'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const CreateCategoryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    status: true,
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
      status: e.target.checked
    })
  }

  const handleInputImage = (e) => {
    setSelectedImage(e.target.files[0])
  }

  const handleUploadImage = async () => {
    const imgRef = ref(imageDB, `products/${v4()}`);

    try {
      await uploadBytes(imgRef, selectedImage);
      const url = await getDownloadURL(imgRef);
      return url;
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await handleUploadImage()
    const newCategory = {
      name: input.name,
      description: input.description,
      image: url,
      status: input.status,
    }
    
    // TODO: conectar con el backend para crear una nueva categoria
    
  }

  return (
    <Layout>
      <div className='w-full h-screen px-10 pb-10 overflow-auto bg-white'>
        <h1>New Category</h1>

        {/* form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                id="name"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Living Room'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="image">Image</label>
              <input
                type="file"
                accept='image/png, image/jpeg, image/jpg'
                name="image"
                value={input.image}
                id="image"
                onChange={handleInputImage}
                className='bg-transparent border-[1px] border-slate-600 py-[9px] px-4 text-xs focus:outline-none'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold'>Status</label>
              <label className={input.status ? 'w-full h-[41px] border-[1px] border-slate-600 bg-green-300 flex items-center px-3 text-sm font-medium text-green-800 transition-all duration-300' : 'w-full h-[41px] border-[1px] border-slate-600 bg-red-300 flex items-center px-3 text-sm font-medium text-red-800 transition-all duration-300'} htmlFor="status">
                {input.status ? "Active" : "Inactive"}
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
          <div className='flex flex-col gap-1'>
            <label htmlFor="description" className='text-sm font-semibold'>Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={input.description}
              onChange={handleInputChange}
              rows={10}
              className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
              placeholder="This modern sofa is a must-have piece for any contemporary home seeking to combine style and functionality. Its elegant design features clean lines and a minimalist aesthetic, making it the perfect addition to any space, from a living room to a home office. The high-quality upholstery is not only visually appealing but also durable and easy to maintain, ensuring the sofa retains its impeccable appearance over time. The sofa offers exceptional comfort, thanks to its high-density foam filling that provides the perfect balance between firmness and softness. The cushions are designed to offer proper lumbar support, allowing for long hours of use without compromising comfort. Additionally, the robust structure, made from premium materials, guarantees long-lasting durability and resistance to daily wear and tear. Available in a variety of colors and finishes, this modern sofa easily adapts to different decor styles. Whether you prefer a neutral tone that complements your existing palette or a vibrant color that acts as a focal point, you'll find the perfect option for your space. With its combination of sophisticated design and practical functionality, this modern sofa is an investment that will transform your home into a stylish and comfortable retreat."
            />
          </div>
          <button type='submit' className='bg-teal-500 text-xs font-semibold text-white py-3'>Save</button>
        </form>
      </div>
    </Layout>
  )
}

export default CreateCategoryPage