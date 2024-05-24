import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { imageDB } from '../../firebase';

const CreateProductPage = () => {
  const [imageSelected, setImageSelected] = useState(null);
  const [property, setProperty] = useState("");
  const [value, setValue] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState([]);
  const [modal, setModal] = useState(false)
  const [input, setInput] = useState({
    title: "",
    price: null,
    stock: null,
    shortDescription: "",
    SKU: "",
    category: "",
    discount: null,
    longDescription: "",
    image: "",
    colors: "",
    trending: false,
  });

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const addNewProperty = () => {
    setAdditionalInformation([
      ...additionalInformation,
      {
        property: property,
        value: value,
      }
    ]);

    setProperty("")
    setValue("")
    setModal(false)
  }

  const removeProperty = (infor) => {
    setAdditionalInformation(additionalInformation.filter(info => info !== infor))
  }

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

  const handleInputImage = (e) => {
    setImageSelected(e.target.files[0])
  }

  const handleUploadImage = async () => {
    const imgRef = ref(imageDB, `products/${v4()}`);

    try {
      await uploadBytes(imgRef, imageSelected);
      const url = await getDownloadURL(imgRef);
      return url;
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await handleUploadImage()
    const newProduct = {
      title: input.title,
      price: Number(input.price),
      stock: Number(input.stock),
      shortDescription: input.shortDescription,
      SKU: input.SKU,
      category: input.category,
      discount: Number(input.discount),
      longDescription: input.longDescription,
      image: url,
      colors: input.colors.split(","),
      trending: false,
      additionalInformation: additionalInformation
    }

    // TODO: conectar con el backend para crear un nuevo producto

  }

  return (
    <Layout>
      <div className='w-full h-screen px-10 pb-10 overflow-auto relative bg-white'>
        <h1 className="font-medium text-md text-[#202224]">New Product</h1>

        {/* form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                id="title"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='Modern Sofa'
              />
            </div>
            <div className='flex items-center gap-5'>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-sm font-semibold' htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  value={input.price}
                  id="price"
                  onChange={handleInputChange}
                  className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                  placeholder='12.99'
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-sm font-semibold' htmlFor="stock">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={input.stock}
                  id="stock"
                  onChange={handleInputChange}
                  className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                  placeholder='50'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="shortDescription" className='text-sm font-semibold'>Short Description</label>
            <textarea
              type="text"
              name="shortDescription"
              id="shortDescription"
              value={input.shortDescription}
              onChange={handleInputChange}
              rows={5}
              className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
              placeholder='This modern sofa combines elegance and comfort with clean lines, high-quality upholstery, and a minimalist design, ideal for any contemporary space. Perfect for adding style and comfort to your home.'
            />
          </div>

          <div className='flex flex-row gap-5 items-center w-full'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="SKU">SKU</label>
              <input
                type="text"
                name="SKU"
                value={input.SKU}
                id="SKU"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='KSJDHFKUH38974937Y'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="category">Category Name</label>
              <select
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                name="category"
                value={input.category}
                id="category"
                onChange={handleInputChange}
              >
                <option disabled value="">Select a category</option>
                <option value="Living Room">Living Room</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Bedroom">Bedroom</option>
              </select>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold' htmlFor="discount">Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={input.discount}
                id="discount"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='50'
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="longDescription" className='text-sm font-semibold'>Long Description</label>
            <textarea
              type="text"
              name="longDescription"
              id="longDescription"
              value={input.longDescription}
              onChange={handleInputChange}
              rows={10}
              className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
              placeholder="This modern sofa is a must-have piece for any contemporary home seeking to combine style and functionality. Its elegant design features clean lines and a minimalist aesthetic, making it the perfect addition to any space, from a living room to a home office. The high-quality upholstery is not only visually appealing but also durable and easy to maintain, ensuring the sofa retains its impeccable appearance over time. The sofa offers exceptional comfort, thanks to its high-density foam filling that provides the perfect balance between firmness and softness. The cushions are designed to offer proper lumbar support, allowing for long hours of use without compromising comfort. Additionally, the robust structure, made from premium materials, guarantees long-lasting durability and resistance to daily wear and tear. Available in a variety of colors and finishes, this modern sofa easily adapts to different decor styles. Whether you prefer a neutral tone that complements your existing palette or a vibrant color that acts as a focal point, you'll find the perfect option for your space. With its combination of sophisticated design and practical functionality, this modern sofa is an investment that will transform your home into a stylish and comfortable retreat."
            />
          </div>

          <div className='flex flex-row gap-5 items-center w-full'>
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
              <label className='text-sm font-semibold' htmlFor="colors">Colors</label>
              <input
                type="text"
                name="colors"
                value={input.colors}
                id="colors"
                onChange={handleInputChange}
                className='bg-transparent border-[1px] border-slate-600 py-3 px-4 text-xs focus:outline-none'
                placeholder='FFFFFF,eeeeee,f1f1f1'
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-sm font-semibold'>Trending</label>
              <label className={input.trending ? 'w-full h-[41px] border-[1px] border-slate-600 bg-green-300 flex items-center px-3 text-sm font-medium text-green-800 transition-all duration-300' : 'w-full h-[41px] border-[1px] border-slate-600 bg-red-300 flex items-center px-3 text-sm font-medium text-red-800 transition-all duration-300'} htmlFor="trending">
                {input.trending ? "Is Trending" : "Is Not Trending"}
                <input
                  type="checkbox"
                  name="trending"
                  value={input.trending}
                  id="trending"
                  width={100}
                  height={20}
                  onChange={handleCheckboxChange}
                  className='hidden'
                />
              </label>
            </div>
          </div>

          <div>
            <div className='flex flex-row items-center gap-5'>
              <h2 className="font-medium text-md text-[#202224] text-xl">Additional Information</h2>
              <button onClick={openModal} type='button' className='bg-[#4880FF] w-10 h-10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
            {additionalInformation.length !== 0 && (
              <table className='w-1/2'>
                <thead>
                  <tr>
                    <th className='py-3 font-semibold text-sm text-center'>Property</th>
                    <th className='py-3 font-semibold text-sm text-center'>Value</th>
                    <th className='py-3 font-semibold text-sm text-center'>Delete</th>
                  </tr>
                </thead>

                {additionalInformation.map((info, index) => (
                  <tbody key={index}>
                    <tr>
                      <td className='text-center py-2 border-y-[1px] border-gray-400'>{info.property}</td>
                      <td className='text-center py-2 border-y-[1px] border-gray-400'>{info.value}</td>
                      <td className='text-center py-2 border-y-[1px] border-gray-400'>
                        <div className='flex justify-center cursor-pointer'>
                          <button type="button" onClick={() => removeProperty(info)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#D0312D" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>

          <button type='submit' className='bg-teal-500 text-xs font-semibold text-white py-3'>Save</button>
        </form>

        {/* modal */}
        {modal && (
          <div className='bg-white rounded-md w-max h-max absolute top-0 bottom-0 right-0 left-0 m-auto px-5 py-7 shadow-2xl'>
            <div className='flex flex-col gap-5'>
              <div className='w-full flex items-center justify-between'>
                <h2>Add Property</h2>
                <button onClick={closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#D0312D" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className='flex flex-row items-center gap-5'>
                <input onChange={e => setProperty(e.target.value)} value={property} placeholder="Property" type="text" className='bg-transparent border-[1px] border-slate-600 py-3 w-60 px-4 text-xs focus:outline-none' />
                <input onChange={e => setValue(e.target.value)} value={value} placeholder='Value' type="text" className='bg-transparent border-[1px] border-slate-600 py-3 w-60 px-4 text-xs focus:outline-none' />
              </div>
              <button onClick={addNewProperty} className='bg-[#4880FF] text-sm py-2 text-white font-semibold'>ADD</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default CreateProductPage