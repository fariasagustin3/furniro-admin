import React from 'react';

const Content = ({ children }) => {
  return (
    <div className='flex flex-col flex-[3] bg-white px-5 py-3 rounded-l-[50px]'>
      {children}
    </div>
  );
}

export default Content;
