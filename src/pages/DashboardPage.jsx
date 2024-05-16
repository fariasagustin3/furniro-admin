import Layout from "../components/Layout"

const DashboardPage = () => {
  return (
    <Layout>
      <div className="w-full h-full px-10">
        <h1 className="font-medium text-md text-[#202224]">Dashboard</h1>

        {/* data cards */}
        <div className="flex flex-row items-center justify-between mb-5">
          {/* card */}
          <div className="bg-white px-7 py-5 rounded-lg shadow-xl w-60">
            <div className="flex items-start justify-between gap-5">
              <span className="text-sm">Total Users</span>
              <div className="bg-[#8280ff9f] rounded-xl w-max px-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8280FF" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
            </div>
            <span className="font-bold text-lg">40546</span>
          </div>

          <div className="bg-white px-7 py-5 rounded-lg shadow-xl w-60">
            <div className="flex items-start justify-between gap-5">
              <span className="text-sm">Total Orders</span>
              <div className="bg-[#fec43d8a] rounded-xl w-max px-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2zm-3 6H8v-2h8v2z" fill="#FEC53D" />
                </svg>
              </div>
            </div>
            <span className="font-bold text-lg">10254</span>
          </div>

          <div className="bg-white px-7 py-5 rounded-lg shadow-xl w-60">
            <div className="flex items-start justify-between gap-5">
              <span className="text-sm">Total Sales</span>
              <div className="bg-[#4ad99287] rounded-xl w-max px-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4ad96b" d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2.06 2.06 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2s.892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A1.906 1.906 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.48 2.48 0 0 0 1.133-.281l2.399 1.963A2.077 2.077 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2s-.892-2-2-2" />
                </svg>
              </div>
            </div>
            <span className="font-bold text-lg">$87000</span>
          </div>

          <div className="bg-white px-7 py-5 rounded-lg shadow-xl w-60">
            <div className="flex items-start justify-between gap-5">
              <span className="text-sm">Total Products</span>
              <div className="bg-[#ff8f667d] rounded-xl w-max px-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 21 21">
                  <g fill="none" fill-rule="evenodd" stroke="#FF9066" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m11.492 4.067l5 2.857A2 2 0 0 1 17.5 8.661v4.678a2 2 0 0 1-1.008 1.737l-5 2.857a2 2 0 0 1-1.984 0l-5-2.857A2 2 0 0 1 3.5 13.339V8.661a2 2 0 0 1 1.008-1.737l5-2.857a2 2 0 0 1 1.984 0M14 9.5l-7-4" />
                    <path d="m4 8l5.552 2.99a2 2 0 0 0 1.896 0L17 8m-6.5 3.5V18" />
                  </g>
                </svg>
              </div>
            </div>
            <span className="font-bold text-lg">18000</span>
          </div>
        </div>

        {/* last users */}
        <div className="bg-white px-7 py-4 rounded-lg shadow-xl w-full mb-5">
          <h1 className="text-base font-bold mb-4">Lastest Users</h1>
          <div className="flex flex-col gap-5">
            <hr />
            <div className="flex flex-row items-center justify-between">
              <span className="font-medium text-sm">Agustin Farias</span>
              <span className="font-medium text-sm">agus@gmail.com</span>
              <span className="font-medium text-sm">27 May 2015</span>
              <span className="font-medium text-sm">Admin</span>
              <span className="font-bold text-sm bg-green-400 px-3 py-1 text-green-800 rounded-full">Active</span>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between">
              <span className="font-medium text-sm">Agustin Farias</span>
              <span className="font-medium text-sm">agus@gmail.com</span>
              <span className="font-medium text-sm">27 May 2015</span>
              <span className="font-medium text-sm">Admin</span>
              <span className="font-bold text-sm bg-green-400 px-3 py-1 text-green-800 rounded-full">Active</span>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between">
              <span className="font-medium text-sm">Agustin Farias</span>
              <span className="font-medium text-sm">agus@gmail.com</span>
              <span className="font-medium text-sm">27 May 2015</span>
              <span className="font-medium text-sm">Admin</span>
              <span className="font-bold text-sm bg-red-400 px-3 py-1 text-red-800 rounded-full">Inactive</span>
            </div>
          </div>
        </div>

        {/* last products */}
        <div className="bg-white px-7 py-4 rounded-lg shadow-xl w-full mb-5">
          <h1 className="text-base font-bold mb-4">Lastest Products</h1>
          <div className="flex flex-col gap-5">
            <hr />
            <div className="flex flex-row items-center justify-between">
              <img src="/product.jpg" alt="" className="w-16 h-16 rounded-md" />
              <span className="font-semibold text-sm">Modern Sofa</span>
              <span className="font-medium text-sm">$800</span>
              <span className="font-medium text-sm">27 May 2020</span>
              <span className="font-medium text-sm">15</span>
              <span className="font-medium text-sm">Living Room</span>
              <span className="font-bold text-sm bg-green-400 px-3 py-1 text-green-800 rounded-full">Active</span>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between">
              <img src="/product.jpg" alt="" className="w-16 h-16 rounded-md" />
              <span className="font-semibold text-sm">Modern Sofa</span>
              <span className="font-medium text-sm">$800</span>
              <span className="font-medium text-sm">27 May 2020</span>
              <span className="font-medium text-sm">15</span>
              <span className="font-medium text-sm">Living Room</span>
              <span className="font-bold text-sm bg-green-400 px-3 py-1 text-green-800 rounded-full">Active</span>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between">
            <img src="/product.jpg" alt="" className="w-16 h-16 rounded-md" />
              <span className="font-semibold text-sm">Modern Sofa</span>
              <span className="font-medium text-sm">$800</span>
              <span className="font-medium text-sm">27 May 2020</span>
              <span className="font-medium text-sm">15</span>
              <span className="font-medium text-sm">Living Room</span>
              <span className="font-bold text-sm bg-red-400 px-3 py-1 text-red-800 rounded-full">Inactive</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage